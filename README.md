# no-data-validator
npm-module for validation of 
- Fødselsnummer
- Kontonummer
- org.nummer
- kidnummer

The code is based on this article and published as a node-module.
https://www.miles.no/blogg/tema/teknisk/validering-av-norske-data

## Usage
```npm install no-data-validator```

In code:
First require no-data-validator
```javascript
const validator = require('no-data-validator');
```
Validate birth number
```javascript
validator.birthNumber('27121798935');
```
Account number
```javascript
validator.accountNumber('1234.56.78911');
```
```javascript
validator.accountNumber('12345678911');
```
Kid number
```javascript
validator.kidNumber('2707841373001170014');
```
Org. Number
```javascript
validator.organizationNumber(914588200);
```