'use strict';

/* global require, describe, it */
var validator = require('./validator');
var chai = require('chai');
var expect = chai.expect;

describe('Birthnumber', function () {
    it('should validate birthnumber', function () {
        var res = validator.birthNumber(27078413730);
        expect(res).to.equal(true);
    });
    it('should fail on too short birthnumber', function () {
        var res = validator.birthNumber(2707841373);
        expect(res).to.equal(false);
    });
});

describe('Kid-number', function () {
    it('should accept valid kid-number', function () {
        var res = validator.kidNumber('2707841373001170014');
        expect(res).to.equal(true);
    });
    it('should fail on invalid kid-number', function () {
        var res = validator.kidNumber('2707841373001170015');
        expect(res).to.equal(false);
    });
});

describe('Accountnumber', function () {
    it('should fail on account numbers longer than 11 digits', function () {
        var res = validator.accountNumber(123456789456);
        expect(res).to.equal(false);
    });
    it('should fail on account numbers shorter than 11 digits', function () {
        var res = validator.accountNumber(123456789);
        expect(res).to.equal(false);
    });
    it('should accept 11 digit valid numbers', function () {
        var res = validator.accountNumber(12345678911);
        expect(res).to.equal(true);
    });
    it('should accept standard format numbers', function () {
        var res = validator.accountNumber('1234.56.78911');
        expect(res).to.equal(true);
    });
});

describe('Org.Numbers', function () {
    it('should accept valid Org.numbers', function () {
        var res = validator.organizationNumber(914588200);
        expect(res).to.equal(true);
    });
    it('should fail on to few digits', function () {
        var res = validator.organizationNumber(91458820);
        expect(res).to.equal(false);
    });
    it('should fail on to many digits', function () {
        var res = validator.organizationNumber(9145882001);
        expect(res).to.equal(false);
    });
});