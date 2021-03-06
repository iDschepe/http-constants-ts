export declare class CSPD {
    static BASE_URI: string;
    static BLOCK_ALL_MIXED_CONTENT: string;
    static CHILD_SRC: string;
    static CONNECT_SRC: string;
    static DEFAULT_SRC: string;
    static FONT_SRC: string;
    static FORM_ACTION: string;
    static FRAME_ANCESTORS: string;
    static FRAME_SRC: string;
    static IMG_SRC: string;
    static MANIFEST_SRC: string;
    static MEDIA_SRC: string;
    static OBJECT_SRC: string;
    static PLUGIN_TYPES: string;
    static REFERRER: string;
    static REPORT_URI: string;
    static REQUIRE_SRI_FOR: string;
    static PREFETCH_SRC: string;
    static SANDBOX: string;
    static SCRIPT_SRC: string;
    static STYLE_SRC: string;
    static UPGRADE_INSECURE_REQUESTS: string;
    static WORKER_SRC: string;
}
export declare class CSPS {
    static SELF: string;
    static NONE: string;
    static STRICT_DYNAMIC: string;
    static UNSAFE_INLINE: string;
    static UNSAFE_EVAL: string;
    static SELF_QTD: string;
    static NONE_QTD: string;
    static STRICT_DYNAMIC_QTD: string;
    static UNSAFE_INLINE_QTD: string;
    static UNSAFE_EVAL_QTD: string;
}
export declare class CacheControls {
    static IMMUTABLE: string;
    static MAX_AGE: string;
    static MAX_STALE: string;
    static MIN_FRESH: string;
    static MUST_REVALIDATE: string;
    static NO_CACHE: string;
    static NO_STORE: string;
    static NO_TRANSFORM: string;
    static ONLY_IF_CACHED: string;
    static PRIVATE: string;
    static PROXY_REVALIDATE: string;
    static PUBLIC: string;
    static S_MAXAGE: string;
    static STALE_IF_ERROR: string;
    static STALE_WHILE_REVALIDATE: string;
}
export declare class ResponseCodes {
    static CONTINUE: number;
    static SWITCHING_PROTOCOL: number;
    static PROCESSING: number;
    static EARLY_HINTS: number;
    static OK: number;
    static CREATED: number;
    static ACCEPTED: number;
    static NON_AUTHORITATIVE_INFORMATION: number;
    static NO_CONTENT: number;
    static RESET_CONTENT: number;
    static PARTIAL_CONTENT: number;
    static MULTI_STATUS: number;
    static ALREADY_REPORTED: number;
    static IM_USED: number;
    static MULTIPLE_CHOICE: number;
    static MOVED_PERMANENTLY: number;
    static MOVED_TEMPORARILY: number;
    static FOUND: number;
    static SEE_OTHER: number;
    static NOT_MODIFIED: number;
    static USE_PROXY: number;
    static TEMPORARY_REDIRECT: number;
    static PERMANENT_REDIRECT: number;
    static BAD_REQUEST: number;
    static UNAUTHORIZED: number;
    static PAYMENT_REQUIRED: number;
    static FORBIDDEN: number;
    static NOT_FOUND: number;
    static METHOD_NOT_ALLOWED: number;
    static NOT_ACCEPTABLE: number;
    static PROXY_AUTHENTICATION_REQUIRED: number;
    static REQUEST_TIMEOUT: number;
    static CONFLICT: number;
    static GONE: number;
    static LENGTH_REQUIRED: number;
    static PRECONDITION_FAILED: number;
    static PAYLOAD_TOO_LARGE: number;
    static URI_TOO_LONG: number;
    static UNSUPPORTED_MEDIA_TYPE: number;
    static RANGE_NOT_SATISFIABLE: number;
    static EXPECTATION_FAILED: number;
    static I_AM_A_TEAPOT: number;
    static MISDIRECTED_REQUEST: number;
    static UNPROCESSABLE_ENTITY: number;
    static LOCKED: number;
    static FAILED_DEPENDENCY: number;
    static UPGRADE_REQUIRED: number;
    static PRECONDITION_REQUIRED: number;
    static TOO_MANY_REQUESTS: number;
    static REQUEST_HEADER_FIELDS_TOO_LARGE: number;
    static REQUESTED_HOST_UNAVAILABLE: number;
    static RETRY_WITH: number;
    static UNAVAILABLE_FOR_LEGAL_REASONS: number;
    static INTERNAL_SERVER_ERROR: number;
    static NOT_IMPLEMENTED: number;
    static BAD_GATEWAY: number;
    static SERVICE_UNAVAILABLE: number;
    static GATEWAY_TIMEOUT: number;
    static HTTP_VERSION_NOT_SUPPORTED: number;
    static VARIANT_ALSO_NEGOTIATES: number;
    static INSUFFICIENT_STORAGE: number;
    static LOOP_DETECTED: number;
    static BANDWIDTH_LIMIT_EXCEEDED: number;
    static NOT_EXTENDED: number;
    static NETWORK_AUTHENTICATION_REQUIRED: number;
    static UNKNOWN_ERROR: number;
    static WEB_SERVER_IS_DOWN: number;
    static CONNECTION_TIMED_OUT: number;
    static ORIGIN_IS_UNREACHABLE: number;
    static A_TIMEOUT_OCCURRED: number;
    static SSL_HANDSHAKE_FAILED: number;
    static INVALID_SSL_CERTIFICATE: number;
}
export declare class Methods {
    static CONNECT: string;
    static COPY: string;
    static DELETE: string;
    static GET: string;
    static HEAD: string;
    static LINK: string;
    static LOCK: string;
    static OPTIONS: string;
    static PATCH: string;
    static POST: string;
    static PROPFIND: string;
    static PURGE: string;
    static PUT: string;
    static TRACE: string;
    static UNLINK: string;
    static UNLOCK: string;
    static VIEW: string;
}
export declare class Headers {
    static A_IM: string;
    static ACCEPT: string;
    static ACCEPT_CH: string;
    static ACCEPT_CH_LIFETIME: string;
    static ACCEPT_CHARSET: string;
    static ACCEPT_DATETIME: string;
    static ACCEPT_ENCODING: string;
    static ACCEPT_LANGUAGE: string;
    static ACCEPT_PATCH: string;
    static ACCEPT_RANGES: string;
    static ACCESS_CONTROL_ALLOW_CREDENTIALS: string;
    static ACCESS_CONTROL_ALLOW_HEADERS: string;
    static ACCESS_CONTROL_ALLOW_METHODS: string;
    static ACCESS_CONTROL_ALLOW_ORIGIN: string;
    static ACCESS_CONTROL_EXPOSE_HEADERS: string;
    static ACCESS_CONTROL_MAX_AGE: string;
    static ACCESS_CONTROL_REQUEST_HEADERS: string;
    static ACCESS_CONTROL_REQUEST_METHOD: string;
    static AGE: string;
    static ALLOW: string;
    static ALT_SVC: string;
    static ALTERNATES: string;
    static AUTHORIZATION: string;
    static CACHE_CONTROL: string;
    static CONNECTION: string;
    static CONTENT_DISPOSITION: string;
    static CONTENT_DPR: string;
    static CONTENT_ENCODING: string;
    static CONTENT_LANGUAGE: string;
    static CONTENT_LENGTH: string;
    static CONTENT_LOCATION: string;
    static CONTENT_MD5: string;
    static CONTENT_RANGE: string;
    static CONTENT_SECURITY_POLICY: string;
    static CONTENT_SECURITY_POLICY_REPORT_ONLY: string;
    static CONTENT_TYPE: string;
    static CONTENT_VERSION: string;
    static COOKIE: string;
    static DATE: string;
    static DELTA_BASE: string;
    static DERIVED_FROM: string;
    static DNT: string;
    static DOWNLINK: string;
    static DPR: string;
    static EARLY_DATA: string;
    static ETAG: string;
    static EXPECT: string;
    static EXPECT_CT: string;
    static EXPIRES: string;
    static FORWARDED: string;
    static FROM: string;
    static FRONT_END_HTTPS: string;
    static HOST: string;
    static IF_MATCH: string;
    static IF_MODIFIED_SINCE: string;
    static IF_NONE_MATCH: string;
    static IF_RANGE: string;
    static IF_UNMODIFIED_SINCE: string;
    static IM: string;
    static KEEP_ALIVE: string;
    static LARGE_ALLOCATION: string;
    static LAST_EVENT_ID: string;
    static LAST_MODIFIED: string;
    static LINK: string;
    static LOCATION: string;
    static MAX_FORWARDS: string;
    static MIME_VERSION: string;
    static ORIGIN: string;
    static P3P: string;
    static PING_FROM: string;
    static PING_TO: string;
    static PRAGMA: string;
    static PROXY_AUTHENTICATE: string;
    static PROXY_AUTHORIZATION: string;
    static PROXY_CONNECTION: string;
    static PUBLIC: string;
    static PUBLIC_KEY_PINS: string;
    static PUBLIC_KEY_PINS_REPORT_ONLY: string;
    static RANGE: string;
    static REFERER: string;
    static REFERRER_POLICY: string;
    static REFRESH: string;
    static RETRY_AFTER: string;
    static SAVE_DATA: string;
    static SEC_WEBSOCKET_ACCEPT: string;
    static SEC_WEBSOCKET_EXTENSIONS: string;
    static SEC_WEBSOCKET_KEY: string;
    static SEC_WEBSOCKET_PROTOCOL: string;
    static SEC_WEBSOCKET_VERSION: string;
    static SERVER: string;
    static SERVER_TIMING: string;
    static SET_COOKIE: string;
    static SOURCEMAP: string;
    static STATUS: string;
    static STRICT_TRANSPORT_SECURITY: string;
    static TE: string;
    static TIMING_ALLOW_ORIGIN: string;
    static TITLE: string;
    static TK: string;
    static TRAILER: string;
    static TRANSFER_ENCODING: string;
    static UPGRADE: string;
    static UPGRADE_INSECURE_REQUESTS: string;
    static USER_AGENT: string;
    static VARY: string;
    static VIA: string;
    static VIEWPORT_WIDTH: string;
    static WARNING: string;
    static WIDTH: string;
    static WWW_AUTHENTICATE: string;
    static X_ATT_DEVICEID: string;
    static X_CONTENT_DURATION: string;
    static X_CONTENT_SECURITY_POLICY: string;
    static X_CONTENT_TYPE_OPTIONS: string;
    static X_CORRELATION_ID: string;
    static X_CSRF_TOKEN: string;
    static X_DNS_PREFETCH_CONTROL: string;
    static X_DOWNLOAD_OPTIONS: string;
    static X_FORWARDED_FOR: string;
    static X_FORWARDED_HOST: string;
    static X_FORWARDED_PROTO: string;
    static X_FRAME_OPTIONS: string;
    static X_HTTP_METHOD_OVERRIDE: string;
    static X_PERMITTED_CROSS_DOMAIN_POLICIES: string;
    static X_POWERED_BY: string;
    static X_REQUEST_ID: string;
    static X_REQUESTED_WITH: string;
    static X_ROBOTS_TAG: string;
    static X_UA_COMPATIBLE: string;
    static X_UIDH: string;
    static X_WAP_PROFILE: string;
    static X_WEBKIT_CSP: string;
    static X_XSS_PROTECTION: string;
}
export declare class ContentEncodings {
    static AES128GCM: string;
    static BR: string;
    static COMPRESS: string;
    static DEFLATE: string;
    static EXI: string;
    static GZIP: string;
    static IDENTITY: string;
    static PACK200_GZIP: string;
    static SDCH: string;
    static X_COMPRESS: string;
    static X_GZIP: string;
}
export declare class TrackingStatuses {
    static UNDER_CONSTRUCTION: string;
    static DYNAMIC: string;
    static GATEWAY: string;
    static NOT_TRACKING: string;
    static TRACKING: string;
    static TRACKING_WITH_CONSENT: string;
    static TRACKING_ONLY_IF_CONSENT: string;
    static DISREGARDING_DNT: string;
    static UPDATED: string;
}
export declare class MimeTypes {
    static APPLICATION_ATOM_XML: string;
    static APPLICATION_EDI_X12: string;
    static APPLICATION_EDIFACT: string;
    static APPLICATION_JSON: string;
    static APPLICATION_JAVASCRIPT: string;
    static APPLICATION_OCTET_STREAM: string;
    static APPLICATION_OGG: string;
    static APPLICATION_PDF: string;
    static APPLICATION_POSTSCRIPT: string;
    static APPLICATION_SOAP_XML: string;
    static APPLICATION_FONT_WOFF: string;
    static APPLICATION_XHTML_XML: string;
    static APPLICATION_XML_DTD: string;
    static APPLICATION_XOP_XML: string;
    static APPLICATION_ZIP: string;
    static APPLICATION_GZIP: string;
    static APPLICATION_X_BITTORRENT: string;
    static APPLICATION_X_TEX: string;
    static APPLICATION_XML: string;
    static APPLICATION_X_WWW_FORM_URLENCODED: string;
    static APPLICATION_X_DVI: string;
    static APPLICATION_X_LATEX: string;
    static APPLICATION_X_FONT_TTF: string;
    static APPLICATION_X_SHOCKWAVE_FLASH: string;
    static APPLICATION_X_STUFFIT: string;
    static APPLICATION_X_RAR_COMPRESSED: string;
    static APPLICATION_X_TAR: string;
    static APPLICATION_X_JQUERY_TMPL: string;
    static APPLICATION_X_JAVASCRIPT: string;
    static APPLICATION_PKCDS12: string;
    static APPLICATION_PKCDS7_CERTIFICATES: string;
    static APPLICATION_PKCDS7_CERTREQRESP: string;
    static APPLICATION_PKCDS7_MIME: string;
    static APPLICATION_PKCDS7_SIGNATURE: string;
    static AUDIO_BASIC: string;
    static AUDIO_L24: string;
    static AUDIO_MP4: string;
    static AUDIO_AAC: string;
    static AUDIO_MPEG: string;
    static AUDIO_OGG: string;
    static AUDIO_VORBIS: string;
    static AUDIO_X_MS_WMA: string;
    static AUDIO_X_MS_WAX: string;
    static AUDIO_VND_RN_REALAUDIO: string;
    static AUDIO_VND_WAVE: string;
    static AUDIO_WEBM: string;
    static IMAGE_GIF: string;
    static IMAGE_JPEG: string;
    static IMAGE_PJPEG: string;
    static IMAGE_PNG: string;
    static IMAGE_SVG_XML: string;
    static IMAGE_TIFF: string;
    static IMAGE_VND_MICROSOFT_ICON: string;
    static IMAGE_VND_WAP_WBMP: string;
    static IMAGE_WEBP: string;
    static IMAGE_HTTP: string;
    static IMAGE_IMDN_XML: string;
    static IMAGE_PARTIAL: string;
    static IMAGE_RFC822: string;
    static IMAGE_EXAMPLE: string;
    static IMAGE_IGES: string;
    static IMAGE_MESH: string;
    static IMAGE_VRML: string;
    static IMAGE_X3D_BINARY: string;
    static IMAGE_X3D_VRML: string;
    static IMAGE_X3D_XML: string;
    static IMAGE_MIXED: string;
    static IMAGE_ALTERNATIVE: string;
    static IMAGE_RELATED: string;
    static IMAGE_FORM_DATA: string;
    static IMAGE_SIGNED: string;
    static IMAGE_ENCRYPTED: string;
    static IMAGE_CMD: string;
    static IMAGE_CSS: string;
    static IMAGE_CSV: string;
    static IMAGE_HTML: string;
    static IMAGE_JAVASCRIPT: string;
    static IMAGE_PLAIN: string;
    static IMAGE_PHP: string;
    static IMAGE_XML: string;
    static IMAGE_MARKDOWN: string;
    static IMAGE_CACHE_MANIFEST: string;
    static IMAGE_MPEG: string;
    static IMAGE_MP4: string;
    static IMAGE_OGG: string;
    static IMAGE_QUICKTIME: string;
    static IMAGE_WEBM: string;
    static IMAGE_X_MS_WMV: string;
    static IMAGE_X_FLV: string;
    static IMAGE__3GPP: string;
    static IMAGE__3GPP2: string;
    static APPLICATION_VND_OD_TEXT: string;
    static APPLICATION_VND_OD_SPERADSHEET: string;
    static APPLICATION_VND_OD_PRESENTATION: string;
    static APPLICATION_VND_OD_GRAPHICS: string;
    static APPLICATION_MS_EXCEL: string;
    static APPLICATION_MS_EXCEL_2007: string;
    static APPLICATION_MS_POWERPOINT: string;
    static APPLICATION_MS_POWERPOINT_2007: string;
    static APPLICATION_MS_WORD_2007: string;
    static APPLICATION_MS_WORD: string;
    static APPLICATION_XUL: string;
    static APPLICATION_KML: string;
}
