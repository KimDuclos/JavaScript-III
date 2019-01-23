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

console.log("****code example for Window Binding****");

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

// Principle 4

console.log("****code example for Explicit Binding****");