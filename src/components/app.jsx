import React, { Component } from 'react';
import SearchBar from './search_bar.jsx'
import Gif from './gif.jsx'
import GifList from './gif_list.jsx'


class App extends Component {
  render() {
    const gifs = [
      { id: "FxEwsOF1D79za/200.webp?cid=ecf05e47f2b5721c4bd869c0e1643807735f7fc1c1ba4b00&rid="},
      { id: "3oJtg1xAKnzVjcu6Ig/200w.webp?cid=ecf05e4767ea6650654bbfef2eb1168a607cd5ed9a4a01b7&rid=" }
    ];
    return(
      <div>
        <div className="left-scene">
          <SearchBar/>
          <div className="selected-gif">
            <Gif id="Mo9nI2yBKp3RC/200.webp?cid=ecf05e47926964281ebac189d1b3a42312aa6bfaa2b17c88&rid=" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs}/>
        </div>
      </div>
    )
  }
}

export default App;



