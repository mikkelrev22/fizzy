//declare function in ES6 with input of an integer
exports.fizzy = (n) => {
  
  //create new Array that fills in numbers from 1 to n 
   return resArr = Array.from({length: n}, (v, i)=> i+1).map(e =>  e % 3 === 0 && e % 5 === 0 ? e = 'fizzbuzz' : e % 5 === 0 ? e = 'buzz' : e % 3 === 0 ? e = 'fizz' : e = e)
   /*return an array of numbers from 1 to n with:
  - multiples of 3 replaced by 'fizz'
  - multiples of 5 replaced by 'buzz'
  - multiples of both replaced by 'fizzbuzz'
  */
  }
 