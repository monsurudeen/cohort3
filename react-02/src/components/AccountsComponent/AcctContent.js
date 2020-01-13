import React from 'react'


function CreateAcctContent(props) {
   // console.log(props.counter)
    if (props.account.accName === '' || props.account.bal === '') {
        return null;
    }else {    
        return (
            <tr>
                <td>{props.account.accName}</td>
                <td>{props.account.bal}</td>
                <td><button className="acctBtns deposit" onClick={ () => {props.depositForm(); props.keyName(props.account.accName)}}>deposit</button></td>
                <td><button className="acctBtns withdraw" onClick={ () => {props.withdrawForm(); props.keyName(props.account.accName)}}>withdraw</button></td>
                <td><button className="acctBtns delete" onClick={ () => {props.keyName(props.account.accName); props.deleteAcctEntry()}}>delete</button></td>
             </tr>
        )
    }
   
}

export default CreateAcctContent;