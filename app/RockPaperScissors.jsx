import React from "react";
import ReactDOM from "react-dom";
import PlayArea from "./PlayArea.jsx"
import History from './History.jsx';
import PlayStatus from './PlayStatus.jsx';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { store, dispatcher } from "./Redux.js";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


export default class RockPaperScissors extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          scores: store.getState().scores,
          history: store.getState().history,
          result: {}
        };
        store.subscribe((newState) => {
        this.setState({
            scores:  newState.scores,
           history: newState.history,
          result: {} 
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
