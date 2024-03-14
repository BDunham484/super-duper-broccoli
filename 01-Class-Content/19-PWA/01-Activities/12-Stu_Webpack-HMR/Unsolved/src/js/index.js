import { boxClick } from './box';
import { headerClick } from './header';
import '../css/style.css';
import Yellow from '../images/yellow-robot.png';

if (module.hot) {
    module.hot.accept((err) => {
        if (err) {
            console.error('Cannot apply HMR update.', err);
        }
    });
}

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);

document.getElementById('box').src = Yellow;

//TODO: Add logic for Hot Module Reloading

