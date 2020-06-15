import React, { Component } from 'react';
import Gif from './gif.jsx'


// class GifList extends Component {
//   renderList = () => {
//     return this.props.gifs.map(gif => {
//       return <Gif id={gif.id} key={gif.id} />
//     })
//   }

//   render() {
//     return (
//       <div className="gif-list">
//         {this.renderList()}
//       </div>
//     )
//   }
// }

const GifList = ({gifs, selectedGif}) => {
  return (
    <div className="gif-list">
      {
        gifs.map((gif) => {
          return <Gif key={gif.id} id={gif.id} selectedGif={selectedGif}/>;
        })
      }
    </div>
  )
}


export default GifList;

