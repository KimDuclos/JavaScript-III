/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding - default rule for "this" if no other rules apply.
                    - this defaults to the "window object".
* 2. Implicit binding - dot notation is used when involking a function
                      - everything to the left of the dot is the context for "this" within the function.
                      - deals with objects
* 3. Explicit binding - .call(), apply() or bind() are used to tell a function the value of "this".
                      - sets value of "this" on a function up execution.
* 4. New binding - sets a "this" context
                 - returns a new function that is bound to the "this" context. The new function has the same name.
*
* write out a code example of each explanation above
*/

// Principle 1

console.log("****code example for Window Binding(commented out to skip error)****");

// const car = {
//     make: Chevy,
//     model: Cobalt, 
//     year: 2007,
//     carInfo: function() {
//         console.log(`This car is a ${year} ${make} ${model} and it's the okayest car.`) // error in window binding
//     }
// }

// car.carInfo();

// Principle 2

console.log("****code example for Implict Binding****");

const athlete = {
    sport: 'sailing',
    equipment: 'Hobie 16',
    bio: function() {
        console.log(`This athlete's sport is ${this.sport} and the main equipment is a ${this.equipment}.`) 
    }
}

athlete.bio();


// Principle 3

console.log("****code example for New Binding****");

function CordialPerson(name) {
    this.greeter = name;
    this.greeter = greeter;
    this.greeting = "Hello";
    this.speak = function() {
      console.log(`${this.greeting}, ${this.greeter}`)
    }
  }

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');


// Principle 4

console.log("****code example for Explicit Binding****");

const pet = {
    type: 'fish'
  }
  
  const hobbit = {
    name: 'Kitty'
  }
  
  const needs = ['food', 'water', 'filter'];
  
  function introduce(need1, need2, need3) {
    
    console.log(`My ${type}'s name is ${this.name}, and he requires: ${need1}, ${need2}, ${need3}`)  // this is stored for later use, not output now
  }