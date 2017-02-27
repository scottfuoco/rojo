const rojoKnows = require('./rojo-knows');

class RojoThinks extends rojoKnows {
  constructor(){
    this.think = {};
  }

  think(input) {
    this.think.questionType = questionType(input);
  }

  questionType(input) {
    const re = /(who|what|when|where|why)/i;
    return input.match(re)[0] || null;
  }

  dayOrTime(input) {
    const re = /(day|time)/i;
    return input.match(re)[0] || null;
  }

}

module.exports = RojoThinks;