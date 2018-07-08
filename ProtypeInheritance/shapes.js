// Prototypical inheritance in defaultLocation

// Define a Shape function which all functions that are a type of shape, defined at some point later, can inherit from
function Shape(color) {
  this.color = color;
};

// Place a method on the Shape prototype
Shape.prototype.duplicate = function() {
  console.log('DUPLICATE!');
};

// Use the create method on the child Object to re-create its prototype using parents prototype
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
};

// Define a type of shape which can inherit from the Shape constructor
// Use the call method on the Shape constructor to pull the color property down and allow it to be made mutatable to the Circle function
function Circle(radius) {
  Shape.call(this, color);

  this.radius = radius;
};

extend(Circle, Shape);


function Square(size) {
  this.size = size;
};

extend(Square, Shape);

const c = new Circle(1);
const s = new Square(10);
