import React, { useState } from "react";
import "./App.css";
import getDatePresenterFormated from "./utils/DateUtils";

import ListTasks from "./components/list/ListTasks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faClipboardCheck,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  
  const [task, setTask] = useState("");
  const [listTasks, setListTasks] = useState([]);

  const dateFormated = getDatePresenterFormated();

  async function handleSubmit(e) {
    e.preventDefault();
    if (task.length > 0) {
      setListTasks([...listTasks, task]);
      setTask("");
    }
    console.log("Inserir tarefa");
  }

  return (
    <div className="container">
      <div className="content">
        <div className="titulo-content">
          <span className="titulo">
            HOJE,{" "}
            {dateFormated}
          </span>
          <span className="data-titulo">
            <FontAwesomeIcon className="list-checked" icon={faClipboardCheck} />
          </span>
          <span className="data-titulo">
            <FontAwesomeIcon
              className="list-unchecked"
              icon={faClipboardList}
            />
          </span>
        </div>

        <div className="input-content">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              autoComplete="off"
              className="input item-novo"
              value={task}
              onChange={(event) => setTask(event.target.value)}
              id="item-novo"
              placeholder="Adicionar Tarefa"
            />
            <button className="btn btn-ok">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </form>
        </div>
        {listTasks.length > 0 ? (
          listTasks.map((t) => <ListTasks key={t} content={t} />)
        ) : (
          <div className="no-content">Nenhuma Tarefa registrada!</div>
        )}
      </div>
    </div>
  );
}

export default App;
