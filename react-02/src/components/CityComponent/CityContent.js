import React from 'react'


function CityContent(props) {


    return (<div className='clsCityDiv'>
        <h3 className='name'>City Name: {props.city.name}</h3>
        <p className='key'>Key: {props.city.key}</p>
        <p className='lat'>Latitude: {props.city.lat}</p>
        <p className='long'>Longitude: {props.city.long}</p>
        <p className='popl'>Population: {props.city.popl}</p>
        <p>Type: {props.cityTypeList}</p>
        <p><button className = "cityBtns moveIn" onClick ={()=> {props.forms(2); props.getCityIndex(props.city.key)}}>Moved In</button></p>
        <p><button className = "cityBtns moveOut" onClick ={()=> {props.forms(3); props.getCityIndex(props.city.key) }}>Moved Out</button></p>
        <p><button className = "cityBtns deleteCity" onClick ={()=> {props.getCityIndex(props.city.key); props.deleteCityEntry()}}>Delete</button></p>
    </div>)
}

export default CityContent;