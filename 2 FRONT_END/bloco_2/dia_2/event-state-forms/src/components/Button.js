import React from "react";

export default class ClearButton extends React.Component {
  render() {
    const { createDiv } = this;
    return <button onClick={createDiv}> </button>;
  }
}
