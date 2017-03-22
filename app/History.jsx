import React from 'react';


export default class extends React.Component {
  constructor() {
    super()
  }

  render() {
    var history = this.props.history.map((game, i)=>{
      
      return (
        <tr key={i}>
          <td>{game.human}</td>
          <td>Round {i+1} </td>
          <td>{game.computer}</td>
          <td>{game.winner}</td>
        </tr>
      )
    }).reverse();

    return (
      <table className="table table-striped history">
        <tbody>
          {history}
        </tbody>
      </table>
    )
  }
}
