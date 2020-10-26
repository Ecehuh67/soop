import './less/style.less';
import Filters from './components/filters/filters';
import { render, RenderPosition } from './utils/consts';

// const leftButton = document.querySelector('.top-sleder__button--left');
// const rightButton = document.querySelector('.top-sleder__button--right');
// const images = document.querySelectorAll('.top-sleder__item');
// const toggles = document.querySelectorAll('.top-slider__toggle-item');

// const changeSlide = (list, activeClass, flag) => {
//   const activeElement = document.querySelector(`.${activeClass}`);
//   const index = Array.from(list).indexOf(activeElement);
//   let newActivePosition = null;

//   switch (flag) {
//     case flag === 'decrease':
//       if (index - 1 < 0) {
//         newActivePosition = Array.from(list).length - 1;
//       } else {
//         newActivePosition = index - 1;
//       }
//       break;
//     default:
//       if (index + 1 > Array.from(list).length - 1) {
//         newActivePosition = 0;
//       } else {
//         newActivePosition = index + 1;
//       }
//   }

//   Array.from(list).forEach((el, i) => {
//     if (i === newActivePosition) {
//       el.classList.add(activeClass);
//     }
//     activeElement.classList.remove(activeClass);
//   });
// };

// leftButton.addEventListener('click', () => {
//   changeSlide(images, 'top-sleder__item--active', 'decrease');
//   changeSlide(toggles, 'top-slider__toggle-item--active');
// });
// rightButton.addEventListener('click', () => {
//   changeSlide(images, 'top-sleder__item--active');
//   changeSlide(toggles, 'top-slider__toggle-item--active');
// });

const headerContainer = document.querySelector('.doc__header');
const filterElement = new Filters();

render(headerContainer, filterElement, RenderPosition.AFTERBEGIN);
