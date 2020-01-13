import React from 'react';
import './navbar.css';
import largetown from '../images1/Largetown.jpg';
//import homepage from '../homepage.svg';
import accounts from '../images1/account.svg';
import city from '../images1/city.svg';
import ticTacToe from '../images1/ticTacToe.svg';
import linkedList from '../images1/linkedList.jpg';
import Game from './GameComponent/Game.js'
import City from './CityComponent/City.js'
import Accounts from './AccountsComponent/Accounts.js'
import LinkedList from './LinkedListComponent/LinkedList.js'
import Homepage from './Homepage.js'


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
      <div>
        <nav id="idNav">
         <a href="#" onClick={() => {
            this.setActive(0);
          }}>
            <img src={largetown} tabIndex="0" title="homepage" alt="Home-Page" className={
              "rotating icon" +
              ((this.state.activeLink === 0) ? " icon--active" : "")

            } />
          </a>

          <a href="#" onClick={() => {
            this.setActive(1);
          }}>
            <img src={ticTacToe} tabIndex="0" title="ticTacToe" alt="TicTacToe" className={
              "rotating icon" +
              ((this.state.activeLink === 1) ? " icon--active" : "")

            } />
          </a>

          <a href="#" onClick={() => {
            this.setActive(2);
          }}>
            <img src={accounts} tabIndex="0" title="accounts" alt="Accounts" className={
              "rotating icon" +
              ((this.state.activeLink === 2) ? " icon--active" : "")

            } />
          </a>

          <a href="#" onClick={() => {
            this.setActive(3);
          }}>
            <img src={city} tabIndex="0" title="city" alt="City" className={
              "rotating icon" +
              ((this.state.activeLink === 3) ? " icon--active" : "")

            } />
          </a>

          <a href="#" onClick={() => {
            this.setActive(4);
          }}>
            <img src={linkedList} tabIndex="0" title="linkedList" alt="linkedList" className={
              "rotating icon" +
              ((this.state.activeLink === 4) ? " icon--active" : "")

            } />
          </a>
        </nav>
        <div id ='idBodyDiv'>
          {this.state.activeLink === 0 && <Homepage />}
          {this.state.activeLink === 1 && <Game />}
          {this.state.activeLink === 2 && <Accounts />}
          {this.state.activeLink === 3 && <City />}
          {this.state.activeLink === 4 && <LinkedList />}

        </div>
      </div>


    );
  };
};

export default NavBar;

