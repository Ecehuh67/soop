export default class Button {
  constructor() {
    // this.setClickHandler = this.setClickHandler.bind(this);
  }

  render() {
    return `
    <button onclick="this.setClickHandler">Click</button>`;
  }

  setClickHandler() {
    console.log('button was clicked');
  }
}
