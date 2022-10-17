const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */


function createDreamTeam( members ) {

  
  let w = /^\s*[A-Za-z]{1}/;   
  let sting = '';
  if(members == 0) return;
  let we = members.sort();
  console.log(we);
  
  
  
    for(let j = 0; j < members.length; j++) { 
         
      if(typeof members[j] === "string") {
        
        let words = members[j].match(w);
        sting+= `${words}`.toUpperCase();
      } 
      
    }
    

  return sting;
  
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};

