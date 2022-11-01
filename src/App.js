import proImg from './proImg.jpeg';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img 
          src={proImg} 
          className="App-logo" 
          alt="logo"
          id='pro_img'
          />

          {/* Slack username: Samow1 */}

        <p className='proName'>Samuel Owolabi</p>

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
          href="http://books.zuri.team"
          target="_blank"
          id='books'
          rel="noopener noreferrer"
        >
          Books
        </a>

        <a
          className="button"
          href="https://books.zuri.team/"
          target="_blank"
          id='book_python'
          rel="noopener noreferrer"
        >
          Python Books
        </a>

        
        <a
          className="button"
          href="https://background.zuri.team"
          target="_blank"
          id='book_python'
          rel="noopener noreferrer"
        >
          Background Check for Coders
        </a>

        <a
          className="button"
          href="https://books.zuri.team/design-rules"
          target="_blank"
          id='book_design'
          rel="noopener noreferrer"
        >
          Design Books
        </a>


      </header>
    </div>
  );
}

export default App;
