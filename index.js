// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1
//   },
//   draw: () => {
//     console.log('draw');
//   }
// };

function createCircle(radius) {
  return {
    radius: radius,
    draw: () => {
      console.log('draw');
    }
  }
};

const circle = createCircle(1);
circle.draw();

function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0};
  // Define a function which can return the private variable defaultLocation and make it readable
  this.getDefaultLocation = function() {
    return defaultLocation;
  };
  this.draw = () => {
    console.log('draw');
  };
  Object.defineProperty(this, 'defaultLocation', {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || !value.y) {
        throw new Error('Invalid');
      }
      defaultLocation = value;
    }
  });
};

const another = new Circle(1);
another.location = { x: 1 };
