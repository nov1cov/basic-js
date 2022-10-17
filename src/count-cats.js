const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {

  let cats = /^\s{0}\^{2}/;  
  let count = 0; 

  
  for(let i = 0; i < matrix.length; i++) {
    

    for(let j = 0; j < matrix[i].length; j++) {        
      if(typeof matrix[i][j] === 'string' && matrix[i][j].match(cats)) {

        count++;
      } 
    }
   
  }

  return count;
  
  
 
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here 
  
}

module.exports = {
  countCats
};