import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectedGif) {
      this.props.selectedGif(this.props.id);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id;
  }

  render() {
    console.log("GIF RENDER" + this.props.id)
    const { id } = this.props
    if (!id) {
      return null;
    }

    const src = `https://media3.giphy.com/media/${this.props.id}/200.gif`;
    //const src = "https://media0.giphy.com/media/Mo9nI2yBKp3RC/200.webp?cid=ecf05e47926964281ebac189d1b3a42312aa6bfaa2b17c88&rid=200.webp";
    return(
      <img
        src={src}
        alt=""
        className="gif"
      />
    );
  }
}


export default Gif;

