import React from 'react';
import Pokedex from './pokedex'

class App extends React.Component {
  render() {
    return (
      <Pokedex />
    )
  }
}

// class Image extends React.Component {
//   render() {
//     return <img src={this.props.source} alt={this.props.alternativeText} />;
//   }
// }

// export default Image

export default App;
