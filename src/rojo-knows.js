class RojoKnows {
  constructor() {
    this.knows = {}

    this.populateNames();
    this.populateLocations();
    this.populateActions();
    this.populateActivities();
    this.populateDescriptions();
  }

  populateNames() {
    this.knows.names = ["Ringo", "Jon", "Justin", "DJ", "Scott"];
  }

  populateLocations() {
    this.knows.locations = ["red", "home", "McDonalds"];
  }

  populateActions() {
    this.knows.actions = ["run", "study", "slap"];
  }

  populateActivities() {
    this.knows.activities = {
      "sports": {
        "hockey": "fun",
        "basketball": "sucks",
        "soccer": "really sucks"
      }
    }
  }

  addKnowledge(category, knowledge){
    this.knows[category] = knowledge;
  }
}

module.exports = RojoKnows;