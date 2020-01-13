import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar.js'


class App extends React.Component {
 /* constructor(props) {
    super(props);
    this.state = {
      activeLink: 0
    };
  };

  setActive = (link) => {
    this.setState({ activeLink: link });
  };*/

  render(){
  return (
    <div>      
      <header className="App-header">        
      <NavBar />
      </header>
     
       
      
    </div>
  );
 }
}

export default App;
