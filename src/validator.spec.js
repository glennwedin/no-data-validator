/* global require, describe, it */
const validator = require('./validator');
const chai = require('chai');
const expect = chai.expect;


describe('Birthnumber', () => {
    it('should validate birthnumber', () => {
        const res = validator.birthNumber(27078413730);
        expect(res).to.equal(true);
    });
    it('should fail on too short birthnumber', () => {
        const res = validator.birthNumber(2707841373);
        expect(res).to.equal(false);
    });
})


/* General testing of isAnyOfFnrDnrOrg */
describe('Fødselsnummer?', () => {
    it('Should fail', () => {
        const result = validator.isAnyOfFnrDnrOrg('2707841373');
        expect(result).to.equal(false);
    });
    it('Should succeed', () => {
        const result = validator.isAnyOfFnrDnrOrg('27078413730');
        expect(result).to.equal(true);
    });
});

describe('D-nummer?', () => {
    it('Should fail', () => {
        const result = validator.isAnyOfFnrDnrOrg('71129004717');
        expect(result).to.equal(false);
    });
    it('Should succeed', () => {
        const result = validator.isAnyOfFnrDnrOrg('71129004716');
        expect(result).to.equal(true);
    });
});

describe('Org.nummer?', () => {
    it('Should fail', () => {
        const result = validator.isAnyOfFnrDnrOrg('964806234');
        expect(result).to.equal(false);
    });
    it('Should succeed', () => {
        const result = validator.isAnyOfFnrDnrOrg('964806233');
        expect(result).to.equal(true);
    });
});