/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function(n) {
    return gcd(n**2 , n * (n+1));
};

var gcd = function(a, b) 
{
    while(b > 0) {
        let temp = b;
        b = a% b;
        a = temp;
    }
    return a;
}