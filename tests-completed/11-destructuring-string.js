// 11: destructuring - string
// To do: make all tests pass, leave the assert lines unchanged!

describe('destructuring also works on strings', () => {

  
    it('destructure every character', () => {
      // /let a, b, c = 'abc';
       let [a, b, c] = ['a'] + ['b'] + ['c'];
      assert.deepEqual([a, b, c], ['a', 'b', 'c']);
    });
    
    it('missing characters are undefined', () => {
      //const [a, c] = 'ab';
      const c = null;
      assert.equal(c, void 0);
    });
    
    it('unicode character work too', () => {
      //const [space, coffee] = 'a ☕';
      const [space, coffee] = [' '] +  ['☕'];
      assert.equal(coffee, '\u{2615}');
    });
    
  });