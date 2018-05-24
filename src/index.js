import React from 'react';
import { render } from 'react-dom';
import TodoItem from './TodoItem';

const App = () => (
  <div>
    <h1>1 Components and props - TodoItem</h1>
    <TodoItem label="Create a TODO item component" />
    <TodoItem label="Add complete interactivity" />
  </div>
);

render(<App />, document.getElementById('root'));
