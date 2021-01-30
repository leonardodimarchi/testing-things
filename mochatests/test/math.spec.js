//Mocha uses NodeJS
//npm i --save-dev mocha
//npm i --save-dev chai 

/*What is CHAI Library? 
    On the basic mocha, we use a assert from node modules, but it's not suficient on a test. Chai is here to fix that, it's a assert tool !
*/

//Without CHAI
const assert = require('assert');

//With CHAI (Bring to us the 'expect()')
const expect = require('chai').expect;

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
            //Without CHAI
            //assert.equal(result,10);

            //With CHAI
            expect(result).to.equal(10)

            //to end the function
            done();
        })
    })

    //This will be pending
    it('Sum two numbers');

    //Method .skip will skip the test
    //Method .only, only this test will execute
    it('Divide two numbers', function () {
        const math = new Math();

        //Without CHAI
        //assert.equal(math.divide(10,2), 5)

        //With CHAI
        //expect(math.divide(10,2)).to.equal(5)

        //We can verify obj too
        const obj = {
            name: 'Luiz Toquetto'
        }

        //expect(obj).to.have.property('name')
        expect(obj).to.have.property('name').equal('Luiz Toquetto')
    })
})