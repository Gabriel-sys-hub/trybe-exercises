const arrayTasks = ['Wake up', 'Wash teth', 'Eat', 'Play a Game', 'Study', 'Lunch']

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 1500'},
    { nome: 'Bola de Futebol', preco: 'R$ 20'},
    { nome: 'Ferrari', preco: 'R$ 100'},
    { nome: 'Mercedez', preco: 'R$ 1500'},
    { nome: 'Notebook', preco: 'R$ 1500'},
  ],
  ativa: true,
}

const App = () => {
  const total = mario.compras.map((eachItem) => Number(eachItem.preco.replace('R$ ', ''))).reduce((acc, number) => acc + number);
  console.log(total)
    return (
      <>
        <p>Nome: {mario.cliente}</p>
        <p>Idade: {mario.idade}</p>
        <p>Situação: <span style={{ color: mario.ativa ? 'green' : 'red' }}>{mario.ativa ? 'Ativo' : 'Inativo'}</span></p>
        <p>Total: R$ {total}</p>
        <p>{total > 10000 ? 'Você está gastando de mais patrão!' : 'Muito bem, está com as dividas organizadas'}</p>
        <ul>{arrayTasks.map(tarefa => <li key={tarefa}>{tarefa}</li>) }</ul>
      </>
  );
}

export default App;
