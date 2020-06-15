import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';
import App from './components/app.jsx';

// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello, {name}
//     </div>
//   );
// };

// WITH STATE YOU CAN NOT USE THAT FCT ANYMORE
// const Hello = (props) => {
//   return <div>Hello, Romain</div>;
// }

class Hello extends Component {
  constructor (props) {
    super(props);
    this.state = {
      clicked: false,
      counter: 0
    };
  }
  handleClick = () => {
    //change the state
    //console.log('clicked');
    // this.state.clicked = !this.state.clicked;
    this.setState({
      clicked: !this.state.clicked,
      counter: this.state.counter + 1
    })
  }
  // A CLASS ALWAYS HAVE A RENDER METHOD TO BUILD THE COMPONENT
  render() {
    // BUILD and RETURN html for the component
    return (
      <div
        className={this.state.clicked ? 'clicked' : null}
        onClick={this.handleClick}>
          Hello {this.props.name} {this.state.counter}
      </div>
    )
  }
}

const root = document.getElementById('root');
if (root) {
  //ReactDOM.render(<Hello name="World" />, root);
  ReactDOM.render(
    <App/>, root
  );
}
