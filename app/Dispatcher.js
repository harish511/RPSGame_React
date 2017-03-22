
export default class Dispatcher {

  constructor(store) {
    this.store = store;
    this.humanWins = ()=>{store.reduce({actionType:"HUMAN_WINS"})};
    this.humanLost = ()=>{store.reduce({actionType:"HUMAN_LOST"})};
    this.tie = ()=> {store.reduce({actionType: "TIE"})};
    this.restartGame=() =>{store.reduce({actionType:"RESTART_GAME"})};
    this.saveHistory =(value) => {
                        store.reduce({
                          actionType:"SAVE_HISTORY",
                          value:value
                        })
                    };

     this.timeChange =(value) => {
        store.reduce({
          actionType:"TIME_CHANGE",
          value:value
        })
    };
    this.whoWon= () => { store.reduce({actionType:"WHO_WON"})}
     this.roundsChange =(value) => {
        store.reduce({
          actionType:"ROUNDS_CHANGE",
          value:value
        })
    };
}

}