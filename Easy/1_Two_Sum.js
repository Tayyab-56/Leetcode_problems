/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let sorted = nums.map((value, index) => ({ value, index }))
        .sort((a, b) => a.value - b.value);
    let j = 0;
    let result;
    for(let i= nums.length - 1; i >= 0; i--)
    {
        if((sorted[i].value + sorted[j].value) == target)
        {
            result = [sorted[j].index,sorted[i].index];
            break;
        }
        else if((sorted[i].value + sorted[j].value) >= target)
        {
            
        }
        else if((sorted[i].value + sorted[j].value) <= target)
        {
            i++;
            j++;
        }
    }
    return result;
};