import React from "react";
import Fieldset from "./components/Fieldset";
import ClearButton from './components/ClearButton'
import { Form } from 'react-bootstrap';
import './styles/App.css'

class App extends React.Component {
  constructor() {
    super();
    this.verifyCity = this.verifyCity.bind(this);
    this.upperCase = this.upperCase.bind(this);
    this.saveData = this.saveData.bind(this);

    this.state = {
      Nome: '',
      Email: '',
      CPF: '',
      Endereco: '',
      Cidade: '',
      Estado: '',
    }
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

  saveData({ target }) {
    const { name } = target
    this.setState({
      [name]: target.value,
    });
  }

  verifyCity({target}) {
    if (target.value.match(/^[0-9]*$/)) {
      target.value = target.value = '';
    }
  }

  onMouseEnter = () => {
    alert("Preencha com cuidado a info");
  };

  render() {
    return (
      <Form className="App">
        <Fieldset
          verifyCity={this.verifyCity}
          onMouseEnter={this.onMouseEnter}
          upperCase={this.upperCase}
          removeSpecialCharacter={this.removeSpecialCharacter}
          saveData={this.saveData}
        />
        <ClearButton />
      </Form>
    );
  }
}

export default App;
