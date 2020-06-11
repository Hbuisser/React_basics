import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };

class Hello extends Component {
  constructor (props) {
    super(props);
    this.state = {
      clicked: false
    };
  }
  render () {
    // BUILD and RETURN html for the component
    return (
      <div>Hello {this.props.name}</div>
    )
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}
