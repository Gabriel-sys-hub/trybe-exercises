import React from 'react';

class Button extends React.Component {
   constructor() {
     super();
     this.btn = this.btn.bind(this);
   }

   btn() {
     console.log('hello')
   }
  render () {
    return (
      <section>
        <button onClick={this.btn}>BOTÃO</button>
      </section>
    );
  };
}

export default Button;
