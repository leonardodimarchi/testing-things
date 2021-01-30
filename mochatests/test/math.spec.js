//Mocha uses NodeJS

const assert = require('assert');
const Math = require('./math.js');

describe('Math Class Testing', function () {
    //What is HOOKS ?
    //Serves to define a value to a variable in the whole test
    //Hooks: before, beforeEach, afterEach, etc..

    beforeEach(function (){
        result = 0
    })

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

    //This will be pending
    it('Sum two numbers');

    //Method .skip will skip the test
    //Method .only, only this test will execute
    it.skip('Divide two numbers', function () {
        const math = new Math();

        assert.equal(math.divide(10,2), 5)
    })
})