import { Link, useHistory } from 'react-router-dom';
import './App.css';

function App() {
  const history = useHistory();

  const subscribe = () => {
    
    // some log, maybe call apis

    history.push('/channel');
  }
  
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <div className='content'>React Router</div>
    </div>
  );
}

export default App;
