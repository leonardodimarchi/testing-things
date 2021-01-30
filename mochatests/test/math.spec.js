//Mocha uses NodeJS

const assert = require('assert');
const Math = require('./math.js');

describe('Math Class Testing', function () {
    //Expected behavior
    //When the parameter == done, the rest will execute after the function is complete
    //We need to go with 'function' here, not the arrow function
    it('Multiply two numbers', function(done){
        const math = new Math();
        //Specify limit timeout
        this.timeout(2500)

        //Simple function
        //assert.equal(math.multiply(5,2), 10);

        //Callback Function  (Need to change parameter on 'it' function to 'done')
        math.multiply(5,2, result => {
            assert.equal(result,10);

            //to end the function
            done();
        })
    })
})