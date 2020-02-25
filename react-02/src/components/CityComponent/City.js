import React from 'react';
import './City.css';
import { CityClass, Community } from './cityClass.js';
import { postData, getData, addData, clearData, deleteData, updateData } from './cityAPI.js'
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
    this.tempIndex = 0; 
    
   /* window.addEventListener('load', async(event) => {
      let serverData = []
      serverData = await getData();
      if(serverData.length !== 0) {
        this.lastkeyVar = this.comntyInstance.getServerHighestKey(serverData);
        this.comntyInstance.createCityFromServer(serverData)
      } 
    });*/
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
      this.comntyInstance.sortedCities().forEach((element, index) => {
        if (parseFloat(element.key) === parseFloat(keyz)) {
          this.keyIndex = index;
        }
      })
      return this.keyIndex;
    }
  }

 async componentDidMount() {   
      let serverData = []
      serverData = await getData();
      if(serverData.length !== 0) {
        this.lastkeyVar = this.comntyInstance.getServerHighestKey(serverData);
        this.comntyInstance.createCityFromServer(serverData);
        this.setState({ isPresent: false })
      }     
 }

  movedIn = async() => {
    if ((this.state.movedIn !== '')&&(parseFloat(this.state.movedIn) >= 0)) {
      let tempIndex = this.getCityIndex();
      this.comntyInstance.sortedCities()[tempIndex].movedIn(this.state.movedIn);
      updateData(this.comntyInstance.cityList[tempIndex]);            
      this.comntyInstance.cityTypeList[tempIndex] = 
      this.comntyInstance.cityList[tempIndex].howBig();
    }
  }

  movedInUpdate = () => {
    this.movedIn();
    this.deleteForm()
  }

  movedOut = async() => {
    if((this.state.movedOut !== '')&&(parseFloat(this.state.movedOut) >= 0)) {
      let tempIndex = this.getCityIndex();
      this.comntyInstance.sortedCities()[tempIndex].movedOut(this.state.movedOut);
      updateData(this.comntyInstance.cityList[tempIndex]);
      this.comntyInstance.cityTypeList[tempIndex] =
      this.comntyInstance.cityList[tempIndex].howBig();
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

  // for summary display info.
  createCityChecklist =() => {  
    return [
             this.createCityConditions(),
             this.latlongExist()
    ]
  }

  // getting the next unique key
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

  runCityDiv = async() => {
    if ((this.createCityConditions())) {
      if (!(this.latlongExist())) {
        const listData = this.comntyInstance.createCity(this.cityData());
        addData(listData);       
      }
    }
  }

  createCityDiv = async() => {
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

  deleteCityEntry = async() => {
    let tempIndex = this.getCityIndex(); 
   /*the next line fetches the key list before calling deleteCity()
    as deleteCity() will distort the indexing of the key list if called first*/  
    let keyList = this.comntyInstance.getKeys() 
    deleteData(keyList[tempIndex])              
    this.comntyInstance.deleteCity(tempIndex);
    this.deleteForm();
  }




  render() { 
    console.log(this.tempIndex);   
    console.log(this.comntyInstance.cityList)
    console.log(this.comntyInstance.sortedCities())   
    
    return (
      <section id="idMainSectionCity">
        <div id="idContDivCity">
          <h1 className="clsCityHeader">CITIES</h1>
          <div id='idCityLeftPanel' className='clsCityPanel'>
            <button type="button" id="idCreateCityBtn" className="clsCreateCityBtn" onClick={() => { this.createForm(1) }}>CREATE CITY</button>
            <button type="button"  className="clsCreateCityBtn" onClick={() => {this.comntyInstance.createCityDefault(this.comntyInstance.cityDefault);
             this.deleteForm() }}>LOAD DEFAULT CITIES</button>
            {this.state.isPresent === 1 && <CreateCityForm handleChange={this.handleChange} createCityDiv={this.createCityDiv} deleteForm={this.deleteForm} />}
            {this.state.isPresent === 2 && <MovedInForm handleChange={this.handleChange} movedInUpdate={this.movedInUpdate} deleteForm={this.deleteForm} />}
            {this.state.isPresent === 3 && <MovedOutForm handleChange={this.handleChange} movedOutUpdate={this.movedOutUpdate} deleteForm={this.deleteForm} />}
          </div>
          <div id='idCityRightPanel' className='clsCityPanel'>
            <CitySummary list ={this.comntyInstance.cityList} citySummary ={this.citySummary()}
             cityStates ={this.cityStates()} createCityChecklist ={this.createCityChecklist()} />
          </div>
          <div id='idCityDisplayArea' className='clsCityDisplayArea'>
            <CityDiv cityList={this.comntyInstance.sortedCities()} forms={this.createForm} cityTypeList ={this.comntyInstance.cityTypeList}
               getCityIndex={this.getCityIndex} deleteCityEntry={this.deleteCityEntry} />
          </div>

        </div>
      </section>

    )
  }

}

export default City;