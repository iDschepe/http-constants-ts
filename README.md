# Http constants for mime-types, headers, tracking-statuses, methods, content-encodings, csp, response codes and cache-control instructions

Provides standard and common non-standard http headers, mime-types, methods, content codings, response statuses, CSP directives and sources, cache-control instructions and tracking statuses.

All headers are capitalized, hence `Access-Control-Request-Method`
All mime-types are lowercase, hence `video/mpeg`
All content codings are lowercase, hence `deflate`
All methods are uppercase, hence `POST`
All response codes are integer numbers, hence `404`
All Cache-Control instructions are lowercase, hence `min-fresh`
All CSP directives and sources are lowercase, hence `unsafe-eval`

Key names constructed from uppercase values, `-`, `+` and `.` substituted with `_`, hence

    Headers.STRICT_TRANSPORT_SECURITY //Strict-Transport-Security
    MimeTypes.Application.XOP_XML     //application/xop+xml
    MimeTypes.Model.X3D_VRML          //model/x3d+vrml
    ContentEncodings.X_GZIP           //x-gzip
	MimeTypes.Image.VND_WAP_WBMP      //image/vnd.wap.wbmp
	ResponseCodes.I_AM_A_TEAPOT       //418
	CacheControls.MAX_AGE             //max-age
    CSPS.UNSAFE_EVAL                  //unsafe-eval
	
## Usage

Install local

    npm install http-headers-ts --save

Available at the moment

- Headers - headers
- TrackingStatuses - tracking statuses
- Methods - http methods
- ContentEncodings - http content coding registry
- ResponseCodes - response codes
- CacheControls - Cache-Control instructions
- CSPD - CSP directives
- CSPS - some CSP source values
- MimeTypes - yes, mime types, fair and square


## Dependencies

No additional dependencies for production.

## Development

See [bitbucket repository](https://bitbucket.org/iDschepe/http-headers-ts/)

## Direct Contacts

Issues? Feel free to add a bug or create a PR. 

Best regards
iDschepe

## What's new
### 1.0.0

Thanks to / forked from https://bitbucket.org/sypachev_s_s/http-headers-js
