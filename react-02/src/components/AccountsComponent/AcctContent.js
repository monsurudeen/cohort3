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
                <td><button className="acctBtns deposit" onClick={()=> {props.forms(2); props.getAcctIndex(props.account.accName)}}>deposit</button></td>
                <td><button className="acctBtns withdraw" onClick={()=> {props.forms(3); props.getAcctIndex(props.account.accName)}}>withdraw</button></td>
                <td><button className="acctBtns delete" onClick={()=> {props.getAcctIndex(props.account.accName); props.deleteAcctEntry()}}>delete</button></td>
             </tr>
        )
    }
   
}

export default CreateAcctContent;