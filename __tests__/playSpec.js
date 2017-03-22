const { play} = require('../app/rps')
const {FakePlayRepo} =require('../__mocks__/FakePlayRepo')
describe("Play", function () {
    const ROCK = "Rock";
    const PAPER = "Paper";
    const SCISSORS='Scissors';
    let ui,repo;
    beforeEach(function () {
        repo = new FakePlayRepo()
         ui = jasmine.createSpyObj('uiSpy',['tie','p1Wins','p2Wins','invalid']);
    })
    it("rock v. rock", function () {

        play(ROCK, ROCK, ui,repo)

        expect(ui.tie).toHaveBeenCalled()
    })

    it("paper v. rock ", function () {
        play(PAPER, ROCK,ui,repo)

        expect(ui.p1Wins).toHaveBeenCalled()
    });
    it("rock v. paper", function () {
        play(ROCK, PAPER,ui,repo)

        expect(ui.p2Wins).toHaveBeenCalled()
    });

    it("scissors v. paper", function () {
        play(SCISSORS, PAPER,ui,repo)

        expect(ui.p1Wins).toHaveBeenCalled()
    });

    it("paper v. scissors", function () {
        play(PAPER, SCISSORS,ui,repo)
        expect(ui.p2Wins).toHaveBeenCalled()
    });
    it("rock v. scssors", function () {
        play(ROCK,SCISSORS,ui,repo)
        expect(ui.p1Wins).toHaveBeenCalled()
    });

    it("scissors v. paper", function () {
        play(SCISSORS,ROCK,ui,repo)
        expect(ui.p2Wins).toHaveBeenCalled()
    });



})


