// 7: block scope - let
// To do: make all tests pass, leave the asserts unchanged!

describe('`let` restricts the scope of the variable to the current block', () => {

    describe('`let` vs. `var`', () => {
  
      it('`var` works as usual', () => {
        if (true) {
          //var is like a global scope
          var varX = true;
        }
        assert.equal(varX, true);
      });
      
      it('`let` restricts scope to inside the block', () => {
        if (true) {
          //let is like local scope
          let letX = true;
        }
        assert.throws(() => console.log(letX));
      });
      
    });
  
    describe('`let` usage', () => {
      
      it('`let` use in `for` loops', () => {
        let obj = {x: 1};
        for (let key in obj) {}
        //for (var key in obj) {}
        assert.throws(() => console.log(key));
      });
      
      it('create artifical scope, using curly braces', () => {
        //{var letX = true;}
        {
          let letX = true;
          //use curly braces when using let, params when using var 
          //WHAT IS ARTIFICIAL SCOPE? TEMP? LOCAL?
        }
        assert.throws(() => console.log(letX));
      });
      
    });
    
  });
  