class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min_value = Math.ceil(min);
        this.max_value = Math.floor(max);
    }

    guess() {
        this.middle_value = Math.ceil(this.min_value + (this.max_value - this.min_value)/2);
        return this.middle_value;
    }

    lower() {
        this.max_value = this.middle_value;
    }

    greater() {
        this.min_value = this.middle_value;
    }
}

module.exports = GuessingGame;