import React from 'react';

export default class extends React.Component {
  constructor() {
    super()
  }

  render() {
      var stats = this.props.scores;
      var message = '';
      var alertClass = ''; 
      var game = this.props.result;
      if(Object.keys(game).length !== 0 && game.constructor === Object){
        if (game.result === 1) {
          message = 'Tie! Play Again...';
        } else if (game.result === 2) {
          message = 'You Won: '+ game.player + ' beat ' + game.computer + '!';
          alertClass = 'won';
        } else {
          message = 'You Lost: '+ game.computer + ' beat ' + game.player + '!';
          alertClass = 'lost'
        }
    }
    
    // Add message of won lost and class of alert on the navbar in case there is a new game.
    
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid gameInfo">
          <div className="row">
            <div className="col-sm-6">
              <h4 className={alertClass}><span><strong>{message}</strong></span></h4>
            </div>
            <div className="col-sm-2 text-right">
              <h4>Won: <span><strong>{stats.won}</strong></span></h4>
            </div>
            <div className="col-sm-2 text-right">
              <h4>Lost: <span><strong>{stats.lost}</strong></span></h4>
            </div>
            <div className="col-sm-2 text-right">
              <h4>Tie: <span><strong>{stats.tie}</strong></span></h4>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
