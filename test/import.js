let { Headers } = require('http-headers-js');

console.log(Headers.AUTHORIZATION);

let mt = require('http-headers-js').MimeTypes;

console.log(mt.Image.GIF);
console.log(mt.Image.VND_WAP_WBMP);

let { Methods } = require('http-headers-js');

console.log(Methods.POST);

let { ContentEncodings } = require('http-headers-js');

console.log(ContentEncodings.DEFLATE);

let { ResponseCodes } = require('http-headers-js');

console.log(ResponseCodes.NOT_FOUND);

let { RespCodeIs } = require('http-headers-js');

console.log(RespCodeIs.ServerErr(500));
console.log(RespCodeIs.ServerErr(ResponseCodes.INTERNAL_SERVER_ERROR));
console.log(RespCodeIs.ClientErr(ResponseCodes.USE_PROXY));

let { CacheControls } = require('http-headers-js');
console.log(CacheControls.MAX_AGE);

let { CSPD, CSPS } = require('http-headers-js');

console.log(CSPS.BASE_URI);
console.log(CSPS.SELF);
console.log(CSPS.SELF_QTD);