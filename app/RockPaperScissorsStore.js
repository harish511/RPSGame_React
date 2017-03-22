import cloneDeep from "lodash.clonedeep";
import Reducers from "./Reducers";

const initialState = {
    scores:{    
              won:0,
              lost:0, 
              tie:0, 
              noOfRounds:0
          },
    timeLimit: 0,
  history: []
};

class RockPaperScissorsStore {
  constructor() {
    this.state = initialState;
    this.subscribers = [];
  }

  reduce = (action) => {
    const actionType = action.actionType;
    const relevantReducer = Reducers[actionType];

    if (relevantReducer) {
      const newState = relevantReducer(this.state, action);
      this.state = Object.assign({}, this.state, newState);
      this.notify();
    }
  };

  getState = () => cloneDeep(this.state);

  subscribe = (callback) => {
    this.subscribers.push(callback);
  };

  notify = () => {
    this.subscribers.forEach((s) => {
      s(cloneDeep(this.state));
    });
  };
}

const store = new RockPaperScissorsStore();

export { RockPaperScissorsStore, store };