let Methods = {
	"GET":				"GET",
	"HEAD":				"HEAD",
	"POST":				"POST",
	"PUT":				"PUT",
	"OPTIONS":			"OPTIONS",
	"DELETE":			"DELETE",
	"CONNECT":			"CONNECT",
	"TRACE":			"TRACE",
	"PATCH":			"PATCH",
	"COPY":				"COPY",
	"LINK":				"LINK",
	"UNLINK":			"UNLINK",
	"PURGE":			"PURGE",
	"LOCK":				"LOCK",
	"UNLOCK":			"UNLOCK",
	"PROPFIND":			"PROPFIND",
	"VIEW":				"VIEW"
};

let Headers = {
/*STANDRD*/
    "A_IM":                              "A-IM",
    "ACCEPT":                            "Accept",
	"ACCEPT_CH":                         "Accept-CH",
	"ACCEPT_CH_LIFETIME":                "Accept-CH-Lifetime",
    "ACCEPT_CHARSET":                    "Accept-Charset",
    "ACCEPT_ENCODING":                   "Accept-Encoding",
    "ACCEPT_LANGUAGE":                   "Accept-Language",
    "ACCEPT_DATETIME":                   "Accept-Datetime",
    "ACCESS_CONTROL_REQUEST_METHOD":     "Access-Control-Request-Method",
    "ACCESS_CONTROL_REQUEST_HEADERS":    "Access-Control-Request-Headers",
	"ALTERNATES":                        "Alternates",
    "AUTHORIZATION":                     "Authorization",
    "CACHE_CONTROL":                     "Cache-Control",
    "CONNECTION":                        "Connection",
    "CONTENT_LENGTH":                    "Content-Length",
    "CONTENT_MD5":                       "Content-MD5",
    "CONTENT_TYPE":                      "Content-Type",
	"CONTENT_VERSION":                   "Content-Version",
    "COOKIE":                            "Cookie",
    "DATE":                              "Date",
	"DERIVED_FROM":                      "Derived-From",
	"DOWNLINK":                          "Downlink",
	"EARLY_DATA":                        "Early-Data",
    "EXPECT":                            "Expect",
    "FORWARDED":                         "Forwarded",
    "FROM":                              "From",
    "HOST":                              "Host",
    "IF_MATCH":                          "If-Match",
    "IF_MODIFIED_SINCE":                 "If-Modified-Since",
    "IF_NONE_MATCH":                     "If-None-Match",
    "IF_RANGE":                          "If-Range",
    "IF_UNMODIFIED_SINCE":               "If-Unmodified-Since",
    "MAX_FORWARDS":                      "Max-Forwards",
	"MIME_VERSION":                      "MIME-Version",
    "ORIGIN":                            "Origin",
    "PRAGMA":                            "Pragma",
    "PROXY_AUTHORIZATION":               "Proxy-Authorization",
    "RANGE":                             "Range",
    "REFERER":                           "Referer",
	"REFERRER_POLICY":                   "Referrer-Policy",
    "TE":                                "TE",
	"SAVE_DATA":                         "Save-Data",
    "USER_AGENT":                        "User-Agent",
    "UPGRADE":                           "Upgrade",
    "VIA":                               "Via",
    "WARNING":                           "Warning",
	"KEEP_ALIVE":                        "Keep-Alive",
/*COMMON*/
    "UPGRADE_INSECURE_REQUESTS":         "Upgrade-Insecure-Requests",
    "X_REQUESTED_WITH":                  "X-Requested-With",
	"X_ROBOTS_TAG":                      "X-Robots-Tag",
    "DNT":                               "DNT",
    "X_FORWARDED_FOR":                   "X-Forwarded-For",
    "X_FORWARDED_HOST":                  "X-Forwarded-Host",
    "X_FORWARDED_PROTO":                 "X-Forwarded-Proto",
    "FRONT_END_HTTPS":                   "Front-End-Https",
    "X_HTTP_METHOD_OVERRIDE":            "X-Http-Method-Override",
    "X_ATT_DEVICEID":                    "X-ATT-DeviceId",
    "X_WAP_PROFILE":                     "X-Wap-Profile",
    "PROXY_CONNECTION":                  "Proxy-Connection",
    "X_UIDH":                            "X-UIDH",
    "X_CSRF_TOKEN":                      "X-Csrf-Token",
    "X_REQUEST_ID":                      "X-Request-ID",
    "X_CORRELATION_ID":                  "X-Correlation-ID",
//RESPONSE
    "ACCESS_CONTROL_ALLOW_ORIGIN":       "Access-Control-Allow-Origin",
    "ACCESS_CONTROL_ALLOW_CREDENTIALS":  "Access-Control-Allow-Credentials",
    "ACCESS_CONTROL_EXPOSE_HEADERS":     "Access-Control-Expose-Headers",
    "ACCESS_CONTROL_MAX_AGE":            "Access-Control-Max-Age",
    "ACCESS_CONTROL_ALLOW_METHODS":      "Access-Control-Allow-Methods",
    "ACCESS_CONTROL_ALLOW_HEADERS":      "Access-Control-Allow-Headers",
    "ACCEPT_PATCH":                      "Accept-Patch",
    "ACCEPT_RANGES":                     "Accept-Ranges",
    "AGE":                               "Age",
    "ALLOW":                             "Allow",
    "ALT_SVC":                           "Alt-Svc",
    "CONNECTION":                        "Connection",
    "CONTENT_DISPOSITION":               "Content-Disposition",
	"CONTENT_DPR":                       "Content-DPR",
    "CONTENT_ENCODING":                  "Content-Encoding",
    "CONTENT_LANGUAGE":                  "Content-Language",
    "CONTENT_LOCATION":                  "Content-Location",
    "CONTENT_RANGE":                     "Content-Range",
    "DELTA_BASE":                        "Delta-Base",
	"DPR":                               "DPR",
    "ETAG":                              "ETag",
    "EXPIRES":                           "Expires",
    "IM":                                "IM",
	"LAST_EVENT_ID":                     "Last-Event-ID",
    "LAST_MODIFIED":                     "Last-Modified",
    "LINK":                              "Link",
    "LOCATION":                          "Location",
    "P3P":                               "P3P",
    "PRAGMA":                            "Pragma",
    "PROXY_AUTHENTICATE":                "Proxy-Authenticate",
	"PUBLIC":                            "Public",
    "PUBLIC_KEY_PINS":                   "Public-Key-Pins",
	"PUBLIC_KEY_PINS_REPORT_ONLY":       "Public-Key-Pins-Report-Only",
    "RETRY_AFTER":                       "Retry-After",
	"SERVER_TIMING":                     "Server-Timing",
	"SOURCEMAP":                         "SourceMap",
    "SERVER":                            "Server",
    "SET_COOKIE":                        "Set-Cookie",
    "STRICT_TRANSPORT_SECURITY":         "Strict-Transport-Security",
    "TRAILER":                           "Trailer",
    "TRANSFER_ENCODING":                 "Transfer-Encoding",
	"TITLE":                             "Title",
    "TK":                                "Tk",
    "VARY":                              "Vary",
    "VIA":                               "Via",
    "WARNING":                           "Warning",
    "WWW_AUTHENTICATE":                  "WWW-Authenticate",
    "X_FRAME_OPTIONS":                   "X-Frame-Options",
	"X_PERMITTED_CROSS_DOMAIN_POLICIES": "X-Permitted-Cross-Domain-Policies",
    "CONTENT_SECURITY_POLICY":           "Content-Security-Policy",
	"CONTENT_SECURITY_POLICY_REPORT_ONLY": "Content-Security-Policy-Report-Only",
	"EXPECT_CT":                         "Expect-CT",
    "X_CONTENT_SECURITY_POLICY":         "X-Content-Security-Policy",
    "X_WEBKIT_CSP":                      "X-WebKit-CSP",
    "REFRESH":                           "Refresh",
    "STATUS":                            "Status",
    "TIMING_ALLOW_ORIGIN":               "Timing-Allow-Origin",
    "X_CONTENT_DURATION":                "X-Content-Duration",
    "X_CONTENT_TYPE_OPTIONS":            "X-Content-Type-Options",
	"X_DOWNLOAD_OPTIONS":                "X-Download-Options",
    "X_POWERED_BY":                      "X-Powered-By",
    "X_REQUEST_ID":                      "X-Request-ID",
    "X_CORRELATION_ID":                  "X-Correlation-ID",
    "X_UA_COMPATIBLE":                   "X-UA-Compatible",
    "X_XSS_PROTECTION":                  "X-XSS-Protection",
	"WIDTH":                             "Width",
	"VIEWPORT_WIDTH":                    "Viewport-Width",
	"PING_FROM":                         "Ping-From",
	"PING_TO":                           "Ping-To",
	"SEC_WEBSOCKET_KEY":                 "Sec-WebSocket-Key",
	"SEC_WEBSOCKET_EXTENSIONS":          "Sec-WebSocket-Extensions",
	"SEC_WEBSOCKET_ACCEPT":              "Sec-WebSocket-Accept",
	"SEC_WEBSOCKET_PROTOCOL":            "Sec-WebSocket-Protocol",
	"SEC_WEBSOCKET_VERSION":             "Sec-WebSocket-Version",
	"LARGE_ALLOCATION":                  "Large-Allocation",
	"X_DNS_PREFETCH_CONTROL":            "X-DNS-Prefetch-Control"
};

let ContentEncodings = {
	"GZIP":         "gzip",
	"COMPRESS":     "compress",
	"DEFLATE":      "deflate",
	"IDENTITY":     "identity",
	"BR":           "br",
	"SDCH":         "sdch",
	"AES128GCM":    "aes128gcm",
	"EXI":          "exi",
	"PACK200_GZIP": "pack200-gzip",
	"X_COMPRESS":   "x-compress",
	"X_GZIP":       "x-gzip"
};

let TrackingStatuses = {
    "UNDER_CONSTRUCTION":       "!",
    "DYNAMIC":                  "?",
    "GATEWAY":                  "G",
    "NOT_TRACKING":             "N",
    "TRACKING":                 "T",
    "TRACKING_WITH_CONSENT":    "C",
    "TRACKING_ONLY_IF_CONSENT": "P",
    "DISREGARDING_DNT":         "D",
    "UPDATED":                  "U"
};

let MimeTypes = {
	"Application": {
        "ATOM_XML":     "application/atom+xml",
        "EDI_X12":      "application/EDI-X12",
        "EDIFACT":      "application/EDIFACT",
        "JSON":         "application/json",
        "JAVASCRIPT":   "application/javascript",
        "OCTET_STREAM": "application/octet-stream",
        "OGG":          "application/ogg",
        "PDF":          "application/pdf",
        "POSTSCRIPT":   "application/postscript",
        "SOAP_XML":     "application/soap+xml",
        "FONT_WOFF":    "application/font-woff",
        "XHTML_XML":    "application/xhtml+xml",
        "XML_DTD":      "application/xml-dtd",
        "XOP_XML":      "application/xop+xml",
        "ZIP":          "application/zip",
        "GZIP":         "application/gzip",
        "X_BITTORRENT": "application/x-bittorrent",
        "X_TEX":        "application/x-tex",
        "XML":          "application/xml",
		"X": {
			"WWW_FORM_URLENCODED": "application/x-www-form-urlencoded",
			"DVI":                 "application/x-dvi",
			"LATEX":               "application/x-latex",
			"FONT_TTF":            "application/x-font-ttf",
			"SHOCKWAVE_FLASH":     "application/x-shockwave-flash",
			"STUFFIT":             "application/x-stuffit",
			"RAR_COMPRESSED":      "application/x-rar-compressed",
			"TAR":                 "application/x-tar",
			"JQUERY_TMPL":         "application/x-jquery-tmpl",
			"JAVASCRIPT":          "application/x-javascript"
		},
		"Pkcs": {
			"PKCS12":              "application/x-pkcs12",
			"PKCS7_CERTIFICATES":  "application/x-pkcs7-certificates",
			"PKCS7_CERTREQRESP":   "application/x-pkcs7-certreqresp",
			"PKCS7_MIME":          "application/x-pkcs7-mime",
			"PKCS7_SIGNATURE":     "application/x-pkcs7-signature"
		}
	},
	"Audio": {
		"BASIC":            "audio/basic",
		"L24":              "audio/L24",
		"MP4":              "audio/mp4",
		"AAC":              "audio/aac",
		"MPEG":             "audio/mpeg",
		"OGG":              "audio/ogg",
		"VORBIS":           "audio/vorbis",
		"X_MS_WMA":         "audio/x-ms-wma",
		"X_MS_WAX":         "audio/x-ms-wax",
		"VND_RN_REALAUDIO": "audio/vnd.rn-realaudio",
		"VND_WAVE":         "audio/vnd.wave",
		"WEBM":             "audio/webm"
	},
	"Image": {
		"GIF":                "image/gif",
		"JPEG":               "image/jpeg",
		"PJPEG":              "image/pjpeg",
		"PNG":                "image/png",
		"SVG_XML":            "image/svg+xml",
		"TIFF":               "image/tiff",
		"VND_MICROSOFT_ICON": "image/vnd.microsoft.icon",
		"VND_WAP_WBMP":       "image/vnd.wap.wbmp",
		"WEBP":               "image/webp"
	},
	"Message": {
		"HTTP":     "message/http",
		"IMDN_XML": "message/imdn+xml",
		"PARTIAL":  "message/partial",
		"RFC822":   "message/rfc822"
	},
	"Model": {
		"EXAMPLE":    "model/example",
		"IGES":       "model/iges",
		"MESH":       "model/mesh",
		"VRML":       "model/vrml",
		"X3D_BINARY": "model/x3d+binary",
		"X3D_VRML":   "model/x3d+vrml",
		"X3D_XML":    "model/x3d+xml"
	},
	"Multipart": {
		"MIXED":       "multipart/mixed",
		"ALTERNATIVE": "multipart/alternative",
		"RELATED":     "multipart/related",
		"FORM_DATA":   "multipart/form-data",
		"SIGNED":      "multipart/signed",
		"ENCRYPTED":   "multipart/encrypted"
	},
	"Text": {
		"CMD":            "text/cmd",
		"CSS":            "text/css",
		"CSV":            "text/csv",
		"HTML":           "text/html",
		"JAVASCRIPT":     "text/javascript",
		"PLAIN":          "text/plain",
		"PHP":            "text/php",
		"XML":            "text/xml",
		"MARKDOWN":       "text/markdown",
		"CACHE_MANIFEST": "text/cache-manifest"
	},
	"Video": {
		"MPEG":      "video/mpeg",
		"MP4":       "video/mp4",
		"OGG":       "video/ogg",
		"QUICKTIME": "video/quicktime",
		"WEBM":      "video/webm",
		"X_MS_WMV":  "video/x-ms-wmv",
		"X_FLV":     "video/x-flv",
		"_3GPP":     "video/3gpp",
		"_3GPP2":    "video/3gpp2"
	},
	"Vnd": {
		"Od": {
			"TEXT":         "application/vnd.oasis.opendocument.text",
			"SPERADSHEET":  "application/vnd.oasis.opendocument.spreadsheet",
			"PRESENTATION": "application/vnd.oasis.opendocument.presentation",
			"GRAPHICS":     "application/vnd.oasis.opendocument.graphics"
		},
		"MS": {
			"EXCEL":           "application/vnd.ms-excel",
			"EXCEL_2007":      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
			"POWERPOINT":      "application/vnd.ms-powerpoint",
			"POWERPOINT_2007": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
			"WORD":            "application/msword",
			"WORD_2007":       "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
		},
		"XUL": "application/vnd.mozilla.xul+xml",
		"KML": "application/vnd.google-earth.kml+xml"
	},
	"X": {
		"WWW_FORM_URLENCODED": "application/x-www-form-urlencoded",
		"DVI":                 "application/x-dvi",
		"LATEX":               "application/x-latex",
		"FONT_TTF":            "application/x-font-ttf",
		"SHOCKWAVE_FLASH":     "application/x-shockwave-flash",
		"STUFFIT":             "application/x-stuffit",
		"RAR_COMPRESSED":      "application/x-rar-compressed",
		"TAR":                 "application/x-tar",
		"JQUERY_TMPL":         "application/x-jquery-tmpl",
		"JAVASCRIPT":          "application/x-javascript"
	},
	"Pkcs": {
		"X_PKCS12":              "application/x-pkcs12",
		"X_PKCS7_CERTIFICATES":  "application/x-pkcs7-certificates",
		"X_PKCS7_CERTREQRESP":   "application/x-pkcs7-certreqresp",
		"X_PKCS7_MIME":          "application/x-pkcs7-mime",
		"X_PKCS7_SIGNATURE":     "application/x-pkcs7-signature"
	}
};

module.exports.Headers          = Headers;
module.exports.TrackingStatuses = TrackingStatuses;
module.exports.MimeTypes        = MimeTypes;
module.exports.Methods			= Methods;
module.exports.ContentEncodings = ContentEncodings;

















