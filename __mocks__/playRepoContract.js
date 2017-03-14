const {Play}= require("../app/rps")

function playRepoContract(fakeRepoClass) {
    describe("Play Repo Contract", function(){

        it("saves plays",function () {
            const repo=new fakeRepoClass()
            let play= new Play("rock","rock","tie")
            repo.save(play)
            expect(repo.getAll()).toContain(play)
        })

        describe("when there are no plays", function () {
            it("is empty", function () {
                const repo=new fakeRepoClass()
                expect(repo.empty()).toBeTruthy()
            });

        });
        describe("when there are no plays", function () {
            it("is not empty", function () {
                const repo=new fakeRepoClass()
                repo.save(new Play())
                expect(repo.empty()).toBeFalsy()
            });

        });
    })
}

module.exports=playRepoContract