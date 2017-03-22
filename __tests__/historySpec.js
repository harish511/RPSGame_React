const { play,Play,ValidationError } = require('../app/rps')
const {FakePlayRepo} =require('../__mocks__/FakePlayRepo/')

describe("history",function () {
    let ui,repo;
    beforeEach(function () {
        repo = new FakePlayRepo()
        ui=jasmine.createSpyObj("ui",["noPlays","p2Wins","p1Wins","tie","plays","invalid"])
    })

    it("given no one has played before",function () {
        history(ui, repo)
        expect(ui.noPlays).toHaveBeenCalled()
    })

    it("given players has played before", function () {
        play("Rock","Paper",ui, repo)
        history(ui, repo)
        expect(ui.plays).toHaveBeenCalledWith([new Play("Rock","Paper","lost")])
    });

    it("given players has played before p1 wins", function () {
        play("Rock","Scissors",ui, repo)
        history(ui, repo)
        expect(ui.plays).toHaveBeenCalledWith([new Play("Rock","Scissors","won")])
    });

    it("given players has played before and match is tie", function () {
        play("Rock","Rock",ui, repo)
        history(ui, repo)
        expect(ui.plays).toHaveBeenCalledWith([new Play("Rock","Rock","tie")])
    });


})



function history(ui,repo) {
    if(repo.empty()){
        ui.noPlays()

    }else{
        ui.plays(repo.getAll())
    }
}



