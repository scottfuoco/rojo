class RojoSays {
  constructor() {

  }

  listen(userInput) {
    const cleanUserInput = userInput.toLowerCase();

    const thoughts = think(cleanUserInput);

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
        const names = ['Ringo', 'Jon', 'Justin', 'Scott', 'DJ'];
        const selection = Math.floor(Math.random() * 5);
        return `${names[selection]} did it.`;
      case 'where':
        const locations = ['RED', 'McDonalds', 'Home'];
        const selection = Math.floor(Math.random() * 3);
        return `It's at the ${locations[selection]}`;;
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
    console.log(input.match(re));
    return input.match(re)[0] || null;
  }

  dayOrTime(input) {
    const re = /(day|time)/i;
    return input.match(re)[0] || null;
  }

  ringoOrRingu(input) {
    const re = /(ringo|ringu)/i;
    return input.match(re)[0] || null;
  }
}

module.exports = RojoSays;