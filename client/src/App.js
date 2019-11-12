import React, { Component } from 'react';
import PlayerTable from './components/PlayerTable.js';
import _ from 'lodash';
import './App.css';

class App extends Component {
  state = {
    playersList: [],
    direction: null,
    column: null,
  }

  getPlayers = () => {
    fetch('http://localhost:5000/api/players')
    .then(res => res.json())
    .then(res => {
      this.setState({
        playersList: res
      })
    })
    .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getPlayers();
  }

  handleSort = (clickedColumn) => () => {
    const { column, playersList, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        playersList: _.sortBy(playersList, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      playersList: playersList.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }

  

  render() {
    return (
      <div className="App">
        <PlayerTable
          playerList={this.state.playersList}
          handleSort={this.handleSort} 
          column={this.state.column} 
          direction={this.state.direction}
        />
      </div>
    );
  }
}

export default App;
