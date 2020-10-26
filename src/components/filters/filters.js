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
    console.log('Filter component');
    handler();
  }
}
