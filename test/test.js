let chai = require('chai'),
   { 
		Headers, 
		TrackingStatuses, 
		MimeTypes, 
		Methods, 
		ContentEncodings,
		ResponseCodes,
		RespCodeIs
	} = require('../index.js');
	
let nameReg = /^[A-Z_][A-Z_0-9]+$/;

let testKeys = (obj) => {
	Object.keys(obj).forEach((key) => {
		if (typeof obj[key] === 'object') {
			testKeys(obj[key]);
		} else {
			chai.expect(key).to.match(nameReg);
		}
	});
}

describe("Just upload", () => {
	it ("shouldn't fail", () => {
	});
});

describe("Test Headers", () => {	
	it ("should access some fields, totaly random!!!", () => {
		chai.expect(Headers.ACCEPT).to.equal("Accept");
		chai.expect(Headers.IF_MODIFIED_SINCE).to.equal("If-Modified-Since");
		chai.expect(Headers.UPGRADE_INSECURE_REQUESTS).to.equal("Upgrade-Insecure-Requests");
		chai.expect(Headers.X_UA_COMPATIBLE).to.equal("X-UA-Compatible");
		chai.expect(Headers.P3P).to.equal("P3P");
	});
	it ("should test key names", () => {
		testKeys(Headers);
	});
});

describe("Test TrackingStatuses", () => {
	it ("should access some", () => {
		chai.expect(TrackingStatuses.UNDER_CONSTRUCTION).to.equal("!");
		chai.expect(TrackingStatuses.DISREGARDING_DNT).to.equal("D");
	});
});

describe("Test MimeTypes", () => {
	it ("should access some", () => {
		chai.expect(MimeTypes.Pkcs.X_PKCS12).to.equal(MimeTypes.Application.Pkcs.PKCS12);
		chai.expect(MimeTypes.X.WWW_FORM_URLENCODED).to.equal(MimeTypes.Application.X.WWW_FORM_URLENCODED);
		chai.expect(MimeTypes.Vnd.MS.EXCEL).to.equal("application/vnd.ms-excel");
	});	
	it ("should test key names", () => {
		testKeys(MimeTypes);
	});
});

describe("Test Methods", () => {
	it ("should access some", () => {
		chai.expect(Methods.POST).to.equal("POST");
		chai.expect(Methods.COPY).to.equal("COPY");
		chai.expect(Methods.VIEW).to.equal("VIEW");
	});
	it ("should test key names", () => {
		testKeys(Methods);
	});
});

describe("Test ContentEncodings", () => {
	it ("should access some", () => {
		chai.expect(ContentEncodings.GZIP).to.equal("gzip");
		chai.expect(ContentEncodings.DEFLATE).to.equal("deflate");
		chai.expect(ContentEncodings.BR).to.equal("br");
	});
	it ("should test key names", () => {
		testKeys(ContentEncodings);
	});
});

describe("Test ResponseCodes", () => {
	it ("should access some", () => {
		chai.expect(ResponseCodes.NOT_FOUND).to.equal(404);
		chai.expect(ResponseCodes.OK).to.equal(200);
		chai.expect(ResponseCodes.I_AM_A_TEAPOT).to.equal(418);
	});
	it ("should test key names", () => {
		testKeys(ResponseCodes);
	});
});

describe("Test RespCodeIs", () => {
	it ("should work with ResponseCodes", () => {
		chai.expect(RespCodeIs.Info(100)).to.be.true;
		chai.expect(RespCodeIs.Info(ResponseCodes.CONTINUE)).to.be.true;
		chai.expect(RespCodeIs.Info(199)).to.be.true;
		chai.expect(RespCodeIs.Info(ResponseCodes.EARLY_HINTS)).to.be.true;
		chai.expect(RespCodeIs.Info(99)).to.be.false;
		chai.expect(RespCodeIs.Info(201)).to.be.false;
		chai.expect(RespCodeIs.Info(ResponseCodes.OK)).to.be.false;
		chai.expect(RespCodeIs.Info(ResponseCodes.MULTIPLE_CHOICE)).to.be.false;
		
		chai.expect(RespCodeIs.Success(200)).to.be.true;
		chai.expect(RespCodeIs.Success(ResponseCodes.OK)).to.be.true;
		chai.expect(RespCodeIs.Success(299)).to.be.true;
		chai.expect(RespCodeIs.Success(ResponseCodes.IM_USED)).to.be.true;
		chai.expect(RespCodeIs.Success(187)).to.be.false;
		chai.expect(RespCodeIs.Success(301)).to.be.false;
		chai.expect(RespCodeIs.Success(ResponseCodes.CONTINUE)).to.be.false;
		chai.expect(RespCodeIs.Success(ResponseCodes.BAD_REQUEST)).to.be.false;
		
		chai.expect(RespCodeIs.Redirect(300)).to.be.true;
		chai.expect(RespCodeIs.Redirect(ResponseCodes.MULTIPLE_CHOICE)).to.be.true;
		chai.expect(RespCodeIs.Redirect(399)).to.be.true;
		chai.expect(RespCodeIs.Redirect(ResponseCodes.PERMANENT_REDIRECT)).to.be.true;
		chai.expect(RespCodeIs.Redirect(187)).to.be.false;
		chai.expect(RespCodeIs.Redirect(401)).to.be.false;
		chai.expect(RespCodeIs.Redirect(ResponseCodes.CONTINUE)).to.be.false;
		chai.expect(RespCodeIs.Redirect(ResponseCodes.BAD_REQUEST)).to.be.false;
		
		chai.expect(RespCodeIs.ClientErr(400)).to.be.true;
		chai.expect(RespCodeIs.ClientErr(ResponseCodes.BAD_REQUEST)).to.be.true;
		chai.expect(RespCodeIs.ClientErr(499)).to.be.true;
		chai.expect(RespCodeIs.ClientErr(ResponseCodes.UNAVAILABLE_FOR_LEGAL_REASONS)).to.be.true;
		chai.expect(RespCodeIs.ClientErr(387)).to.be.false;
		chai.expect(RespCodeIs.ClientErr(501)).to.be.false;
		chai.expect(RespCodeIs.ClientErr(ResponseCodes.USE_PROXY)).to.be.false;
		chai.expect(RespCodeIs.ClientErr(ResponseCodes.INTERNAL_SERVER_ERROR)).to.be.false;
		
		chai.expect(RespCodeIs.ServerErr(500)).to.be.true;
		chai.expect(RespCodeIs.ServerErr(ResponseCodes.INTERNAL_SERVER_ERROR)).to.be.true;
		chai.expect(RespCodeIs.ServerErr(599)).to.be.true;
		chai.expect(RespCodeIs.ServerErr(ResponseCodes.INVALID_SSL_CERTIFICATE)).to.be.true;
		chai.expect(RespCodeIs.ServerErr(387)).to.be.false;
		chai.expect(RespCodeIs.ServerErr(601)).to.be.false;
		chai.expect(RespCodeIs.ServerErr(ResponseCodes.USE_PROXY)).to.be.false;		
	});
});

























