// example a request https://api.themoviedb.org/3/movie/550?api_key=aaf90be5b4a498eeba973a317099f717
export const API_KEY = '?api_key=aaf90be5b4a498eeba973a317099f717';
export const ADDRESS = 'https://api.themoviedb.org/3';

export const HIDDEN_CLASS = `visually-hidden`;

export const createElement = (template) => {
  const newElement = document.createElement('div');

  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const replaceElements = (newElement, oldElement) => {
  const parentElement = oldElement.parentElement;
  const isExistElements = !!(parentElement && oldElement && newElement);

  if (isExistElements && parentElement.contains(oldElement)) {
    const { scrollTop, scrollLeft } = oldElement;

    newElement.style.animationDuration = '0s';
    parentElement.replaceChild(newElement, oldElement);

    newElement.scrollLeft = scrollLeft;
    newElement.scrollTop = scrollTop;
  }
};
