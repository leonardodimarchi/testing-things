class Math {
    multiply(a, b=1, callback){
        setTimeout(() => {
            callback (a*b)
        }, 2000)
    }
}

module.exports = Math;
