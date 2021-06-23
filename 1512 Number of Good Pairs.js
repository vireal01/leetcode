// var numIdenticalPairs = function(nums) {
//     let counter = 0;
//     for(let element of nums){
//         let lenBefore = nums.length;
//         let numberOfElements;
//         nums = nums.filter(e => e !== element)
//         numberOfElements = lenBefore - nums.length
//         counter += (numberOfElements*(numberOfElements -1)/2)
//     } return counter   
// };

// var numIdenticalPairs = function(nums) {
//     let counter = 0;
//     for(let i=0; i<nums.length; i++){
//         for(let j=i+1; j<nums.length; j++){
//             if(nums[j] === nums[i]){
//                 counter +=1
//             }
//         }
//     }return counter
// };


var numIdenticalPairs = function(nums) {
    let map ={};
    let counter = 0;

    for (let element of nums){
        if (map[element]){
            console.log(map[element] + '  map of element');
            counter += map[element];
            map[element] += 1
        } else { 
            map[element] = 1
        }
    } return counter
}



nums = [1,1,1,1]
console.log(numIdenticalPairs(nums));