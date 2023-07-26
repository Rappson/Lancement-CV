import '../../style/App.css';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';

function Header() {
  return (
    <header className="App">
      <div className="title-container">
        <h1 className='title'>Mon super site</h1>
      </div>
      <Router>
        <Switch>
          <Route exact path='/' Component={Sidebar} />
        </Switch>
      </Router>
    </header>
  );
}

export default Header;
