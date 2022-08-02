import { useState } from 'react';
import FormTodo from './components/FormTodo';
import Todos from './components/Todos';
 
function App() {
  const [todos, setTodos] = useState<Todo[]>([]); 

  const addTodoHandler = (todoText:string) => {
 
    setTodos([...todos,{id:Math.random().toString(),text:todoText}]);

  };

  const onRemoveHandler = (todoId:string) => {
    setTodos((prevTodos) =>{
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  //const onRemoveHandler = (todoId:string) => {
  //  setTodos(todos.filter((i) => i.text !== todoId));
  //};

  return (
    <div>
      <FormTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onRemoveTodo={onRemoveHandler} />
    </div>
  );
}

export default App;
