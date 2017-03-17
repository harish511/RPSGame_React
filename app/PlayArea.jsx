import React from 'react';

export default class extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="btn-group btn-group-justified">
        <div className="btn-group" >
          <button className="btn btn-default" >R</button>
        </div>
        <div className="btn-group">
          <button  className="btn btn-default" >P</button>
        </div>
        <div className="btn-group">
          <button className="btn btn-default" >S</button>
        </div>
      </div>
    )
  }
}
