// https://leetcode.com/problems/3sum/
// https://leetcode.com/problems/count-primes/
// https://leetcode.com/problems/top-k-frequent-elements/
// https://leetcode.com/problems/subarray-sum-equals-k/


// question 1 :- Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// Example :
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]


// var topKFrequent = function(nums, k) {
//     const frequencyMap = {};
//     nums.forEach(num => frequencyMap[num] = (frequencyMap[num] || 0) + 1);
//     console.log(frequencyMap)
//     const frequencyArr = Object.entries(frequencyMap).sort((a, b) => b[1] - a[1]);
//     console.log(frequencyArr)
//     let resultArr = frequencyArr.slice(0, k);
//     console.log(resultArr)
//     return resultArr.map(pair => Number(pair[0]))
//   };