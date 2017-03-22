const Reducers = {
    HUMAN_WINS: (state, action) => {
      state.scores.won = state.scores.won+1;
      state.scores.noOfRounds = state.scores.noOfRounds-1;
      return state;
    },

  HUMAN_LOST: (state, action) => {
      state.scores.lost = state.scores.lost+1;
       state.scores.noOfRounds = state.scores.noOfRounds-1;
      return state;
    },

  TIE: (state, action) => {
       state.scores.tie = state.scores.tie+1;
       state.scores.noOfRounds = state.scores.noOfRounds-1;
      return state;
    },

    SAVE_HISTORY: (state, action) =>{
        state.history=action.value;
        return state;
    },
    RESTART_GAME: (state, action) => {
        return {
            scores:{    
                      won:0,
                      lost:0, 
                      tie:0, 
                      noOfRounds:0
                  },
          history: []
        }
    }
};

/* eslint-enable no-param-reassign */

export { Reducers as default };