<<<<<<< HEAD
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
=======
import "./App.css"
import Pages from './components/pages/Pages';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
function App() {
  return (
    <Pages />
>>>>>>> 0e901eb9e2d633f1bc4871ff9a193f55ed398c81
  );
}

export default App;
