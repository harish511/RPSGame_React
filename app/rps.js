function play(p1,p2,ui,repo) {
    new PlayUseCase(p1, p2,ui,repo).execute()
}

function Play(p1Throw, p2Throw, winner){
    this.human=p1Throw;
    this.computer=p2Throw;
    this.winner=winner;
}

function PlayUseCase(p1, p2,ui,repo) {
    this.execute = function() {
         if(tie()){
            ui.tie();
            repo.save(new Play(p1,p2,"tie"))
        }else if(p1BeatsP2()){
            ui.p1Wins()
            repo.save(new Play(p1,p2,"won"))
        }else{
            ui.p2Wins()
            repo.save(new Play(p1,p2,"lost"))
        }
    }

    function p1BeatsP2() {
        return p1=='Paper' && p2 ==='Rock' ||
            p1=='Scissors'&& p2==='Paper'||
            p1==='Rock' && p2==='Scissors';
    }

    function tie() {
        return p1==p2;
    }

}

module.exports = {
    play,
    Play
}


