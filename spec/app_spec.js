var app = require("../bin/www");
var constants = require("../lib/consts");
var tAthlete = require("../lib/athlete");

describe("Check athlete object\n", function () {
    describe("", function () {
        it("Check invalid weight (less or equal of 27.3 Kgr)\n", function (done) {
            tAthlete.weight = constants.MINWEIGHT;
            expect(tAthlete.Weight).not.toBe(constants.MINWEIGHT);
            done();
        });

        it("Check invalid weight (more or equal of 635 kgr)", function (done) {
            tAthlete.weight = constants.MAXWEIGHT;
            expect(tAthlete.weight).not.toBe(constants.MAXWEIGHT);
            done();
        });

        it("Check valid weight ", function (done) {
            tAthlete.weight = 80.5;
            expect(tAthlete.weight).toBe(80.5);
            done();
        });

        it("Check Invalid height (less of 54.6)\n", function (done) {
            tAthlete.height = constants.MINHEIGHT;
            expect(tAthlete.height).not.toBe(constants.MINHEIGHT);
            done();
        });

        it("Check Invalid height (more than 2.72)\n", function (done) {
            tAthlete.height = constants.MAXHEIGHT;
            expect(tAthlete.height).not.toBe(constants.MAXHEIGH);
            done();
        });

        it("Check Invalid height (more than 2.72)\n", function (done) {
            tAthlete.height = 4;
            expect(tAthlete.height).not.toBe(4);
            done();
        });

        it("Check valid height (more than 54.6cm and less than 2.72m)\n", function (done) {
            tAthlete.height=1.78;
            expect(tAthlete.height).toBe(1.78);
            done();
        });

        it("Check valid bmi for 91kg and 173 height = 30.405292525644022 \n", function (done) {
            tAthlete.weight=91;
            tAthlete.height=1.73;
            expect(tAthlete.bmi).toBeCloseTo(30.4052);
            done();
        });

        it("Check if sex set to Male correctly\n",function(done){
            tAthlete.sex=constants.SEX_MALE;
            expect(tAthlete.sex).toBe(constants.SEX_MALE);
            done();
        });

        it("Check if name can be null\n",function(done){
            tAthlete.namex="";
            expect(tAthlete.name).not.toBe("");
            done();
        });

        it("Check if name can be only spaces\n",function(done){
            tAthlete.namexi = "        ";
            expect(tAthlete.name).not.toBe("        ");
            done();
        });

        it("Check if name can be 3 characters\n",function(done){
            tAthlete.namexi = "abc";
            expect(tAthlete.name).not.toBe("abc");
            done();
        });

        it("Check if name can be 3 characters trimed\n",function(done){
            tAthlete.namexi = "   abc   ";
            expect(tAthlete.name).not.toBe("   abc   ");
            done();
        });
     
        it("Check if name can be set to Στρατής Χριστοδούλου\n",function(done){
            tAthlete.name = "Στρατής Χριστοδούλου";
            expect(tAthlete.name).toBe("Στρατής Χριστοδούλου");
            done();
        });
    });
    app.closeServer();
});
