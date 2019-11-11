const digitName = require('../if-x3.js');

QUnit.test("digitName(n)=NUMBER", function(assert){
	assert.deepEqual(digitName(1), 'ONE', "n(1) === ONE")
	assert.deepEqual(digitName(2), 'TWO', "n(2) === ONE")
	assert.deepEqual(digitName(3), 'THREE', "n(3) === ONE")
	assert.deepEqual(digitName(4), 'FOUR', "n(4) === ONE")
	assert.deepEqual(digitName(5), 'FIVE', "n(5) === ONE")
	assert.deepEqual(digitName(6), 'SIX', "n(6) === ONE")
	assert.deepEqual(digitName(7), 'SEVEN', "n(7) === ONE")
	assert.deepEqual(digitName(8), 'EIGHT', "n(8) === ONE")
	assert.deepEqual(digitName(9), 'NINE', "n(9) === ONE")
	assert.deepEqual(digitName(0), 'ZERO', "n(0) === ONE")
	assert.deepEqual(digitName(11), 'ERROR', "n(11) === ERROR")
	assert.deepEqual(digitName(12), 'ERROR', "n(12) === ERROR")
});
