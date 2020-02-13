import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';


function App() {
  return <TodoTemplate>
    <TodoInsert>
      <TodoList/>
    </TodoInsert>
    </TodoTemplate>
}

export default App;
