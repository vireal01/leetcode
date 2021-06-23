var kidsWithCandies = (candies, extraCandies, greatest = Math.max(...candies)) => candies.map(child => child + extraCandies >= greatest) 


// console.log(kidsWithCandies([12,1,12], 10));



// var kidsWithCandies = function(candies, extraCandies) {
//     let greatest = Math.max(...candies) - extraCandies;
//     let ans = [];
//     candies.forEach(child => {
//         ans.push(child > greatest)
//     }); 
//     return ans
// };



console.log(kidsWithCandies([12,1,12], 10));