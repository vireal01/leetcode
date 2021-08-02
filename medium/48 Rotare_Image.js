// https://leetcode.com/problems/rotate-image/


var rotate = function(matrix) {
    let n = matrix.length
    for(let i = 0; i < (n + 1)/2 -1 ; i++){ // possition in row
        for(let j = 0 ; j < n/2; j++){ // row
            let temp = matrix[n - 1 - j][i]
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - j - 1];
            matrix[n - 1 - i][n - j - 1] = matrix[j][n - 1 -i];
            matrix[j][n - 1 - i] = matrix[i][j];
            matrix[i][j] = temp;
        }
    } return matrix
};


