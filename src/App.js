import React from 'react';
import './App.css';
import ListTasks from './components/list/ListTasks';

function App() {
  const now = new Date()
  const dateString = `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`
  const day = now.getDate()
  const month = now.getMonth()


  return (
    <div className="container">
      <div className="content">
        <div className="titulo-content">
          <span className="titulo">HOJE</span>
          <span className="data-titulo">{`${day} - ${month}`}</span>
        </div>
        <div>
          <input className="input item-novo" type="text" id="item-novo" placeholder="Add item novo" />
          <button className="btn btn-ok">ADD</button>
        </div>
        <ListTasks/>
      </div>

    </div>
  );
}

export default App;
