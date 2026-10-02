if (typeof cname == 'undefined'){
    var cname = '000000';
}

if (typeof identifier == 'undefined'){
    var identifier = '';
}

if (typeof dbg == 'undefined'){
    var dbg = 0;
}

function includeScript(content){
    document.write(content);
}

function readFromUri(parameter){
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split('=');
        if (pair[0] == parameter) {
            return pair[1];
        }
    }
    return null;
}

function getCname() {
    var uriParam = readFromUri('regcn');
    if( uriParam !== null){
        return uriParam;
    }
    return cname;
}

function checkForDbg() {
    return dbg == 1;
}

function enableDbgCall(separator){
    if(checkForDbg()){
        var dateObj = new Date();
        return separator + 'dbg=1&_=' + dateObj.getTime();
    }
    return '';
}

function getOptionalQueryString(){
    var qryStr = '&_h=' + encodeURIComponent(location.host)
        + '&_t=' + (new Date().getTime())
        + '&_qs=' + encodeURIComponent(window.location.search);

    var identifier = getIdentifier();
    if(identifier.length > 0){
        qryStr = qryStr + '&regident=' + identifier;
    }
    return qryStr + enableDbgCall('&')
}

function getOptionalContentPath(){
    var path = '';

    var identifier = getIdentifier();
    if(identifier.length > 0){
        path = path + '/' + identifier;
    }
    return path + enableDbgCall('/?');
}

function getIdentifier(){
    var uriParam = readFromUri('regident');
    if(uriParam !== null){
        identifier = uriParam;
        var reg = new RegExp('^[a-zA-Z0-9]+$')
        if (reg.test(identifier)) {
            return identifier
        }
    }
    return identifier;
}

function getXMLhttp() {
    return new XMLHttpRequest();
}

function include(url){
    includeScript('\<script src="' + url + '">\<\/script>');
}

var askCname = getCname();


var askIdentifier = getIdentifier();
include('http://i.cdnpark.com/registrar/v3/content/' + askCname + getOptionalContentPath());
include('http://js.parkingcrew.net/jsparkcaf.php?_v=3&regcn=' + askCname + getOptionalQueryString());