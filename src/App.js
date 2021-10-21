import logo from './logo.svg';
import './App.css';
import UserForm from './components/user-form';
import UserList from './components/user-list';
import { createContext, useReducer, useState } from 'react';
import TodoList from './components/todo-list';

export const UserContext = createContext();
export const TodoContext = createContext();

const initialState = {
  todos: [],
  todo: {title: ''}
}

const todoReducer = (state, action) => {
  switch(action.type) {
    case 'add todo':
      return {...state, todo: {title: ''}, todos: [...state.todos, state.todo]}
    case 'update todo':
      return {...state, todo: {title: action.title}}
    default:
      return state;
  }
}

function App() {
  const [user, setUser] = useState({ firstName: '', lastName: '' });
  const [users, setUsers] = useState([{ firstName: 'Jacob', lastName: 'Plumb' }]);
  const [todoState, dispatch] = useReducer(todoReducer, initialState);

  const updateTodoTitle = (title) => {
    dispatch({type: 'update todo', title});
  }

  const addTodo = () => {
    dispatch({type: 'add todo'});
  }

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser, users, setUsers }}>
        <UserForm />
        <UserList />
      </UserContext.Provider>
      <TodoContext.Provider value={{todoState, updateTodoTitle}}>
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
