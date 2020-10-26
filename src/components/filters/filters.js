import AbstractComponent from '../abstract-component/component';
import { createFilterTemplate } from '../filters/template';

export default class Filters extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return createFilterTemplate();
  }

  setFilterChangeHandler(handler) {
    this.getElement().addEventListener('click', ({ target }) => {
      handler(target.dataset.filterType);
    });
  }

  setActive(oldFilter, newFilter) {
    this.getElement()
      .querySelector(`#filter__${oldFilter}`)
      .classList.remove(`filter-panel__item--active`);
    this.getElement()
      .querySelector(`#filter__${newFilter}`)
      .classList.add(`filter-panel__item--active`);
  }
}
