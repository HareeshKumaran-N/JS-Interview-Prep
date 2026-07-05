import { useState } from 'react';
import './styles.css';

type Filter = 'all' | 'active' | 'completed';

export default function TodoApp() {
  const [filter, setFilter] = useState<Filter>('all');

  // TODO: todos state (array of { id, text, completed }), persisted to localStorage
  // TODO: addTodo, toggleTodo, deleteTodo handlers
  // TODO: derive the visible list from todos + filter

  return (
    <div className="todo">
      <h2 className="todo__title">Todos</h2>
      <form className="todo__form">
        <input className="todo__input" type="text" placeholder="What needs to be done?" />
        <button className="todo__add" type="submit">
          Add
        </button>
      </form>

      <ul className="todo__list">{/* TODO: render the filtered todo list */}</ul>

      <div className="todo__filters">
        {(['all', 'active', 'completed'] as Filter[]).map((f) => (
          <button
            key={f}
            type="button"
            className="todo__filter"
            onClick={() => setFilter(f)}
            data-active={filter === f}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  );
}
