import React, { Component } from 'react';
import Gif from "../components/gif.jsx";
import GifList from "../components/gif_list.jsx";
import SearchBar from "../components/search_bar.jsx";
import giphy from 'giphy-api';

const GIPHY_API_KEY = 'IOBX82HC8i1I3aLgSwL1MEBFvwXcBdEr';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: 'TfelnmQ8VU3K',
    };
    this.search("Barack");
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true }).search(
    {
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      //console.log(res);
      this.setState({
        gifs: res.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return(
      <div>
        <div className="left-scene">
          <SearchBar searchFct={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGifFct={this.selectGif}/>
        </div>
      </div>
    )
  }
}

export default App;
