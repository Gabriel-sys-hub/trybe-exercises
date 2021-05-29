import React from "react";
import Fieldset from "./components/Fieldset";
import Button from './components/Button'

class App extends React.Component {
  constructor() {
    super();
    this.verifyCity = this.verifyCity.bind(this);
    this.upperCase = this.upperCase.bind(this);
  }

  createDiv = ({target}) => {

  };
  removeSpecialCharacter({target}) {
    if( target.value ) {
      target.value = target.value.replace(/[^\w\s]/gi, '') // The caret (^) character is the negation of the set [...], gi say global and case-insensitive (the latter is a bit redundant but I wanted to mention it) and the safelist in this example is digits, word characters, underscores (\w) and whitespace (\s).
    }
  }

  upperCase({target}) {
    if( target.value ) {
      target.value = target.value.toUpperCase()
    }
  }

  verifyCity({target}) {
    if (target.value.match(/^[0-9]*$/)) {
      target.value = "";
    }
  }

  onMouseEnter = () => {
    alert("Preencha com cuidado a info");
  };

  render() {
    return (
      <form className="App">
        <Fieldset
          verifyCity={this.verifyCity}
          onMouseEnter={this.onMouseEnter}
          upperCase={this.upperCase}
          removeSpecialCharacter={this.removeSpecialCharacter}

        />
        <Button />
      </form>
    );
  }
}

export default App;
