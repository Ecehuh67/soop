import Button from './buttonClass';

class Container {
  constructor() {
    this._button = new Button();
  }

  render() {
    return `
        <div>
          ${this._button.render()}
        </div>
      `;
  }

  onDataChange() {
    this._button.render();
  }
}

const observer = new Container();

const container = document.querySelector('.main-container');

container.innerHTML = observer.render();
