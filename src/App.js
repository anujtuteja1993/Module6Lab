import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greetings';
import GreeetingsButton from './components/GreetingsButton'
import Emoji from './components/Emoji';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Greeting name="John"/>
        <GreeetingsButton />
        <Emoji />
        <Calculator />
      </header>
    </div>
  );
}

export default App;
