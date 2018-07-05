# Standard and common HTTP headers and Mime types

> current version 1.0.5

Provides standard and common non-standard http headers, mime-types, methods, content codings and tracking statuses.

All headers are capitalized, hence `Access-Control-Request-Method`

All mime-types are lowercase, hence `video/mpeg`

All content codings are lowercase, hence `deflate`

All methods are uppercase, hence `POST`

Constant names constructed from uppercase value, `-` and `+` substituted with `_`, hence

    Headers.STRICT_TRANSPORT_SECURITY //Strict-Transport-Security
    MimeTypes.Application.XOP_XML     //application/xop+xml
    MimeTypes.Model.X3D_VRML          //model/x3d+vrml
    ContentEncodings.X_GZIP           //x-gzip

## Usage

Install local

    npm install http-headers-js --save

Available at the moment

    let { 
        Headers, 
        TrackingStatuses, 
        MimeTypes, 
        Methods,
        ContentEncodings
    } = require('http-headers-js');
    
- Headers - headers
- TrackingStatuses - tracking statuses
- Methods - http methods
- ContentEncodings - http content coding registry
- MimeTypes - yes, mime types, fair and square

    
Import and usage, as exemplified by express js middleware

    let { Headers } = require('http-headers-js');
    /* code */
    isLoggedIn: function (req, res, next) {    
        let token = req.get(Headers.AUTHORIZATION);
        if (token == null) {
            return res.status(401).send("Not authorized");
        }
        OAuth.get(token) //some library to check token
        .then(function (user) {
            if (user == null) {
                return res.status(401).send("Not authorized");
            }            
            next();
        })
    }

    /*code*/
    const { MimeTypes } = require('http-headers-js');

    class ExtensionFilter {

        static getExtensionByContentType (contentType) {            
            switch (contentType) {
            case MimeTypes.PDF:
                return "PDF";
            case MimeTypes.WORD_2007:
                return "DOCX";
            defaut:
                return null;
            }
        }
        
    }

To use mime types first access type, then subtype:

    MimeTypes.Application.SOAP_XML              //application/soap+xml
    MimeTypes.Application.X.WWW_FORM_URLENCODED //application/x-www-form-urlencoded
    MimeTypes.X.WWW_FORM_URLENCODED             //application/x-www-form-urlencoded
    MimeTypes.Vnd.Od.TEXT                       //application/vnd.oasis.opendocument.text
    MimeTypes.Vnd.MS.EXCEL                      //application/vnd.ms-excel
    MimeTypes.Vnd.MS.EXCEL_2007                 //application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
    MimeTypes.Pkcs.X_PKCS7_CERTREQRESP          //application/x-pkcs7-certreqresp
    
There are also two duplicates for mime types. One is `MimeTypes.X` and `MimeType.Application.X`, another is `MimeTypes.Pkcs` and `MimeTypes.Application.Pkcs`

## Dependencies

No additional dependencies for production, `mocha` and `chai` for testing.
    
## Test

    npm test

## Development

See [bitbucket repository](https://bitbucket.org/sypachev_s_s/http-headers-js/)

## Direct Contacts

Issues? Write to `sypachev_s_s@mail.ru`

## What's new
### 1.0.2
- Added `Methods`
- Added `Last-Event-ID`, `DPR`, `Content-DPR`, `Accept-CH`, `Accept-CH-Lifetime`, `Width`, `Viewport-Width`, `Keep-Alive` headers
### 1.0.3
- Added `Content-Version`, `Derived-From`, `Alternates`, `MIME-Version`, `Public`, `Title` headers
- Added `ContentEncodings`
### 1.0.5
- Added `Early-Data`, `Downlink`, `Save-Data`, `Referrer-Policy`, `Content-Security-Policy-Report-Only`, 
`Expect-CT`, `Public-Key-Pins-Report-Only`, `X-Download-Options`, `X-Permitted-Cross-Domain-Policies`, `Sec-WebSocket-...`, `Large-Allocation`, `Server-Timing`, `SourceMap`,
`X-DNS-Prefetch-Control`, `X-Robots-Tag`
- Fixed `VIEWPORT-WIDTH` to `VIEWPORT_WIDTH`, `3GPP` to `_3GPP` (`_3GPP2`), `VND.RN_REALAUDIO` to `VND_RN_REALAUDIO`, `VND.WAVE` to `VND_WAVE`, `VND.MICROSOFT.ICON` to `VND_MICROSOFT_ICON`, `VND.WAP.WBMP` to `VND_WAP_WBMP`
- Autotest key names























