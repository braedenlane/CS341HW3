// Braeden Lane
var fs = require('fs');
const { hasUncaughtExceptionCaptureCallback } = require('process');

test('test selectEvent', () => {

    //Read the orders.js file into a string
    var js = fs.readFileSync('routes/orders.js', 'utf8');
    expect(js).toEqual(expect.anything()); //any non-null value is okay, makes sure there is a file there
});