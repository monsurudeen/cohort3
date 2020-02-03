import React from 'react'

function CreateCityForm (props) {


    return(
        <div id= 'idCityFormDiv' className = 'clsCityFormDiv'>
         <input name ='cityName' onChange ={props.handleChange} type ='text' id ='idCityNameInpt' className = 'clsCityFormInpt' required ={true} placeholder ='Enter a name for new city' />
         <br />
         <input name ='lat' onChange ={props.handleChange} type ='number' id ='idLatInpt' className = 'clsCityFormInpt' required ={true} placeholder ='Enter a value for latitude' /> 
         <br />
         <input name ='long' onChange ={props.handleChange} type ='number' id ='idLongInpt' className = 'clsCityFormInpt' required ={true} placeholder ='Enter a value for longitude' /> 
         <br />
         <input name ='popl' onChange ={props.handleChange} type ='number' id ='idPoplInpt' className = 'clsCityFormInpt' required ={true} placeholder ='Enter a value for the population' /> 
         <br />
         <input type ='button' id ='idAddCityBtn' className = 'clsAddCityBtn' value ='Add city' onClick = { props.createCityDiv} />
         <input type ='button' id ='idDeleteAcctForm' className = 'clsDeleteFormCity' value ='Cancel' onClick ={props.deleteForm} />    
</div>

    )
}


export default CreateCityForm;