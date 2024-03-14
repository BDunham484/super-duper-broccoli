// TODO: Import yellow robot image as Yellow
// TODO: Import blue robot image as Blue
import Yellow from '../images/yellow-robot.png';
import Blue from '../images/blue-robot.png';

export const boxClick = () => {
  const box = document.getElementById('box');
  if (box.src === Yellow) {
    box.src = Blue;
  } else {
    box.src = Yellow;
  }
};
