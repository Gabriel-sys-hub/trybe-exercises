import React from "react";
import { Button } from 'react-bootstrap';

export default class ClearButton extends React.Component {
  render() {
    const { createDiv, clearInputs } = this;
    return ( 
    <>
      <Button onClick={createDiv}>Create Div</Button>
      <Button type='reset' onClick={clearInputs}>Reset</Button>
    </>
    )
  }
}
