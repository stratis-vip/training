var app = require("../app.js");
var constants = require("../lib/consts.js");
var Athlete = require("../lib/athlete.js");

var tAthlete = new Athlete(91, 173);

describe("Check athlete object\n", function(){
    describe("",function(){
        it("Check invalid weight (less or equal of 27.3 Kgr)\n",function(done){
            expect(tAthlete.setWeight(constants.MINWEIGHT)).toBe(false);
            done();
        });

        it("Check invalid weight (more or equal of 635 kgr)", function(done){
            expect(tAthlete.setWeight(constants.MAXWEIGHT)).toBe(false);
            done();
        });

        it("Check valid weight ", function(done){
            expect(tAthlete.setWeight(75)).toBe(true);
            done();
        });

        it("Check Invalid height (less of 54.6)\n", function(done){
            expect(tAthlete.setHeight(constants.MINHEIGHT)).toBe(false);
            done();
        });

        it("Check Invalid height (more than 2.72)\n", function(done){
            expect(tAthlete.setHeight(constants.MAXHEIGHT)).toBe(false);
            done();
        });
        
        it("Check Invalid height (more than 2.72)\n", function(done){
            expect(tAthlete.setHeight(4)).toBe(false);
            done();
        });

        it("Check valid height (more than 54.6cm and less than 2.72m)\n", function(done){
            expect(tAthlete.setHeight(1.83)).toBe(true);
            done();
        });

		it("Check valid bmi for 91kg and 173 height = 30.405292525644022 \n", function(done){
			tAthlete.setWeight(91);
			tAthlete.setHeight(1.73);
			expect(tAthlete.getBmi()).toBeCloseTo(30.4052);
			done();
		});        

		it("Chcek valid sex\n", function(done){
			if (tAthlete.setSex(constants.SEX_MALE)){
				except(tAthlete.getSex().toBe(constants.SEX_MALE));
				done();
			}else {
				done("sex not set correctly");
			}
		});
    });
    app.closeServer();
});
