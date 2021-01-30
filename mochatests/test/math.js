class Math {
    multiply(a, b=1, callback){
        setTimeout(() => {
            callback (a*b)
        }, 1000)
    }

    divide(a, b=1){
        return a/b
    }

    printSum(req, res, a, b=1){
        console.log(res.load('index', a+b))
    }
}

module.exports = Math;
