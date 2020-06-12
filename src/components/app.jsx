import React, { Component } from 'react';
import SearchBar from './search_bar.jsx'
import Gif from './gif.jsx'


class App extends Component {
  render() {
    return(
      <div>
        <div className="left-scene">
          <SearchBar/>
          <div className="selected-gif">
            <Gif id="Mo9nI2yBKp3RC/200.webp?cid=ecf05e47926964281ebac189d1b3a42312aa6bfaa2b17c88&rid=" />
          </div>
        </div>
        <div className="right-scene"></div>
      </div>
    )
  }
}

export default App;



