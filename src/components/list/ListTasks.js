import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import './styles.css';


export default function ListTasks(props) {

  return (
    <ul>
      <li>
        <hr />
        <div className="task-content">
          <FontAwesomeIcon className="check-button" icon={faCheckCircle} />
          <div className="text-content">{props.content} </div>
          <FontAwesomeIcon className="trash-button" icon={faTrashAlt} /> </div>
      </li>
    </ul>
  );
}
