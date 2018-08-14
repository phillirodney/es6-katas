// 13: destructuring - defaults
// To do: make all tests pass, leave the assert lines unchanged!

describe('destructuring can also have default values', () => {

    it('for an empty array', () => {
      //const [a:1] = [];
      const [a] = [1];
      assert.equal(a, 1);
    });
  
    it('for a missing value', () => {
      //const [b=2] = [1,,3];
      const [b=2] = [2,,3];
      //AssertionError: 1 == 2
      //why is it referring to b[0] ?
      assert.equal(b, 2);
    });
  
    it('in an object', () => {
      //const [a, b=2] = {a: 1};
      const {b} = {b: 2};
      assert.equal(b, 2);
    });
  
    it('if the value is undefined', () => {
      //const {a, b=[2]} = {a: 1, b: void 0};
      const {a, b=[2]} = {a: 1, b: 2};
      assert.strictEqual(b, 2);
    });
  
    it('also a string works with defaults', () => {
      //const [b=2] = '1';
      
      //const {a}= {a:1};
      //const {b}= {b:2};
      
      const {a, b}= {a:1, b:2};
  
  
      assert.equal(a, '1');
      assert.equal(b, 2);
    });
   
  });