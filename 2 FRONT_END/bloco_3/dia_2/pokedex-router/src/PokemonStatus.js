import React from 'react'

export default class PokemonStatus extends React.Component {

  render() {
    const { id } = this.props.match.params;
    const { pokemonProps } = this.props;
    console.log(pokemonProps)
    return (
      <div className="pokedex">
        <h1>{ id }</h1>
      </div>
    );
  }
}
