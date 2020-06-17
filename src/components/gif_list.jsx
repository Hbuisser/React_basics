import React, { Component } from 'react';
import Gif from "../components/gif.jsx";


class GifList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="gif-list">
        {
          this.props.gifs.map((gif) => {
            return <Gif id={gif.id} key={gif.id} selectedGif={this.props.selectGifFct}/>
          })
        }
      </div>
    )
  }
}

// const GifList = (props) => {
//   return (
//     <div className="gif_list">
//       {
//         props.gifs.map((gif) => {
//           return <Gif id={gif.id} key={gif.id} selectedGif={props.selectGifFct}/>
//         })
//       }
//     </div>
//   )
// }

export default GifList;
