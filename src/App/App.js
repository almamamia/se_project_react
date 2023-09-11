import logo from '../logo.svg';
import './App.css';

function App() {
  return (
    <div >
      <header className="header">
      <div className="header__logo">
        <div><img src="..\images\Logo.svg" alt="logo"/></div>
        <div>Date</div>
      </div>
      <div className="header__avatar-logo">
        <button type="text" className="header__add-button">+ Add clothes</button>
        <div>Name</div>
        <div>
          <img src="..\images\avatar.svg" alt="Avatar logo"/></div>
      </div>
      
      </header>
    </div>
  );
}

export default App;
