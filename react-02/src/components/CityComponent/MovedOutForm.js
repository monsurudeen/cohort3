import React from 'react'


function MovedOutForm(props) {


    return( 
        <div id='idMovedOutFormDiv' className='clsMovedOutFormDiv'>
            <h5 id='idMovedTitle' className='clsMovedTitle'> Moved Out </h5>
            <input name='movedOut' id='idMovedOutInpt' className='clsMovedInpt' type='number' required={true}
                   placeholder='How many people moved out ?' onChange ={props.handleChange} />
            <br /><br />
            <input id='idMovedOutBtn' className='clsMovedOutBtn' type='button' value='Moved Out' onClick ={props.movedOutUpdate} />
            <input id='idDeleteMovedOutForm' className='clsDeleteFormCity' type='button' value='Cancel'  onClick ={props.deleteForm} />

        </div>      
    )
} 


export default MovedOutForm;