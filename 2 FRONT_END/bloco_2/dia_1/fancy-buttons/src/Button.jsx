import React from 'react';

const btn = () => console.log('Clicou no botão!')


class Button extends React.Component {
  render () {
    return (
      <section>
        <button onClick={btn}>BOTÃO</button>
      </section>
    );
  };
}

export default Button;
