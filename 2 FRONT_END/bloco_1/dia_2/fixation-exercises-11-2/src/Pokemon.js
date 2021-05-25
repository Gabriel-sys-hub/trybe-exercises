import pokemons from './data'

const PokemonCard = () => {

  return (
    <section className='container'>
      {pokemons.map((result) => (
        <div className='secondContainer'>
          <div className='pokeCardContent'>
            <span>ID: #{result.id}</span>
            <span className='description'>NOME </span>
            <span>{result.name}</span>
            <span className='description'>TIPO: {result.type}</span>
            <span className='description'>MEDIA DE PESO: {result.averageWeight.value + result.averageWeight.measurementUnit}</span>
          </div>
          <div className='pokeCardImg'>
            <img src={result.image} alt='hello'></img>
          </div>
        </div>
      ))}
      
    </section>
  )
}


export default PokemonCard;