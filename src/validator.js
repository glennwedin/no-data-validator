/* global module */
const mod11OfNumberWithControlDigit = (input) => {
    let controlNumber = 2,
        sumForMod = 0,
        i,
        result;

    for (i = input.length - 2; i >= 0; --i) {
        sumForMod += input.charAt(i) * controlNumber;
        if (++controlNumber > 7) {
            controlNumber = 2;
        }
    }
    result = (11 - sumForMod % 11);

    return result === 11 ? 0 : result;
};

const accountNumber = (accountNumber) => {
    if (!accountNumber) {
        return false;
    }
    accountNumber = accountNumber.toString().replace(/\./g, '');
    if (accountNumber.length !== 11) {
        return false;
    }
    return parseInt(accountNumber.charAt(accountNumber.length - 1), 10)
        === mod11OfNumberWithControlDigit(accountNumber);
};

const organizationNumber = (orgNumber) => {
    orgNumber += '';
    if (!orgNumber || orgNumber.length !== 9) {
        return false;
    }
    return parseInt(orgNumber.charAt(orgNumber.length - 1), 10)
        === mod11OfNumberWithControlDigit(orgNumber);
};

const birthNumber = (birthNumber) => {
    birthNumber = birthNumber.toString();
    if (!birthNumber || birthNumber.length !== 11) {
        return false;
    }

    const _sum = (number, factors) => {
        let sum = 0;
        for (let i = 0, l = factors.length; i < l; ++i) {
            sum += parseInt(number.charAt(i), 10) * factors[i];
        }
        return sum;
    };

    let checksum1 = 11 - (_sum(birthNumber, [3, 7, 6, 1, 8, 9, 4, 5, 2]) % 11);
    if (checksum1 === 11) checksum1 = 0;
    let checksum2 = 11 - (_sum(birthNumber, [5, 4, 3, 2, 7, 6, 5, 4, 3, 2]) % 11);
    if (checksum2 === 11) checksum2 = 0;
    return checksum1 === parseInt(birthNumber.charAt(9), 10)
        && checksum2 === parseInt(birthNumber.charAt(10), 10);
};

const kidNumber = (kidNumber) => {
    kidNumber = kidNumber.toString();
    const controlDigit = kidNumber.charAt(kidNumber.length - 1);
    return parseInt(controlDigit, 10) === mod11OfNumberWithControlDigit(kidNumber)
        || parseInt(controlDigit, 10) === luhnValue(kidNumber);
};

const luhnValue = (number) => {
    let sum = 0,
        dbl = 0,
        i;
    for (i = number.length - 2; i >= 0; i -= 2) {
        dbl = (parseInt(number.charAt(i), 10) * 2).toString();
        sum += parseInt(dbl.charAt(0), 10) + parseInt(dbl.charAt(1) || 0, 10);
    }
    for (i = number.length - 3; i >= 0; i -= 2) {
        sum += parseInt(number.charAt(i), 10);
    }
    sum = sum.toString();
    return 10 - parseInt(sum.charAt(sum.length - 1), 10);
};

module.exports = {
    accountNumber: accountNumber,
    organizationNumber: organizationNumber,
    birthNumber: birthNumber,
    kidNumber: kidNumber
};
