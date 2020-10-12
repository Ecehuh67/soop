import AbstractComponent from './component';
import { replaceElements } from '../../utils/consts';

export default class SmartAbstractComponent extends AbstractComponent {
  recoveryListeners() {
    throw new Error(
      'You must not use SmartAbstractComponent, only extending is allowed'
    );
  }

  rerender() {
    const oldElement = this.getElement();
    this.removeElement;
    const newElement = this.getElement();

    replaceElements(newElement, oldElement);

    this.recoveryListeners();
  }
}
