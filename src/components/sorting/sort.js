import AbstractComponent from '../abstract-component/component';
import { SortTypes, createSortTempalte } from './sort-template';

export default class Sort extends AbstractComponent {
  constructor() {
    super();
    this._currentSortType = null;
  }

  getTemplate() {
    return createSortTempalte();
  }
}
