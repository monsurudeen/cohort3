import React from 'react';
import './City.css';
import {CityClass, Community} from './cityReact.js';



class City extends React.Component {
    constructor(props){
     super(props);
     this.state = {
       isPresent : 0
     }

     this.comntyInstance = new Community();
    // this.cityInstance = new CityClass;
     this.keyVal = 0;
    }

     

   keyValue = () => {
     return this.keyVal++;
   }

   createForm = (num) => {
    this.setState({ isPresent: num })
  }



    render() {
      console.log(this.comntyInstance.createCity(['dele',1,34,54,346]))
        return(
          <section id="idMainSectionCity">
          <div id="idContDivCity">
              <h1 className="clsCityHeader">CITIES</h1>
              <div id='idCityLeftPanel' className='clsCityPanel'>
                  <button type="button" id="idCreateCityBtn" className="clsCreateCityBtn">CREATE CITY</button>
  
              </div>
              <div id='idCityRightPanel' className='clsCityPanel'>
  
              </div>
              <div id='idCityDisplayArea' className='clsCityDisplayArea'>
  
              </div>
  
          </div>
      </section>

        )
    }

}

export default City;