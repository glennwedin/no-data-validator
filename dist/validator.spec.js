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

/* General testing of isAnyOfFnrDnrOrg */
describe('Fødselsnummer?', function () {
    it('Should fail', function () {
        var result = validator.isAnyOfFnrDnrOrg('2707841373');
        expect(result).to.equal(false);
    });
    it('Should succeed', function () {
        var result = validator.isAnyOfFnrDnrOrg('27078413730');
        expect(result).to.equal(true);
    });
});

describe('D-nummer?', function () {
    it('Should fail', function () {
        var result = validator.isAnyOfFnrDnrOrg('71129004717');
        expect(result).to.equal(false);
    });
    it('Should succeed', function () {
        var result = validator.isAnyOfFnrDnrOrg('71129004716');
        expect(result).to.equal(true);
    });
});

describe('Org.nummer?', function () {
    it('Should fail', function () {
        var result = validator.isAnyOfFnrDnrOrg('964806234');
        expect(result).to.equal(false);
    });
    it('Should succeed', function () {
        var result = validator.isAnyOfFnrDnrOrg('964806233');
        expect(result).to.equal(true);
    });
});