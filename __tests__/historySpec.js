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
        play("rock","paper",ui, repo)
        history(ui, repo)
        expect(ui.plays).toHaveBeenCalledWith([new Play("rock","paper","p2")])
    });

    it("given players has played before p1 wins", function () {
        play("rock","scissors",ui, repo)
        history(ui, repo)
        expect(ui.plays).toHaveBeenCalledWith([new Play("rock","scissors","p1")])
    });

    it("given players has played before and match is tie", function () {
        play("rock","rock",ui, repo)
        history(ui, repo)
        expect(ui.plays).toHaveBeenCalledWith([new Play("rock","rock","tie")])
    });


})



function history(ui,repo) {
    if(repo.empty()){
        ui.noPlays()

    }else{
        ui.plays(repo.getAll())
    }
}



