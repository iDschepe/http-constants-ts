var RespCodeIs = {
	Info: function (code) {
		return code > 99 && code < 200;
	},
	Success: function (code) {
		return code > 199 && code < 300;
	},
	Redirect: function (code) {
		return code > 299 && code < 400;
	},
	ClientErr: function (code) {
		return code > 399 && code < 500;
	},
	ServerErr: function (code) {
		return code > 499 && code < 600;
	}
};

var CSPD = {
	"BASE_URI": "base-uri",
	"BLOCK_ALL_MIXED_CONTENT": "block-all-mixed-content",
	"CHILD_SRC": "child-src",
	"CONNECT_SRC": "connect-src",
	"DEFAULT_SRC": "default-src",
	"FONT_SRC": "font-src",
	"FORM_ACTION": "form-action",
	"FRAME_ANCESTORS": "frame-ancestors",
	"FRAME_SRC": "frame-src",
	"IMG_SRC": "img-src",
	"MANIFEST_SRC": "manifest-src",
	"MEDIA_SRC": "media-src",
	"OBJECT_SRC": "object-src",
	"PLUGIN_TYPES": "plugin-types",
	"REFERRER": "referrer",
	"REPORT_URI": "report-uri",
	"REQUIRE_SRI_FOR": "require-sri-for",
	"PREFETCH_SRC": "prefetch-src",
	"SANDBOX": "sandbox",
	"SCRIPT_SRC": "script-src",
	"STYLE_SRC": "style-src",
	"UPGRADE_INSECURE_REQUESTS": "upgrade-insecure-requests",
	"WORKER_SRC": "worker-src"
};

var CSPS = {
	"SELF": "self",
	"NONE": "none",
	"STRICT_DYNAMIC": "strict-dynamic",
	"UNSAFE_INLINE": "unsafe-inline",
	"UNSAFE_EVAL": "unsafe-eval",
	//quoted
	"SELF_QTD": "'self'",
	"NONE_QTD": "'none'",
	"STRICT_DYNAMIC_QTD": "'strict-dynamic'",
	"UNSAFE_INLINE_QTD": "'unsafe-inline'",
	"UNSAFE_EVAL_QTD": "'unsafe-eval'"
};

var CacheControls = {
    "IMMUTABLE": "immutable",
    "MAX_AGE": "max-age",
    "MAX_STALE": "max-stale",
    "MIN_FRESH": "min-fresh",
    "MUST_REVALIDATE": "must-revalidate",
    "NO_CACHE": "no-cache",
    "NO_STORE": "no-store",
    "NO_TRANSFORM": "no-transform",
    "ONLY_IF_CACHED": "only-if-cached",
    "PRIVATE": "private",
    "PROXY_REVALIDATE": "proxy-revalidate",
    "PUBLIC": "public",
    "S_MAXAGE": "s-maxage",
    "STALE_IF_ERROR": "stale-if-error",
    "STALE_WHILE_REVALIDATE": "stale-while-revalidate"
};

var ResponseCodes = {
	
	"CONTINUE":           100,
	"SWITCHING_PROTOCOL": 101,
	"PROCESSING":         102,
	"EARLY_HINTS":        103,
	
	"OK":                 200,
	"CREATED":            201,
	"ACCEPTED":           202,
	"NON_AUTHORITATIVE_INFORMATION": 203,
	"NO_CONTENT":         204,
	"RESET_CONTENT":      205,
	"PARTIAL_CONTENT":    206,
	"MULTI_STATUS":       207,
	"ALREADY_REPORTED":   208,
	"IM_USED":            226,

	"MULTIPLE_CHOICE":    300,
	"MOVED_PERMANENTLY":  301,
	"MOVED_TEMPORARILY":  302,
	"FOUND":              302,
	"SEE_OTHER":          303,
	"NOT_MODIFIED":       304,
	"USE_PROXY":          305,
	"TEMPORARY_REDIRECT": 307,
	"PERMANENT_REDIRECT": 308,

	"BAD_REQUEST":        400,
	"UNAUTHORIZED":       401,
	"PAYMENT_REQUIRED":   402,
	"FORBIDDEN":          403,
	"NOT_FOUND":          404,
	"METHOD_NOT_ALLOWED": 405,
	"NOT_ACCEPTABLE":     406,
	"PROXY_AUTHENTICATION_REQUIRED": 407,
	"REQUEST_TIMEOUT":    408,
	"CONFLICT":           409,
	"GONE":               410,
	"LENGTH_REQUIRED":    411,
	"PRECONDITION_FAILED": 412,
	"PAYLOAD_TOO_LARGE":  413,
	"URI_TOO_LONG":       414,
	"UNSUPPORTED_MEDIA_TYPE": 415,
	"RANGE_NOT_SATISFIABLE": 416,
	"EXPECTATION_FAILED": 417,
	"I_AM_A_TEAPOT":      418,
	"MISDIRECTED_REQUEST": 421,
	"UNPROCESSABLE_ENTITY": 422,
	"LOCKED":             423,
	"FAILED_DEPENDENCY":  424,
	"UPGRADE_REQUIRED":   426,
	"PRECONDITION_REQUIRED": 428,
	"TOO_MANY_REQUESTS":  429,
	"REQUEST_HEADER_FIELDS_TOO_LARGE": 431,
	"REQUESTED_HOST_UNAVAILABLE": 434,
	"RETRY_WITH":         449,
	"UNAVAILABLE_FOR_LEGAL_REASONS": 451,

	"INTERNAL_SERVER_ERROR": 500,
	"NOT_IMPLEMENTED":       501,
	"BAD_GATEWAY":           502,
	"SERVICE_UNAVAILABLE":   503,
	"GATEWAY_TIMEOUT":       504,
	"HTTP_VERSION_NOT_SUPPORTED": 505,
	"VARIANT_ALSO_NEGOTIATES": 506,
	"INSUFFICIENT_STORAGE":  507,
	"LOOP_DETECTED":         508,
	"BANDWIDTH_LIMIT_EXCEEDED": 509,
	"NOT_EXTENDED":          510,
	"NETWORK_AUTHENTICATION_REQUIRED": 511,
	"UNKNOWN_ERROR":         520,
	"WEB_SERVER_IS_DOWN":    521,
	"CONNECTION_TIMED_OUT":  522,
	"ORIGIN_IS_UNREACHABLE": 523,
	"A_TIMEOUT_OCCURRED":    524,
	"SSL_HANDSHAKE_FAILED":  525,
	"INVALID_SSL_CERTIFICATE": 526

};

var Methods = {
    "CONNECT": "CONNECT",
    "COPY": "COPY",
    "DELETE": "DELETE",
    "GET": "GET",
    "HEAD": "HEAD",
    "LINK": "LINK",
    "LOCK": "LOCK",
    "OPTIONS": "OPTIONS",
    "PATCH": "PATCH",
    "POST": "POST",
    "PROPFIND": "PROPFIND",
    "PURGE": "PURGE",
    "PUT": "PUT",
    "TRACE": "TRACE",
    "UNLINK": "UNLINK",
    "UNLOCK": "UNLOCK",
    "VIEW": "VIEW"
};

var Headers = {
    "A_IM": "A-IM",
    "ACCEPT": "Accept",
    "ACCEPT_CH": "Accept-CH",
    "ACCEPT_CH_LIFETIME": "Accept-CH-Lifetime",
    "ACCEPT_CHARSET": "Accept-Charset",
    "ACCEPT_DATETIME": "Accept-Datetime",
    "ACCEPT_ENCODING": "Accept-Encoding",
    "ACCEPT_LANGUAGE": "Accept-Language",
    "ACCEPT_PATCH": "Accept-Patch",
    "ACCEPT_RANGES": "Accept-Ranges",
    "ACCESS_CONTROL_ALLOW_CREDENTIALS": "Access-Control-Allow-Credentials",
    "ACCESS_CONTROL_ALLOW_HEADERS": "Access-Control-Allow-Headers",
    "ACCESS_CONTROL_ALLOW_METHODS": "Access-Control-Allow-Methods",
    "ACCESS_CONTROL_ALLOW_ORIGIN": "Access-Control-Allow-Origin",
    "ACCESS_CONTROL_EXPOSE_HEADERS": "Access-Control-Expose-Headers",
    "ACCESS_CONTROL_MAX_AGE": "Access-Control-Max-Age",
    "ACCESS_CONTROL_REQUEST_HEADERS": "Access-Control-Request-Headers",
    "ACCESS_CONTROL_REQUEST_METHOD": "Access-Control-Request-Method",
    "AGE": "Age",
    "ALLOW": "Allow",
    "ALT_SVC": "Alt-Svc",
    "ALTERNATES": "Alternates",
    "AUTHORIZATION": "Authorization",
    "CACHE_CONTROL": "Cache-Control",
    "CONNECTION": "Connection",
    "CONTENT_DISPOSITION": "Content-Disposition",
    "CONTENT_DPR": "Content-DPR",
    "CONTENT_ENCODING": "Content-Encoding",
    "CONTENT_LANGUAGE": "Content-Language",
    "CONTENT_LENGTH": "Content-Length",
    "CONTENT_LOCATION": "Content-Location",
    "CONTENT_MD5": "Content-MD5",
    "CONTENT_RANGE": "Content-Range",
    "CONTENT_SECURITY_POLICY": "Content-Security-Policy",
    "CONTENT_SECURITY_POLICY_REPORT_ONLY": "Content-Security-Policy-Report-Only",
    "CONTENT_TYPE": "Content-Type",
    "CONTENT_VERSION": "Content-Version",
    "COOKIE": "Cookie",
    "DATE": "Date",
    "DELTA_BASE": "Delta-Base",
    "DERIVED_FROM": "Derived-From",
    "DNT": "DNT",
    "DOWNLINK": "Downlink",
    "DPR": "DPR",
    "EARLY_DATA": "Early-Data",
    "ETAG": "ETag",
    "EXPECT": "Expect",
    "EXPECT_CT": "Expect-CT",
    "EXPIRES": "Expires",
    "FORWARDED": "Forwarded",
    "FROM": "From",
    "FRONT_END_HTTPS": "Front-End-Https",
    "HOST": "Host",
    "IF_MATCH": "If-Match",
    "IF_MODIFIED_SINCE": "If-Modified-Since",
    "IF_NONE_MATCH": "If-None-Match",
    "IF_RANGE": "If-Range",
    "IF_UNMODIFIED_SINCE": "If-Unmodified-Since",
    "IM": "IM",
    "KEEP_ALIVE": "Keep-Alive",
    "LARGE_ALLOCATION": "Large-Allocation",
    "LAST_EVENT_ID": "Last-Event-ID",
    "LAST_MODIFIED": "Last-Modified",
    "LINK": "Link",
    "LOCATION": "Location",
    "MAX_FORWARDS": "Max-Forwards",
    "MIME_VERSION": "MIME-Version",
    "ORIGIN": "Origin",
    "P3P": "P3P",
    "PING_FROM": "Ping-From",
    "PING_TO": "Ping-To",
    "PRAGMA": "Pragma",
    "PROXY_AUTHENTICATE": "Proxy-Authenticate",
    "PROXY_AUTHORIZATION": "Proxy-Authorization",
    "PROXY_CONNECTION": "Proxy-Connection",
    "PUBLIC": "Public",
    "PUBLIC_KEY_PINS": "Public-Key-Pins",
    "PUBLIC_KEY_PINS_REPORT_ONLY": "Public-Key-Pins-Report-Only",
    "RANGE": "Range",
    "REFERER": "Referer",
    "REFERRER_POLICY": "Referrer-Policy",
    "REFRESH": "Refresh",
    "RETRY_AFTER": "Retry-After",
    "SAVE_DATA": "Save-Data",
    "SEC_WEBSOCKET_ACCEPT": "Sec-WebSocket-Accept",
    "SEC_WEBSOCKET_EXTENSIONS": "Sec-WebSocket-Extensions",
    "SEC_WEBSOCKET_KEY": "Sec-WebSocket-Key",
    "SEC_WEBSOCKET_PROTOCOL": "Sec-WebSocket-Protocol",
    "SEC_WEBSOCKET_VERSION": "Sec-WebSocket-Version",
    "SERVER": "Server",
    "SERVER_TIMING": "Server-Timing",
    "SET_COOKIE": "Set-Cookie",
    "SOURCEMAP": "SourceMap",
    "STATUS": "Status",
    "STRICT_TRANSPORT_SECURITY": "Strict-Transport-Security",
    "TE": "TE",
    "TIMING_ALLOW_ORIGIN": "Timing-Allow-Origin",
    "TITLE": "Title",
    "TK": "Tk",
    "TRAILER": "Trailer",
    "TRANSFER_ENCODING": "Transfer-Encoding",
    "UPGRADE": "Upgrade",
    "UPGRADE_INSECURE_REQUESTS": "Upgrade-Insecure-Requests",
    "USER_AGENT": "User-Agent",
    "VARY": "Vary",
    "VIA": "Via",
    "VIEWPORT_WIDTH": "Viewport-Width",
    "WARNING": "Warning",
    "WIDTH": "Width",
    "WWW_AUTHENTICATE": "WWW-Authenticate",
    "X_ATT_DEVICEID": "X-ATT-DeviceId",
    "X_CONTENT_DURATION": "X-Content-Duration",
    "X_CONTENT_SECURITY_POLICY": "X-Content-Security-Policy",
    "X_CONTENT_TYPE_OPTIONS": "X-Content-Type-Options",
    "X_CORRELATION_ID": "X-Correlation-ID",
    "X_CSRF_TOKEN": "X-Csrf-Token",
    "X_DNS_PREFETCH_CONTROL": "X-DNS-Prefetch-Control",
    "X_DOWNLOAD_OPTIONS": "X-Download-Options",
    "X_FORWARDED_FOR": "X-Forwarded-For",
    "X_FORWARDED_HOST": "X-Forwarded-Host",
    "X_FORWARDED_PROTO": "X-Forwarded-Proto",
    "X_FRAME_OPTIONS": "X-Frame-Options",
    "X_HTTP_METHOD_OVERRIDE": "X-Http-Method-Override",
    "X_PERMITTED_CROSS_DOMAIN_POLICIES": "X-Permitted-Cross-Domain-Policies",
    "X_POWERED_BY": "X-Powered-By",
    "X_REQUEST_ID": "X-Request-ID",
    "X_REQUESTED_WITH": "X-Requested-With",
    "X_ROBOTS_TAG": "X-Robots-Tag",
    "X_UA_COMPATIBLE": "X-UA-Compatible",
    "X_UIDH": "X-UIDH",
    "X_WAP_PROFILE": "X-Wap-Profile",
    "X_WEBKIT_CSP": "X-WebKit-CSP",
    "X_XSS_PROTECTION": "X-XSS-Protection"
};

var ContentEncodings = {
    "AES128GCM": "aes128gcm",
    "BR": "br",
    "COMPRESS": "compress",
    "DEFLATE": "deflate",
    "EXI": "exi",
    "GZIP": "gzip",
    "IDENTITY": "identity",
    "PACK200_GZIP": "pack200-gzip",
    "SDCH": "sdch",
    "X_COMPRESS": "x-compress",
    "X_GZIP": "x-gzip"
};

var TrackingStatuses = {
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

var MimeTypes = {
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
module.exports.ResponseCodes    = ResponseCodes;
module.exports.RespCodeIs       = RespCodeIs;
module.exports.CacheControls    = CacheControls;
module.exports.CSPD             = CSPD;
module.exports.CSPS             = CSPS;

















