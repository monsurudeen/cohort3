import React from 'react'


function WithdrawalForm(props) {

    return (
        <div id='idWithdrwFormDiv' className='clsWithdrwFormDiv'>
            <h5 id='idWithdrawTitle' className='clsTitle'>Withdrawal Form</h5>
            <input name ='acctWithdrawal' onChange = {props.handleChange} type='number' id='idWithdrwInpt' className='clsWithdrwInpt' placeholder='Enter amount to withdraw' required={true} />
            <br /><br />
            <input type='button' id='idWithdraw' className='clsWithdraw' value='Withdraw' onClick = {() => {props.withdrawalUpdate(); props.deleteForm()}} />
            <input type='button' id='idDeleteWithdrwForm' className='clsDeleteForm' value='Cancel' onClick = {props.deleteForm} />
        </div>
    );
}


export default WithdrawalForm;


    

   

    

   