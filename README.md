# Standard and common HTTP headers and Mime types

> current version 1.0.0

Provides standard and common non-standard http headers, mime-types and tracking statuses.

All headers are capitalized, hence `Access-Control-Request-Method`

All mime-types are lowercase, hence `video/mpeg`

## Usage

Install local
 
    npm install http-headers-js --save
	
Available at the moment

    let { Headers, TrackingStatuses, MimeTypes } = require('');
	
- Headers - headers
- TrackingStatuses - tracking statuses
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
	
## Test

    npm test

## Development

See [bitbucket repository](https://bitbucket.org/sypachev_s_s/http-headers-js/)

## Direct Contacts

Issues? Write to `sypachev_s_s@mail.ru`
	
	