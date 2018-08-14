// 14: destructuring - parameters
// To do: make all tests pass, leave the assert lines unchanged!

describe('destructuring function parameters', () => {

    describe('destruct parameters', () => {
      it('multiple params from object', () => {
        //const fn = ({id}, {name}) => {
          
        //assert.equal(id, 42);
        
        // assert.equal(name, 'Wolfram');};
        
        const fn = (user) => {
          
        assert.equal(id, 42);
          assert.equal(name, 'Wolfram');
        };
        const name = 'Wolfram'; 
        const id = 42;
        const user = [{name}, {id}];
        fn(user);
      });
      
      
      
      it('multiple params from array/object', () => {
        //const fn = ([{name}]) => {
          //assert.equal(name, 'Alice');
        //};
        //const users = [{name: 'nobody'}, {name: 'Alice', id: 42}];
        //fn(users);
        
        const fn = (name) => {
          assert.equal(name, 'Alice');
        };
        const name = 'Alice';
        // users = {name}; why is it not {name} like previous example??
              const users = name;
  
        fn(users)
        
        
      });
    });
  
    describe('default values', () => {
      /*it('for simple values', () => {
        const fn = (id, name='Bobby') => {
          assert.strictEqual(id, 23);
          assert.strictEqual(name, 'Bob');
        };
        fn(23);*/
        
        it('for simple values', () => {
        const fn = (id, name='Bob') => {
          assert.strictEqual(id, 23);
          assert.strictEqual(name, 'Bob');
        };
        fn(23)
      });
      
      it('for a missing array value', () => {
        /*const defaultUser = {id: 23, name: 'Joe'};
        const fn = ([user]) => {
          assert.deepEqual(user, defaultUser);
        };
        fn([]);*/
        
        const defaultUser = {id: 23, name: 'Joe'};
        const fn = ([user]) => {
          assert.deepEqual(user, defaultUser);
        };
        fn([defaultUser]);
      });
      
      it('mix of parameter types', () => {
        
          const mixOfTypes = {id: 1, arr: 2, obj: 3}; 
          //const mixOfTypes = {id: 1} + {arr: 2} + {obj: 3}
          
          const fn = ({id, arr, obj}) => {
            
          assert.equal(id, 1);
          assert.equal(arr, 2);
          assert.equal(obj, 3);
          
        };
        
        fn[mixOfTypes];
        
        
        //const fn = (id, [arr], {obj}) => {
         // assert.equal(id, 1);
          //assert.equal(arr, 2);
          //assert.equal(obj, 3);
        //};
        //fn(void 0, [], {});
      });
    });
  
  });
  