import '../../style/App.css';

function Header() {
  return (
    <header className="App">
      <div className="title-container">
        <h1 className='title'>Mon super site</h1>
      </div>
      <div className='container'>
        <div className='sidebar row'>
          <ul className="main-menu row">
            <li className='col-3'>Présentation</li>
            <li className='col-3'>Expériences</li>
            <li className='col-3'>A propos de moi</li>
            <li className='col-3'>Commentaires</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
