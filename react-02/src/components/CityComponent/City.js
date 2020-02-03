import React from 'react';
import './City.css';
import { CityClass, Community } from './cityClass.js';
import CreateCityForm from './CreateCityForm.js';
import CityDiv from './CityDiv.js';
import MovedInForm from './MovedInForm.js'
import MovedOutForm from './MovedOutForm.js'
import CitySummary from './CitySummary.js'



class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPresent: 0,
      cityName: '',
      lat: '',
      long: '',
      popl: '',
      movedIn: '',
      movedOut: ''
    }

    this.comntyInstance = new Community();
    this.cityInstance = new CityClass();
    this.lastKeyVar = 0;
    this.keyIndex = '';
    this.temp = false;
    this.result = false;
  }


  createForm = (num) => {
    this.setState({ isPresent: num })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  getCityIndex = (keyz) => {
    if (this.comntyInstance.cityList.length === 0) {
      return
    } else {
      this.comntyInstance.cityList.forEach((element, index) => {
        if (parseFloat(element.keyVal) === parseFloat(keyz)) {
          this.keyIndex = index;
        }
      })
      return this.keyIndex;
    }
  }

  movedIn = () => {
    if ((this.state.movedIn !== '')&&(parseFloat(this.state.movedIn) >= 0)) {
      this.comntyInstance.cityList[this.getCityIndex()].movedIn(this.state.movedIn)
    }
  }

  movedInUpdate = () => {
    this.movedIn();
    this.deleteForm()
  }

  movedOut = () => {
    if((this.state.movedOut !== '')&&(parseFloat(this.state.movedOut) >= 0)) {
    this.comntyInstance.cityList[this.getCityIndex()].movedOut(this.state.movedOut)
    }
  }

  movedOutUpdate = () => {
    this.movedOut();
    this.deleteForm()
  }

  latlongExist = () => {
    this.temp = false;
    this.comntyInstance.cityList.forEach((element) => {
      if ((parseFloat(element.lat) === parseFloat(this.state.lat))
        && (parseFloat(element.long) === parseFloat(this.state.long))) {
        this.temp = true;
      }
    })
    return this.temp;
  }

  createCityConditions = () => {
    this.result = false;
    if ((this.state.cityName !== '') && (this.state.lat !== '')
      && (this.state.long !== '') && (this.state.popl !== '')) {
      if ((parseFloat(this.state.long) >= -180 && parseFloat(this.state.long) <= 180)
        && (parseFloat(this.state.lat) >= -90 && parseFloat(this.state.lat) <= 90)) {

        this.result = true;
      }
    }
    return this.result;
  }

  createCityChecklist =() => {
    return [
             this.createCityConditions(),
             this.latlongExist()
    ]
  }

  keyValue = () => {
    if(this.comntyInstance.cityList.length !==0){
      this.lastkeyVar =
     parseFloat(this.comntyInstance.getHighestKey()); 
    }else {
      this.lastkeyVar = 0;
    }    
    return parseFloat(this.lastkeyVar+=1);    
  }

  cityData = () => {
    return ([
      this.state.cityName,
      this.keyValue(),
      this.state.lat,
      this.state.long,
      this.state.popl
    ])
  }

  runCityDiv = () => {
    if ((this.createCityConditions())) {
      if (!(this.latlongExist())) {
        this.comntyInstance.createCity(this.cityData());
      }
    }
  }

  createCityDiv = () => {
    this.runCityDiv();
    this.deleteForm();
  }

  citySummary = () => {
    return [
      this.comntyInstance.getMostNorthern(),
      this.comntyInstance.getMostSouthern(),
      this.comntyInstance.getPopulation()
    ]
  }

  cityStates = () => {
    return [
    this.state.isPresent,
    this.state.cityName,
    this.state.lat,
    this.state.long,
    this.state.popl,
    this.state.movedIn,
    this.state.movedOut    
    ]
  }

  deleteForm = () => {
    this.setState({ cityName: '' })
    this.setState({ lat: '' })
    this.setState({ long: '' })
    this.setState({ popl: '' })
    this.setState({ movedIn: '' })
    this.setState({ movedOut: '' })
    this.setState({ isPresent: false })
  }

  deleteCityEntry = () => {
    this.comntyInstance.deleteCity(this.getCityIndex());
    this.deleteForm();
  }




  render() {
    return (
      <section id="idMainSectionCity">
        <div id="idContDivCity">
          <h1 className="clsCityHeader">CITIES</h1>
          <div id='idCityLeftPanel' className='clsCityPanel'>
            <button type="button" id="idCreateCityBtn" className="clsCreateCityBtn" onClick={() => { this.createForm(1) }}>CREATE CITY</button>
            <button type="button"  className="clsCreateCityBtn" onClick={() => {this.comntyInstance.createCityDefault(this.comntyInstance.cityDefault);
             this.deleteForm() }}>LOAD DEFAULT CITIES</button>
            {this.state.isPresent === 1 && <CreateCityForm handleChange={this.handleChange} deleteForm={this.deleteForm} createCityDiv={this.createCityDiv} />}
            {this.state.isPresent === 2 && <MovedInForm handleChange={this.handleChange} movedInUpdate={this.movedInUpdate} deleteForm={this.deleteForm} />}
            {this.state.isPresent == 3 && <MovedOutForm handleChange={this.handleChange} movedOutUpdate={this.movedOutUpdate} deleteForm={this.deleteForm} />}
          </div>
          <div id='idCityRightPanel' className='clsCityPanel'>
            <CitySummary list ={this.comntyInstance.cityList} citySummary ={this.citySummary()}
             cityStates ={this.cityStates()} createCityChecklist ={this.createCityChecklist()} />
          </div>
          <div id='idCityDisplayArea' className='clsCityDisplayArea'>
            <CityDiv cityList={this.comntyInstance.cityList} forms={this.createForm} cityTypeList ={this.comntyInstance.cityTypeList}
              deleteCityEntry={this.deleteCityEntry} getCityIndex={this.getCityIndex} />
          </div>

        </div>
      </section>

    )
  }

}

export default City;