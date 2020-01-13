import React from 'react'
import CreateAcctContent from './AcctContent.js'

function TableBody(props) {
  let count = 0;

  return (
    <tbody id="idTbody" className="tBody">
      {props.accountList.map((account) =>
        ( <CreateAcctContent key={account.accName} counter={account.accName} account={account} depositForm={props.createDepositForm} withdrawForm={props.createWithdrawForm} keyName = {props.keyName}  namesList ={props.namesList} deleteAcctEntry={props.deleteAcctEntry} />)

      )

      }
    </tbody>
  )
}

export default TableBody; 