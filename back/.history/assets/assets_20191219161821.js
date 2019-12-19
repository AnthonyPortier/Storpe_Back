//module.exports 
const blue = function (odd, win) {
    odd = parseFloat(odd)
    if (win){
        if (odd < 1.10) {
            return (odd-1)*100
        }
        else {
            return Math.round(odd * 10)
        }
    }
    else{
        if (odd < 1.10) {
            return -15
        }
        else if (1.25>odd > 1.10) {
            console.log('Hello World')
        }
    }
}