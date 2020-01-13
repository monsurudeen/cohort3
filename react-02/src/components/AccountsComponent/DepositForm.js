import React from 'react'

function DepositForm(props) {

    return (
        <div id='idDepositFormDiv' className='clsDepositFormDiv'>
            <h5 id='idDepositTitle' className='clsTitle'>Deposit Form</h5>
            <input name ='acctDeposit' onChange = {props.handleChange} type='number' id='idDepositInpt' className='clsDepositInpt' placeholder='Enter a deposit amount' required={true} />
            <br /><br />
            <input type='button' id='idAddDeposit' className='clsAddDeposit' value='Add deposit' onClick = {() => {props.depositUpdate(); props.deleteForm()}} />
            <input type='button' id='idDeleteDpstForm' className='clsDeleteForm' value='Cancel' onClick = {props.deleteForm} />
        </div>
    )
}




export default DepositForm;
