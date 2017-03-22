import { play } from "./rps";
import { Repo } from "./Repo";
import { store, dispatcher } from "./Redux.js";
import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalBody,
  ModalFooter
} from 'react-modal-bootstrap';
let repo=new Repo();
export default class extends React.Component {
  constructor() {
    super();
     this.crrentPlay = this.crrentPlay.bind(this);
     this.p1Wins = this.p1Wins.bind(this);
     this.p2Wins = this.p2Wins.bind(this);
     this.tie = this.tie.bind(this);
     this.openModal = this.openModal.bind(this);
     this.hideModal = this.hideModal.bind(this);
     this.restartGame = this.restartGame.bind(this);
     this.pauseGame = this.pauseGame.bind(this);
     this.state = {
        isOpen: false,
        timeLimit:0
     }

     this.state = {
          status: store.getState().status,
        };
        store.subscribe((newState) => {
        this.setState({
            status:  newState.status,
          });
          
       });
  }

  computerSelection() {
    var options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 3)];
  }
  crrentPlay(selection){
    if(this.state.status==="STARTED"){
        play(selection,this.computerSelection(),this,repo);
      dispatcher.saveHistory(repo.getAll());
    }else{
      alert("Please start or Unpause the Game");
    }
      
  }

  openModal = () => {
    this.setState({
      isOpen: true
    });
  };
 
  hideModal = () => {
    this.setState({
      isOpen: false
    });

  };

  handleRoundsChange(e){
    dispatcher.roundsChange(5);
  }

  handleTimeChange(e){
    dispatcher.timeChange(event.target.value);
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
      this.openModal();
      repo.clear();
      dispatcher.restartGame();
       dispatcher.roundsChange(5); 
    }

    pauseGame(){
      dispatcher.pauseGame();
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
      <div> <button className="btn btn-default" onClick={this.restartGame}> Start </button>
       <button className="btn btn-default" onClick={this.pauseGame}> Pause </button>
          <button className="btn btn-default" onClick={this.restartGame}> Restart Game</button>
      </div>

      <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal}>
        <ModalHeader>
          <ModalClose onClick={this.hideModal}/>
          <ModalTitle>Modal title</ModalTitle>
        </ModalHeader>
        <ModalBody>
        <div>
           <label>No Of Rounds</label>
            <div>
             <input type="number" className="form-control" onChange={this.handleRoundsChange} id="rounds" placeholder="Enter No Of Rounds"/>
           </div>
            <label>Time</label>
            <div> 
              <input type="number" onChange={this.handleTimeChange}className="form-control" id="Time" placeholder="Time Limit for Each Round (in Sec)"/>
            </div>
        </div>
        </ModalBody>
        <ModalFooter>
          <button className='btn btn-default' onClick={this.hideModal}>
            Close
          </button>
          <button className='btn btn-primary' onClick={this.hideModal}>
            Save changes
          </button>
        </ModalFooter>
      </Modal>
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
