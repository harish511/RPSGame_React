function play(p1,p2,ui,repo) {
    new PlayUseCase(p1, p2, ui,repo).execute()
}

function Play(p1Throw, p2Throw, winner){
    this.p1Throw=p1Throw;
    this.p2Throw=p2Throw;
    this.winner=winner;
}

function PlayUseCase(p1, p2, ui,repo) {
    this.execute = function() {
         if(tie()){
            ui.tie();
            repo.save(new Play(p1,p2,"tie"))
        }else if(p1BeatsP2()){
            ui.p1Wins()
            repo.save(new Play(p1,p2,"p1"))
        }else{
            ui.p2Wins()
            repo.save(new Play(p1,p2,"p2"))
        }
    }

    function p1BeatsP2() {
        return p1=='paper' && p2 ==='rock' ||
            p1=='scissors'&& p2==='paper'||
            p1==='rock' && p2==='scissors';
    }

    const VALID_INPUTS=['rock','paper','scissors'];


    function tie() {
        return p1==p2;
    }

}

module.exports = {
    play,
    Play
}


