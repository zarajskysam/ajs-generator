/* eslint-disable no-sequences */
export default class Team {
  constructor(char1, char2, char3) {
    // eslint-disable-next-line no-unused-expressions
    this.char1 = char1,
    this.char2 = char2,
    this.char3 = char3;
  }

  * [Symbol.iterator]() {
    yield this.char1;
    yield this.char2;
    yield this.char3;
  }
}
