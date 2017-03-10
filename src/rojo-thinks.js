const rojoKnows = require('./rojo-knows');

class RojoThinks extends rojoKnows {
  constructor(){
    this.thinks = {};
  }

  think(input) {
    this.thinks.questionType = questionType(input);
  }

  questionType(input) {
    const re = /(who|what|when|where|why)/i;
    return input.match(re)[0];
  }

  dayOrTime(input) {
    const re = /(day|time)/i;
    return input.match(re)[0];
  }

}

module.exports = RojoThinks;