var numJewelsInStones = function(jewels, stones) {
    let ans = 0;
    jewels.split('').forEach(element => {
        ans += (stones.split('').filter(e=> e === element)).length
    }); 
    return ans
};


console.log(
    numJewelsInStones("aA","aAAbbbb"));