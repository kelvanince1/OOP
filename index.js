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
