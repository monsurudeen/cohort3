import React from 'react'
import CityContent from './CityContent.js'


function CityDiv(props) {



    return (
        <div>
            {props.cityList.map((city, index) =>
                < CityContent key={city.keyVal} city={city} forms={props.forms} /*getCityType ={props.getCityType}*/  
                  deleteCityEntry={props.deleteCityEntry}  getCityIndex={props.getCityIndex} cityTypeList ={props.cityTypeList[index]}/>) }
        </div>
    )


}


export default CityDiv;