import proImg from './proImg.jpeg';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={proImg} className="App-logo" alt="logo" />

        <a
          className="button"
          href="https://training.zuri.team/"
          target="_blank"
          id='btn_zuri'
          rel="noopener noreferrer"
        >
          Twitter
        </a>

        <a
          className="button"
          href="https://training.zuri.team/"
          target="_blank"
          id='btn_zuri'
          rel="noopener noreferrer"
        >
          Zuri Team
        </a>
      
        <a
          className="button"
          href="https://training.zuri.team/"
          target="_blank"
          id='btn_zuri'
          rel="noopener noreferrer"
        >
          Zuri Team
        </a>
      </header>
    </div>
  );
}

export default App;
