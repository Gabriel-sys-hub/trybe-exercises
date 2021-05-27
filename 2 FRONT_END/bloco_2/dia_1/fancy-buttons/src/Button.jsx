import React from 'react';

class Button extends React.Component {
   constructor() {
     super(); // faz com que nossa função sobrescreva a original;
     this.state = {
       numeroDeCliques: 0
     }
     this.btn = this.btn.bind(this); // garante acesso ao this dentro da função BTN;
   }

   btn() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
   }
  render () {
    return (
        <button onClick={this.btn}>{this.state.numeroDeCliques}</button>
    );
  };
}

export default Button;
