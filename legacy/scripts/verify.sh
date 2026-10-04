#!/usr/bin/env bash
# Request every backlinked target and report status + final URL.
#
#   legacy/scripts/verify.sh                          # http://localhost:4321
#   legacy/scripts/verify.sh https://www.healthcheck.org
#
# Checks every `path` in legacy/targets.csv, plus every raw URL spelling Ahrefs
# saw (targets.json `raw_targets`, e.g. trailing-%20 variants) and the raw
# UTF-8 spelling of the curly-apostrophe paths. A row passes when it is a 200,
# or a single 301 whose Location answers 200. Exits non-zero on any failure.
#
# Locally, `astro preview` does not apply vercel.json, so serve dist/ with
# `node legacy/scripts/serve-dist.mjs` (same port) to check the redirects too.
set -u
BASE="${1:-http://localhost:4321}"
BASE="${BASE%/}"
HERE="$(cd "$(dirname "$0")" && pwd)"

python3 - "$HERE/../targets.json" <<'PY' > /tmp/verify-targets.$$
import json, sys
from urllib.parse import quote, urlsplit
seen = []
def add(p, label):
    if p not in [s for s, _ in seen]:
        seen.append((p, label))
for t in json.load(open(sys.argv[1], encoding='utf-8')):
    p = t['path']
    add(quote(p, safe="/-._~!$&'()*+,;=:@?%"), 'path')
    if any(ord(c) > 127 for c in p):
        add(p, 'raw-utf8')
    for raw in t.get('raw_targets', []):
        u = urlsplit(raw)
        add(u.path + ('?' + u.query if u.query else ''), 'variant')
for p, label in seen:
    print(f'{label}\t{p}')
PY

fail=0; total=0
printf '%-6s %-4s %-4s  %s\n' RESULT CODE NEXT "PATH -> FINAL URL"
while IFS=$'\t' read -r label path; do
  total=$((total+1))
  read -r code loc < <(curl -s -o /dev/null --path-as-is -w '%{http_code} %{redirect_url}\n' "$BASE$path")
  next=""
  final="$BASE$path"
  ok=0
  if [ "$code" = "200" ]; then
    ok=1
  elif [ "$code" = "301" ] && [ -n "$loc" ]; then
    next=$(curl -s -o /dev/null -w '%{http_code}' "$loc")
    final="$loc"
    [ "$next" = "200" ] && ok=1
  fi
  if [ $ok = 1 ]; then r=ok; else r=FAIL; fail=$((fail+1)); fi
  printf '%-6s %-4s %-4s  %s -> %s%s\n' "$r" "$code" "${next:--}" "$path" "$final" "$([ "$label" != path ] && echo "  ($label)")"
done < /tmp/verify-targets.$$
rm -f /tmp/verify-targets.$$

echo
echo "$((total-fail))/$total passed against $BASE"
[ $fail = 0 ]
