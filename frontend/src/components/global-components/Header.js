import '../../style/App.css';

function Header() {
  return (
    <header className="App">
      <div className="title-container">
        <h1 className='title'>Mon super site</h1>
      </div>
      <div className='main'>
        <div className='sidebar'>
          <ul className="main-menu d-flex flex-row justify-content-evenly">
            <li>Présentation</li>
            <li>Expériences</li>
            <li>A propos de moi</li>
            <li>Commentaires</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
