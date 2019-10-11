import React from 'react';

import './styles.css';

export default function ListTasks() {
  return (
    <ul>
      <li>
        <hr />
        <p className="task-content"><button>+</button>   Content man <button>-</button> </p>
      </li>

      <li>
        <hr />
        <p className="task-content"><button>+</button>   Content man <button>-</button> </p>
      </li>
    </ul>
  );
}
