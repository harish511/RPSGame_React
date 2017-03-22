import React from 'react';

export default class extends React.Component {
  constructor() {
    super()
  }

  render() {
      var stats = this.props.scores;
      var message = '';
      var resultClass = ''; 
      var game = this.props.result;
      if(Object.keys(game).length !== 0 && game.constructor === Object){
        if (game.tie) {
          message = 'Tie! Play Again...';
        } else if (game.won) {
          message = 'Congrats!! You have won the game against computer!';
          resultClass = 'won';
        } else if (game.lost){
          message = 'Sorry Please try again! You have lost against me!';
          resultClass = 'lost'
        }
    }
    
    // Add message of won lost and class of alert on the navbar in case there is a new game.
    
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <h4 className={resultClass}><span><strong>{message}</strong></span></h4>
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
