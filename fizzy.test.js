const { expect } = require('chai')
//test whether or not fizzy is a function
describe('Fizzy', function(){
  it('should be a function', function(){
    expect(fizzy).to.be.a('function')
  })
  it('should return an array', function(){
    expect(fizzy()).to.be.a('array')
  })
  it('should return an array where multiples of 3 are replaced by fizz, 5 are replaced by buzz', function(){
    expect(fizzy(3).to.deep.equal([1, 2, 'fizz', 4, 'buzz']))
  })
  it('should return an array where multiples of both 3 and 5 are replaced by fizzbuzz', function(){
    expect(fizzy(15).to.deep.equal([1, 2, 'fizz', 4, 'buzz', 6, 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuss']))
  })
})
//test whether or not the input is an integer

//test whether or not the output is an array

//

