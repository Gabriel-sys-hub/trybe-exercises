const tarefas = ['Acordar', 'Escovar', 'Tomar Café', 'Ir trabalhar', 'Estudar', 'Dormir'];

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const App = () => {
    return (
      <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
   );
}

export default App;
