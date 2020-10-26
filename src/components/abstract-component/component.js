import { createElement, HIDDEN_CLASS } from '../../utils/consts';

export default class AbstractComponent {
  constructor() {
    if (new.target === AbstractComponent) {
      throw new Error(
        'You must not use AbstractComponent, only extending is allowed'
      );
    }

    this._element = null;
  }

  getTemplate() {
    throw new Error('This method must be redefine in extended components');
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  show() {
    if (this._element) {
      this._element.classList.remove(HIDDEN_CLASS);
    }
  }

  hide() {
    if (this._element) {
      this._element.classList.add(HIDDEN_CLASS);
    }
  }
}
