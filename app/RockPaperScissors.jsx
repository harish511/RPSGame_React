import React from "react";
import ReactDOM from "react-dom";
import PlayArea from "./PlayArea.jsx"
import History from './History.jsx';
import PlayStatus from './PlayStatus.jsx';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import app from './app.css';
import { store, dispatcher } from "./Redux.js";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


export default class RockPaperScissors extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          scores: store.getState().scores,
          history: store.getState().history,
          noOfRoundsRemaining: store.getState().scores.noOfRounds,
          result: store.getState().result,
          status: store.getState().status
        };
        store.subscribe((newState) => {
        this.setState({
            scores:  newState.scores,
           history: newState.history,
          result: newState.result
          });
          
       }); 
    }


    render(){
        
        return <div>
             <PlayStatus scores={this.state.scores} result={this.state.result}/>
             <PlayArea/>
             <History history={this.state.history} />
        </div>
    }

}
