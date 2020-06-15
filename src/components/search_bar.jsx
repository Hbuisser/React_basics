import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" }
  }

  handleUpdate = (event) => {
    //console.log(event.target.value);
    this.setState({ term: event.target.value });
    this.props.searchFct(event.target.value);
  }

  componentWillMount() {
    console.log("SearchBar WILL MOUNT");
  }

  componentDidMount() {
    console.log("SearchBar DID MOUNT");
  }

  render() {
    console.log("SearchBar RENDER")
    return(
      <input
        value={this.state.term}
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}


export default SearchBar;
