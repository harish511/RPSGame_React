function Repo() {
    let plays=[];
    this.empty=function(){
        return plays.length===0;
    }
    this.clear=function(){
        plays=[];
        return plays;
    }

    this.save=function(play){
        plays.push(play)
    }
    this.getAll=function(){
        return plays;
    }

}

module.exports = {
    Repo

}