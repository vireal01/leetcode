// https://leetcode.com/problems/counting-bits/


var countingBits = (n) => {
	let ans = [0]
	for (let i = 1; i <= n; i++){
		ans.push(ans[i>>1] + i%2)
	}
	return ans
}


