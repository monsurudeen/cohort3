import React from 'react';
import './navbar.css';
import largetown from '../images1/Largetown.jpg';
//import homepage from '../homepage.svg';
import accounts from '../images1/account.svg';
import city from '../images1/city.svg';
import ticTacToe from '../images1/ticTacToe.svg';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLink: 0
    };
  };
  setActive = (link) => {
    this.setState({ activeLink: link });
  };
  render() {
    return (
      <nav id="idNav">
        {/* react 2.0 svg */}
        <a href="#homePage" onClick={() => {
          this.setActive(0);
        }}>
          <img src={largetown} tabIndex="0" title= "homepage" alt="Home-Page" className={
            "rotating icon" +
            ((this.state.activeLink === 0) ? " icon--active" : "")

          } />
        </a>

        <a href="#ticTacToe" onClick={() => {
          this.setActive(1);
        }}>
          <img src={ticTacToe} tabIndex="0" title= "ticTacToe" alt="TicTacToe" className={
            "rotating icon" +
            ((this.state.activeLink === 1) ? " icon--active" : "")

          } />
        </a>

        <a href="#accounts" onClick={() => {
          this.setActive(2);
        }}>
          <img src={accounts} tabIndex="0" title= "accounts" alt="Accounts" className={
            "rotating icon" +
            ((this.state.activeLink === 2) ? " icon--active" : "")

          } />
        </a>

        <a href="#city" onClick={() => {
          this.setActive(3);
        }}>
          <img src={ city} tabIndex="0" title= "city" alt="City" className={
            "rotating icon" +
            ((this.state.activeLink === 3) ? " icon--active" : "")

          } />
        </a>
      </nav>
    );
  };
};

export default NavBar;

