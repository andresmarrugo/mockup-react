import React from 'react'
import logo from './logo.svg'
import NavBar from './components/navBar'
import Widget from './components/widget'
import SearchBar from './components/searchBar'
import Logo from './components/logo'
import SendTo from './components/sendTo'
import './App.css'

function App() {
  return (
    <div className="mainContainer">
      <div className="asideArea">
        <Widget />
      </div>
      <div className="header">
        <div className="logoArea">
          <Logo/>
        </div>
        <div className="navBarArea">
          <NavBar />
        </div>
        <div className="searchBarArea">
          <SearchBar />
        </div>
      </div>

      <div className="contentArea">
        <SendTo/>
        <SendTo/>
        <SendTo/>
      </div>
    </div>   
  );
}

export default App
