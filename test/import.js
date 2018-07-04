let { Headers } = require('http-headers-js');

console.log(Headers.AUTHORIZATION);

let mt = require('http-headers-js').MimeTypes;

console.log(mt.Image.GIF);

let { Methods } = require('http-headers-js');

console.log(Methods.POST);

let { ContentEncodings } = require('http-headers-js');

console.log(ContentEncodings.DEFLATE);