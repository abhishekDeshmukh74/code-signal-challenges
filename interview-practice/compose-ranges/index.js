function composeRanges(nums) {
    const ranges = []
    let start = 0
    let end = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] - nums[i + 1] === -1) {
            end++
        } else {
            if (start === end) {
                ranges.push(`${nums[end]}`)
            } else {
                ranges.push(`${nums[start]}->${nums[end]}`)
            }
            start = i + 1
            end = i + 1
        }
    }
    return ranges
}

// Best Solution
const composeRanges = (nums) => {
    // keep track of a results array
    let results = [];
    // if 1 element, return the one element
    if (nums.length === 1) {
        return [`${nums}`];
    }
    // initialize rangeStart to 0th element
    let rangeStart = nums[0];
    // iterate though nums array, starting at 1st el
    for (let i = 1; i <= nums.length; i++) {
        const lastEl = nums[i - 1];
        // check if rangeStart === nums[i - 1]
        if (i >= nums.length || nums[i] !== lastEl + 1) {
            // if not, need to push range to result
            if (lastEl === rangeStart) {
                // if one element => just stringified rangeStart
                results.push(`${rangeStart}`);
            } else {
                // if multiple, push entire range(stringified)
                results.push(`${rangeStart}->${lastEl}`)
            }
            rangeStart = nums[i];
        }
    }
    return results;
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));
console.log(composeRanges([1, 3]));
