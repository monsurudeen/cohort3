import React from 'react'
import CreateAcctContent from './AcctContent.js'

function TableBody(props) {
  let count = 0;

  return (
    <tbody id="idTbody" className="tBody">
      {props.accountList.map((account) =>
        ( <CreateAcctContent key={account.accName} account={account} forms={props.forms} getAcctIndex= {props.getAcctIndex} deleteAcctEntry={props.deleteAcctEntry} />)

      )

      }
    </tbody>
  )
}

export default TableBody; 