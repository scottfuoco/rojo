const RojoSays = require('../src/rojo-says');

describe('rojoSays', () => {
  let test;
  describe('.listen', () => {
    beforeEach(() => {
      test = {};
      test.rojo = new RojoSays();
    });

    describe('when passed nothing"', () => {
      it('should return the string Sorry I dont understand', () => {
        const emptyRegex = /Sorry I dont understand/i;
        const result = emptyRegex.test(test.rojo.listen());
        expect(result).toBe(true);
      });
    });

    describe('when passed a non question', () => {
      it('should return Sorry I dont understand', () => {
        const noQuestionRegex = /Sorry I dont understand/i;
        const testString = 'Ringu is coo.';
        const result = noQuestionRegex.test(test.rojo.listen(testString));
        expect(result).toBe(true);
      });
    });

    describe('when passed string that starts with "when"', () => {
      it('should return a string containing am or pm', () => {
        const timeRegex = /.+am|pm.*/i;
        const testString = 'When are you coming home?';
        const result = timeRegex.test(test.rojo.listen(testString));
        expect(result).toBe(true);
      });
    });

    describe('when passed string that starts with "where"', () => {
      it('should return a string starting with "It is at the"', () => {
        const whereRegex = /It is at the.*/i;
        const testString = 'Where is the my backpack?';
        const result = whereRegex.test(test.rojo.listen(testString));
        expect(result).toBe(true);
      });
    });

    describe('when passed string that starts with "why"', () => {
      describe('when the string contains "ringu"', () => {
        it('should return the string "because"', () => {
          const whyRegex = /because/i;
          const testString = 'Why ringu';
          const result = whyRegex.test(test.rojo.listen(testString));
          expect(result).toBe(true);
        });
      });
    });

    describe('when passed string that starts with "why"', () => {
      describe('when the string contains "ringo"', () => {
        it('should return the string "because"', () => {
          const whyRegex = /did you mean Ringu.*/i;
          const testString = 'Why ringo';
          const result = whyRegex.test(test.rojo.listen(testString));
          expect(result).toBe(true);
        });
      });
    });

    describe('when passed string that starts with "why"', () => {
      describe('when the string doesnt contain "ringo" or "ringu"', () => {
        it('should return the string "because"', () => {
          const whyRegex = /ask ringu/i;
          const testString = 'Why Ringi?';
          const result = whyRegex.test(test.rojo.listen(testString));
          expect(result).toBe(true);
        });
      });
    });

    describe('when passed string that starts with "who"', () => {
      it('should return a string containing "did it"', () => {
        const whoRegex = /.+did it./i;
        const testString = 'Who drew on the wall?';
        const result = whoRegex.test(test.rojo.listen(testString));
        expect(result).toBe(true);
      });
    });

    describe('when passed a string that starts with "what"', () => {
      describe('when the string contains "time"', () => {
        it('should return a string containing am or pm', () => {
          const timeRegex = /.+am|pm.*/i;
          const testString = 'What time are you coming home?';
          const result = timeRegex.test(test.rojo.listen(testString));
          expect(result).toBe(true);
        });
      });

      describe('when the string does not contain "time"', () => {
        describe('when the string also contains "day"', () => {
          it('should return a string cotaining a day of the week', () => {
            const dayRegex = /.*monday|tuesday|wednesday|thursday|friday|saturday|sunday.*/i;
            const testString = 'What day are you coming home?';
            const result = dayRegex.test(test.rojo.listen(testString));
            expect(result).toBe(true);
          });
        });

      });
    });
  });
});
