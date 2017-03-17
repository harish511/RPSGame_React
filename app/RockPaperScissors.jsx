import { play } from "./rps";
import { Repo } from "./Repo";
import React from "react";
import ReactDOM from "react-dom";
import PlayArea from "./PlayArea.jsx"
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

let repo=new Repo();
export default class RockPaperScissors extends React.Component {

    constructor(props){
        super(props);
        this.state=
        {
            history:[],
            resultMsg:"",
            p1:"",
            p2:"",
            msgColor:{color:"blue"}
        };
    }

    submitPlay(e) {
        e.preventDefault();

        play(this.state.p1,this.state.p2,this,repo)
        this.setState({msgColor:{color:'blue'},history:repo.getAll()})
    }

    invalid(invalidMessage){

        this.setState({resultMsg: invalidMessage,msgColor:{color:'red'}})


    }

    tie(){
        this.setState({resultMsg: 'Match Tie'})
    }

    p1Wins(){
        this.setState({resultMsg: "p1 Wins"})
    }

    p2Wins(){
        this.setState({resultMsg: "p2 Wins"})
    }

    p1Changed(e){
        debugger;
        this.setState({p1:e.target.value})
       // play(this.state.p1,this.state.p2,this)
    }

    p2Changed(e){
        this.setState({p2:e.target.value})
       // play(this.state.p1,this.state.p2,this)
    }

    render(){
        let his=this.state.history;

        if(!his){
            his=[];
        }
        return <div>
            <PlayArea/>
            <div>
                <h2>History</h2>

                <BootstrapTable data={ his } striped hover condensed>
                    <TableHeaderColumn dataField='p1Throw' isKey>Player1</TableHeaderColumn>
                    <TableHeaderColumn dataField='p2Throw'>Player2</TableHeaderColumn>
                    <TableHeaderColumn dataField='winner'>Winner</TableHeaderColumn>
                </BootstrapTable>

            </div>
        </div>
    }

}
