import { Link, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './App.css';

function App() {
  const navigate = useNavigate();

  const subscribe = () => {
    
    // some log, maybe call apis

    navigate('/channel');
  };
  
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <button onClick={subscribe}>Subscribe</button>

      <div className='content'>
        <Route path="/">Home Page</Route>
        <Route path="/about">About Page</Route>
      </div>
    </div>
  );
}

export default App;
