/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    if(matrix==null||matrix==undefined||matrix.length<=0)
        matrix=null        
    this.solution=calc(matrix)
};
function calc(matrix){
    // console.log(mat)
    if(matrix==null)
        return matrix
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(j-1>=0)
                matrix[i][j]+=matrix[i][j-1]
        }
    }
    
    for(let i=0;i<matrix[0].length;i++){
        for(let j=0;j<matrix.length;j++){
            if(j-1>=0)
                matrix[j][i]+=matrix[j-1][i]
        }
    }
    return matrix
    
}
/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let mat=this.solution
    if(mat==null)
        return 0
    let la=mat[row2][col2]
    if(row1-1>=0){
        la=la-mat[row1-1][col2]
        if(col1-1>=0)
        la=la+(mat[row1-1][col1-1])
    }        
    if(col1-1>=0)
        la=la-((mat[row2][col1-1]))
    return la
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = Object.create(NumMatrix).createNew(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */