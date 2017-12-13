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
});

describe('Kid-number', () => {
    it('should validate kid-number', () => {
        const res = validator.birthNumber('saft');
        expect(res).to.equal(true);
    });
});

describe('Accountnumber', () => {
    it('should fail on account numbers longer than 11 digits', () => {
        const res = validator.accountNumber(123456789456);
        expect(res).to.equal(false);
    });
    it('should fail on account numbers shorter than 11 digits', () => {
        const res = validator.accountNumber(123456789);
        expect(res).to.equal(false);
    });
    it('should accept 11 digit valid numbers', () => {
        const res = validator.accountNumber(12345678911);
        expect(res).to.equal(true);
    })
    it('should accept standard format numbers', () => {
        const res = validator.accountNumber('1234.56.78911');
        expect(res).to.equal(true);
    })
});

describe('Org.Numbers', () => {
    it('should accept valid Org.numbers', () => {
        const res = validator.organizationNumber(914588200);
        expect(res).to.equal(true);
    });
    it('should fail on to few digits', () => {
        const res = validator.organizationNumber(91458820);
        expect(res).to.equal(false);
    });
    it('should fail on to many digits', () => {
        const res = validator.organizationNumber(9145882001);
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