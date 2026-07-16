/**
 * @param {number[]} nums
 * @return {number}
 */
var gcdSum = function(nums) {
    let prefixGcd = [];
    let mx = 0;
    for(let i = 0; i < nums.length; i++)
    {
        if(nums[i] > mx)
        {
            mx = nums[i];
            prefixGcd[i] = nums[i];
        }
        else
            prefixGcd[i] = gcd(nums[i],mx)
    }
    prefixGcd.sort((a,b) => a - b);
    let sum = 0;
    for(let i = 0; i < (nums.length-1)/2;i++)
    {
        sum += gcd(prefixGcd[i],prefixGcd[nums.length - 1 - i])
    }
    return sum;
};

const gcd = (a, b) => {
    while(b > 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}