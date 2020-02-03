import React from 'react'


function MovedInForm(props) {


    return (
        <div id='idMovedInFormDiv' className='clsMovedInFormDiv'>
            <h5 id='idMovedInTitle' className='clsMovedTitle'> Moved In </h5>
            <input name='movedIn' id='idMovedInInpt' className='clsMovedInpt' type='number' required={true}
                   placeholder='How many people moved in ?' onChange ={props.handleChange} />
            <br /><br />
            <input id='idMovedInBtn' className='clsMovedInBtn' type='button' value='Moved In' onClick ={props.movedInUpdate} />
            <input id='idDeleteMovedInForm' className='clsDeleteFormCity' type='button' value='Cancel' onClick ={props.deleteForm} />

        </div>
    )
}


export default MovedInForm;