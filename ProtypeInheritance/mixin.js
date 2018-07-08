// Use composition and abstraction to pass only the relevant pieces of data which the child objects will be using along to them.

// The target param is the child object which objects will be passed to, and the ...sources is a spread operator taking in all of the objects being passed.
function mixin(target, ...sources) {
  Object.assign(target, ...sources);
};

// Object defined that has capability of being passed
const canEat = {
  eat: function() {
    this.hunger--;
    console.log('Eating');
  }
};

// Object defined that has capability of being passed
const canWalk = {
  walk: function() {
    console.log('Walking');
  }
};

// Object defined that has capability of being passed
const canSwim = {
  swim: function() {
    console.log('Swimming');
  }
};

function Person() {
};

// Call the mixin and pass the Person constructor the canEat and canWalk objects to it. Ignore the canSwim object.
mixin(Person.prototype, canEat, canWalk);

function Goldfish() {
};

// Call the mixin and pass Goldfish constructor the canEat and canSwim objects. Ignore the canWalk object.
mixin(Goldfish.prototype, canEat, canSwim);
