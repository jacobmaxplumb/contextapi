import logo from './logo.svg';
import './App.css';
import UserForm from './components/user-form';
import UserList from './components/user-list';

function App() {
  return (
    <div className="App">
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;
