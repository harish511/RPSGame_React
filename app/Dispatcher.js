
export default class Dispatcher {

  constructor(store) {
    this.store = store;
    this.humanWins = ()=>{store.reduce({actionType:"HUMAN_WINS"})};
    this.humanLost = ()=>{store.reduce({actionType:"HUMAN_LOST"})};
    this.tie = ()=> {store.reduce({actionType: "TIE"})};
    this.saveHistory =(value) => {
                        store.reduce({
                          actionType:"SAVE_HISTORY",
                          value:value
                        })
                    };
}

}