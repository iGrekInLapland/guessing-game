class GuessingGame {
  constructor() {}

  setRange(min, max) {
  this.min = min;
  this.max = max
  }

  guess() {
    this.middle = Math.round((this.min + this.max)/2);
    return this.middle;
  }

  lower() {
    this.max = this.middle;
    this.middle = Math.round((this.min + this.max)/2);
  }

  greater() {
    this.min = this.middle;
    this.middle = Math.round((this.min + this.max)/2);
  }
}

module.exports = GuessingGame;
