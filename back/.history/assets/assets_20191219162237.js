//module.exports 
const blue = function (odd, win) {
    odd = Math.round(parseFloat(odd))
    if (win){
        if (odd < 1.10) {
            return (odd-1)*100
        }
        else {
            return (odd * 10)
        }
    }
    else{
        if (odd < 1.10) {
            return -15
        }
        else if (1.25 > odd) {
            return - 11
        }
        else if (1.25 > odd) {
            return - 11
        }
    }
}
blue("1.15", false)