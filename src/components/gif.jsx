import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    if (this.props.selectedGif) {
      this.props.selectedGif(this.props.id);
    }
  }

  render() {
    const { id } = this.props;
    if (!id) {
      return null;
    }
    const src = `https://media1.giphy.com/media/${this.props.id}/giphy.gif`;
    return(
      <img src={src} alt="" className="gif" onClick={this.handleClick}/>
    )
  }
}

export default Gif;



