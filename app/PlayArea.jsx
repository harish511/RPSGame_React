import { play } from "./rps";
import { Repo } from "./Repo";
import { dispatcher } from "./Redux.js";
import React from 'react';
let repo=new Repo();
export default class extends React.Component {
  constructor() {
    super();
     this.crrentPlay = this.crrentPlay.bind(this);
     this.p1Wins = this.p1Wins.bind(this);
     this.p2Wins = this.p2Wins.bind(this);
     this.tie = this.tie.bind(this);
  }

  computerSelection() {
    var options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 3)];
  }
  crrentPlay(selection){
      play(selection,this.computerSelection(),this,repo);
      dispatcher.saveHistory(repo.getAll());
  }

  componentDidMount() {
    window.addEventListener('keyup', (e) => {
      if (e.keyCode === 82) {
        this.crrentPlay('Rock');
      } else if (e.keyCode === 80) {
        this.crrentPlay('Paper');
      } else if (e.keyCode === 83) {
        this.crrentPlay('Scissors');
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', (e) => {
      if (e.keyCode === 82) {
        this.crrentPlay('Rock');
      } else if (e.keyCode === 80) {
        this.crrentPlay('Paper');
      } else if (e.keyCode === 83) {
        this.crrentPlay('Scissors');
      }
    });
  }

    tie(){
      dispatcher.tie();
    }

    restartGame(){
      repo.clear();
      dispatcher.restartGame();
    }

    p1Wins(){
      dispatcher.humanWins();
    }

    p2Wins(){
      dispatcher.humanLost();
    }

  render() {
    return (
      <div className="btn-group btn-group-justified">
      <div> <button className="btn btn-default" onClick={this.restartGame}> Restart Game</button></div>
    <div>
      <div className="human">
      <div> <label> HUMAN </label> </div>
      <div>
        <div className="btn-group" >
          <button className="btn btn-default" onClick={()=>{this.crrentPlay('Rock')}}>R</button>
        </div>
        <div className="btn-group">
          <button  className="btn btn-default"onClick={()=>{this.crrentPlay('Paper')}}>P</button>
        </div>
        <div className="btn-group">
          <button className="btn btn-default" onClick={()=>{this.crrentPlay('Scissors')}}>S</button>
        </div>
        </div>
          <div className="humanSelection">  </div>
        </div>

        <div className="computer">
        <div> <label> COMPUTER </label> </div>
      <div>
        <div className="btn-group" >
          <button className="btn btn-default">R</button>
        </div>
        <div className="btn-group">
          <button  className="btn btn-default">P</button>
        </div>
        <div className="btn-group">
          <button className="btn btn-default">S</button>
        </div>
        </div>
          <div className="computerSelection"> </div>
        </div>

        </div>
      </div>
    )
  }
}
