import React from 'react'

function CreateAcctForm(props) {

    return (
        <div className='clsAcctFormDiv' id='idAcctFormDiv'>
            <input name ='acctName' onChange = {props.handleChange} type='text' required = {true} placeholder='Enter an account name' id='idAcctNameInpt' className='clsAcctInpt' />
            <br />
            <input name ='acctBal'  onChange = {props.handleChange} type='number' required = {true} placeholder='Enter initial balance amount' id='idBalInpt' className='clsAcctInpt' />
            <br /><br />
            <input type='button' value='Add account' id='idAddAcctInpt' className='clsAddAcctInpt' onClick = {props.createTableContent} /*props.displayTableRow(); props.createTableContent(); props.deleteForm()}}*/ />
            <input type='button' value='Cancel' id='idDeleteAcctForm' className='clsDeleteForm' onClick = {props.deleteForm} />
        </div>

    )
}

export default CreateAcctForm; 