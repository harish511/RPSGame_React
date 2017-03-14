function Repo() {
    const plays=[];
    this.empty=function(){
        return plays.length===0;
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