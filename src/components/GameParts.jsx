import React, { Component } from 'react';
import Board from './Board';


class GameParts extends React.Component {
  // debugger;
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default GameParts;
