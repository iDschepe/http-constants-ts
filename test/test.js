let chai = require('chai'),
   { Headers, TrackingStatuses, MimeTypes, Methods } = require('../index.js');

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
});

describe("Test Methods", () => {
	it ("should access some", () => {
		chai.expect(Methods.POST).to.equal("POST");
		chai.expect(Methods.COPY).to.equal("COPY");
		chai.expect(Methods.VIEW).to.equal("VIEW");
	});
});

























