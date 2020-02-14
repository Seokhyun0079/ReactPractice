import React, { /*useState,*/ useCallback, useRef, useReducer } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos(){
  const array =[];

  for(let i = 0; i <= 2500; i++){
    array.push({
      id: i,
      text : `やること　${i}`,
      checked: false,
    });
  }
  const copyArray = [...array];
  if(array=== copyArray) console.log('ふたり一緒');
  else console.log('全然ちゃうから勘違いしないで');
  if(array[0] === copyArray[0])console.log('でもこっちは一緒なのよね');
  else console.log('そっちも全然ちゃうから勘違いしないで');
  return array;
}

function todoReducer(todos, action){
  switch(action.type){
    case 'INSERT':
      return todos.concnat(action.todo);
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map(todo=>
        todo.id === action.id ? 
        { ...todo, checked: !todo.checked} : todo,);
        default:
          return todos;
  }
}

function App() {
  // const [todos, setTodos] = useState(createBulkTodos);

  const [todos, dispatch]= useReducer(
    todoReducer, undefined, createBulkTodos
  );

  const nextId = useRef(2501);

  // const onInsert = useCallback(text=>{
  //   const todo = {
  //     id : nextId.current,
  //     text,
  //     checked : false,
  //   };
  //   setTodos(todos=> todos.concnat(todo));
  // }, []);

  // const onRemove = useCallback(id => {
  //   setTodos(todos=> todos.filter(todo => todo.id !== id));
  // }, []);

  // const onToggle = useCallback(id =>{
  //   setTodos(todos => 
  //     todos.map(todo =>
  //       todo.id === id ? {...todo, checked: !todo.checked} : todo,
  //       ),
  //       );
  // }, []);

  const onInsert = useCallback(text=>{
    const todo = {
      id: nextId.current,
      text,
      checked: false
    };
    dispatch({ type : 'INSERT', todo});
    nextId.current += 1;
  }, []);

  const onRemove = useCallback(id => {
    dispatch({type : 'REMOVE', id});
  }, []);

  const onToggle = useCallback(id => {
    dispatch({type : 'TOGGLE', id});
  }, []);

  return <TodoTemplate>
    <TodoInsert onInsert={onInsert} />
    <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
  </TodoTemplate>
}

export default App;
