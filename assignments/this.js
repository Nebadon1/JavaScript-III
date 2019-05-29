/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding 
When in global scope, the value of this will be the window, 
* 2. Implicit Binding 
when a function is called with a dot to the left the object to the left will get th "this"
* 3. New Binding 
when ever a constructor fuction is used  "this" referes to de soecific instance of the object that is created and returned by the constructor function.
* 4.  Explicit binding 
whenever javascript call .bind . call . apply, "this" is explicitly defined
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function hello(dog){
    console.log(this);
    return dog;
}
hello('pomeranian');
 


// Principle 2
// code example for Implicit Binding

const myObj = {
    greeting: 'HOWDY',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Carlos');



// Principle 3
// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
  newman.speak();



// Principle 4
// code example for Explicit Binding
function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak.call(newman);
  newman.speak.apply(jerry);

  jerry.speak();
  newman.speak();



