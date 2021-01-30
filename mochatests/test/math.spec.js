//Mocha uses NodeJS
//npm i --save-dev mocha
//npm i --save-dev chai 
//npm i --save-dev sinon

/*What is CHAI Library? 
    On the basic mocha, we use a assert from node modules, but it's not sufficient on a test. Chai is here to fix that, it's a assert tool !
*/

/*What is SINON Library?
    Sinon is a lib to help us to test those cases where mocha and CHAI isn't enough.
    And to MOCK functions
*/

//Without CHAI
const assert = require('assert');

//With CHAI (Bring to us the 'expect()')
const expect = require('chai').expect;

//Sinon
const sinon = require('sinon')

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
    it.only('Calls res with sum and index values', function () {
        const req = {}
        const res = {
            //Spying if the function was invoked a certain way
            //load: sinon.spy()

            //if the function already exists
            load: function load(){}
        }

        //Sinon stub, it override the function and can call a certain return
        sinon.stub(res, 'load').returns('Called')

        const math = new Math();

        math.printSum(req, res,5,5);

        //expect(res.load.calledOnce).to.be.true;
        expect(res.load.args[0][0]).to.equal('index')
    })

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