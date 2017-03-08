const RojoKnows = require('./rojo-knows');

class RojoSays {
  getRandomElement(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }

  regexMatchTest(input, re) {
    return input.match(re) ?
      input.match(re)[0] :
      ''
  }

  listen(userInput) {
    if (!userInput) return 'Sorry I dont understand';

    const cleanUserInput = userInput.toLowerCase();

    switch (this.questionType(cleanUserInput)) {
      case 'when':
        return '3:00pm'
      case 'what':
        switch (this.dayOrTime(cleanUserInput)) {
          case 'time':
            return '3:00pm'
          case 'day':
            return 'Monday'
          default:
            return 'Sorry I don\'t understand';
        }
      case 'who':
        return `${this.getRandomElement(RojoKnows.names)} did it.`;
      case 'where':
        return `It is at the ${this.getRandomElement(RojoKnows.locations)}`;
      case 'why':
        switch (this.ringoOrRingu(cleanUserInput)) {
          case 'ringu':
            return 'because'
          case 'ringo':
            return 'did you mean Ringu?'
          default:
            return 'ask ringu';
        }
      case 'how':
        return 'ask Ringu';
      default:
        return 'Sorry I dont understand';
    }
  }

  questionType(input) {
    const re = /(who|what|when|where|why)/i;
    return this.regexMatchTest(input, re)
  }

  dayOrTime(input) {
    const re = /(day|time)/i;
    return this.regexMatchTest(input, re)
  }

  ringoOrRingu(input) {
    const re = /(ringo|ringu)/i;
    return this.regexMatchTest(input, re)
  }
}

module.exports = RojoSays;