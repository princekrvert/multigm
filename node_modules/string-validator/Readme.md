#String Validator
A library of string validators based on validator.js.  Created to be used with [node-schema](https://github.com/theadam/node-schema).

###Installation
`npm install string-validator`

###Description
This library reformats each function from validator.js to create easily reusable validators.
```javascript
  var str = require('string-validator')

  var containsValid = str.contains('Valid');
  containsValid('Validate'); //=> true
```
The result of each string-validator function is a function that accepts the value to test and
returns true or false.  This allows the resulting function to be used in places where a
function that just takes a value is expected.  This cannot be done with validator.js due to the extra
arguments in some functions.

Example Usage:
```javascript
var _ = require('lodash');
var str = require('string-validator');

var strings = ['this', 'is', 'a', 'nice', 'way', 'to', 'filter'];

var filterFunction = str.isLength(3);

_.filter(strings, filterFunction); //=> ['this', 'nice', 'way', 'filter']
```


### Validators

- **equals(comparison)** - check if the string matches the comparison.
- **contains(seed)** - check if the string contains the seed.
- **matches(pattern [, modifiers])** - check if string matches the pattern. Either `matches('foo', /foo/i)` or `matches('foo', 'foo', 'i')`.
- **isEmail()** - check if the string is an email.
- **isURL([options])** - check if the string is an URL. `options` is an object which defaults to `{ protocols: ['http','https','ftp'], require_tld: true, require_protocol: false, allow_underscores: false }`.
- **isIP([version])** - check if the string is an IP (version 4 or 6).
- **isAlpha()** - check if the string contains only letters (a-zA-Z).
- **isNumeric()** - check if the string contains only numbers.
- **isAlphanumeric()** - check if the string contains only letters and numbers.
- **isBase64()** - check if a string is base64 encoded.
- **isHexadecimal()** - check if the string is a hexadecimal number.
- **isHexColor()** - check if the string is a hexadecimal color.
- **isLowercase()** - check if the string is lowercase.
- **isUppercase()** - check if the string is uppercase.
- **isInt()** - check if the string is an integer.
- **isFloat()** - check if the string is a float.
- **isDivisibleBy(number)** - check if the string is a number that's divisible by another.
- **isNull()** - check if the string is null.
- **isLength(min [, max])** - check if the string's length falls in a range. Note: this function takes into account surrogate pairs.
- **isByteLength(min [, max])** - check if the string's length (in bytes) falls in a range.
- **isUUID([version])** - check if the string is a UUID (version 3, 4 or 5).
- **isDate()** - check if the string is a date.
- **isAfter([date])** - check if the string is a date that's after the specified date (defaults to now).
- **isBefore([date])** - check if the string is a date that's before the specified date.
- **isIn(values)** - check if the string is in a array of allowed values.
- **isCreditCard()** - check if the string is a credit card.
- **isISBN([version])** - check if the string is an ISBN (version 10 or 13).
- **isJSON()** - check if the string is valid JSON (note: uses JSON.parse).
- **isMultibyte()** - check if the string contains one or more multibyte chars.
- **isAscii()** - check if the string contains ASCII chars only.
- **isFullWidth()** - check if the string contains any full-width chars.
- **isHalfWidth()** - check if the string contains any half-width chars.
- **isVariableWidth()** - check if the string contains a mixture of full and half-width chars.
- **isSurrogatePair()** - check if the string contains any surrogate pairs chars.

###License (MIT)
```
MIT License
Copyright (c) 2014 Adam Nalisnick

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
