// Serve dist/ the way Vercel's static hosting does, for legacy/scripts/verify.sh:
// vercel.json redirects first, then the file, then <path>/index.html.
//
//   npm run build && node legacy/scripts/serve-dist.mjs [port]
//
// Redirect sources are matched against both the raw and the decoded request
// path; `:name*` matches zero or more trailing segments, as on Vercel.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../../', import.meta.url));
const dist = join(root, 'dist');
const port = Number(process.argv[2] ?? 4321);
const { redirects = [] } = JSON.parse(await readFile(join(root, 'vercel.json'), 'utf8'));

const escape = (s) => s.replace(/[.+?^${}()|[\]\\]/g, '\\$&');
const rules = redirects.map((r) => ({
  ...r,
  re: new RegExp(
    '^' + escape(r.source).replace(/\/:\w+\*/g, '(?:/.*)?').replace(/:\w+/g, '[^/]+') + '/?$',
  ),
}));

const types = {
  '.html': 'text/html; charset=utf-8', '.md': 'text/markdown; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml', '.css': 'text/css',
  '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.pdf': 'application/pdf',
};

async function file(p) {
  try {
    const s = await stat(p);
    return s.isFile() ? p : null;
  } catch {
    return null;
  }
}

createServer(async (req, res) => {
  const rawPath = req.url.split('?')[0];
  let decoded;
  try {
    decoded = decodeURIComponent(rawPath);
  } catch {
    decoded = rawPath;
  }
  // Raw UTF-8 bytes arrive as latin1 in req.url; re-read them as UTF-8.
  if (/[\x80-\xff]/.test(decoded) && !/[^\x00-\xff]/.test(decoded)) {
    decoded = Buffer.from(decoded, 'latin1').toString('utf8');
  }

  const rule = rules.find((r) => r.re.test(rawPath) || r.re.test(decoded));
  if (rule) {
    res.writeHead(rule.statusCode ?? 308, { Location: rule.destination });
    return res.end();
  }

  const rel = normalize(decoded).replace(/^(\.\.[/\\])+/, '');
  const hit =
    (await file(join(dist, rel))) ?? (await file(join(dist, rel, 'index.html')));
  if (!hit) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    return res.end('404');
  }
  res.writeHead(200, { 'Content-Type': types[extname(hit)] ?? 'application/octet-stream' });
  res.end(await readFile(hit));
}).listen(port, () => console.log(`dist/ with vercel.json redirects on http://localhost:${port}`));
