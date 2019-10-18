import React, { useState } from 'react';
import './App.css';

import ListTasks from './components/list/ListTasks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faClipboardCheck, faClipboardList } from '@fortawesome/free-solid-svg-icons'

function App() {
  const now = new Date()
  const day = now.getDate()
  const month = now.getMonth()

  const [task, setTask] = useState('');
  const [tarefas, setTarefas] = useState([]);


  async function handleSubmit(e) {
    e.preventDefault()
    setTarefas([...tarefas, task])
    setTask('')
  }

  return (
    <div className="container">
      <div className="content">

        <div className="titulo-content">

          <span className="titulo">HOJE, {`${day} - ${month}`}</span>
          <span className="data-titulo"><FontAwesomeIcon className="list-checked" icon={faClipboardCheck} /></span>
          <span className="data-titulo"><FontAwesomeIcon className="list-unchecked" icon={faClipboardList} /></span>

        </div>

        <div className="input-content">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              autoComplete="off"
              className="input item-novo"
              value={task}
              onChange={event => setTask(event.target.value)}
              id="item-novo"
              placeholder="Adicionar item" />
            <button className="btn btn-ok"><FontAwesomeIcon icon={faPlus} /></button>
          </form>
        </div>
        { tarefas.length > 0 ?
          tarefas.map(t => <ListTasks key={t} content={t}/>) : 
          <div className="no-content">Nenhuma Tarefa registrada!</div>}

      </div>

    </div>
  );
}

export default App;
