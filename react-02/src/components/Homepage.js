import React from 'react';
import logo from '../logo.svg'

class Homepage extends React.Component {
    constructor(props){
     super(props);
    }


    render() {
        return(
              <div>
                <h2>hello From Homepage</h2>
                <img src={logo} className="App-logo" alt="logo" />
              </div>

        )
    }

}

export default Homepage;