import React from 'react'
import CityContent from './CityContent.js'


function CityDiv(props) {


  let count = 0;
    return (
        <div>
            {props.cityList.map((city, index) =>{
              return < CityContent key={count+=1} city={city} forms={props.forms}   
            deleteCityEntry={props.deleteCityEntry}  getCityIndex={props.getCityIndex} cityTypeList ={props.cityTypeList[index]}/>}) }
        </div>
    )


}


export default CityDiv;