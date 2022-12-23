import { Link } from 'react-router-dom';
import {Route, Switch} from 'react-router';
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
        <Link to="/contacts">Contacts</Link>
      </nav>

      <button onClick={subscribe}>Subscribe</button>

      <div className='content'>
        <Switch>
        <Route exact path="/">
          Home Page
          </Route>
        <Route path="/about">About Page</Route>
        <Route path='*'>404 Not Found</Route>
        </Switch>
        
      </div>
    </div>
  );
}

export default App;
