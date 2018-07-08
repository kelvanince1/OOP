// Prototypical inheritance in defaultLocation

// Define a Shape function which all functions that are a type of shape, defined at some point later, can inherit from
function Shape(color) {
  this.color = color;
};

// Place a method on the Shape prototype
Shape.prototype.duplicate = function() {
  console.log('DUPLICATE!');
};

// Define a type of shape which can inherit from the Shape constructor
// Use the call method on the Shape constructor to pull the color property down and allow it to be made mutatable to the Circle function
function Circle(radius) {
  Shape.call(this, color);

  this.radius = radius;
};

// Use the create method on the Circles Object to re-create its prototype using Shapes prototype
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

const c = new Circle(1);
