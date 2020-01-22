import React from 'react';
import './Accounts.css';
import CreateAcctForm from './CreateAcctForm.js';
import TableBody from './AccountsTableBody.js';
import { Account, AccountController } from './accountsClass.js'
import DepositForm from './DepositForm.js';
import WithdrawalForm from './WithdrawalForm.js';
import DisplayInfo from './DisplayInfo.js';




class Accounts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPresent: 0,
      acctName: '',
      acctBal: '',
      acctDeposit: '',
      acctWithdrawal: ''
    };

    this.acctController = new AccountController();
    this.account = new Account();    
    this.temp = false;
    this.acctIndex = '';

  }


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  getAcctIndex = (name) => {
    if (this.acctController.accountList.length === 0) {
      return
    } else {
      this.acctController.accountList.forEach((element, index) => {
        if (element.accName === name) {
          this.acctIndex = index;
        }
      })
      return this.acctIndex;
    }
  }

  depositUpdate = () => {
    if ((this.state.acctDeposit !== '') /*|| (!(this.state.acctDeposit > 0))*/) {
      this.acctController.accountList[this.getAcctIndex()].deposit(this.state.acctDeposit);
    }
  }

  withdrawalUpdate = () => {
    if ((this.state.acctWithdrawal !== '') /*|| (!(this.state.acctDeposit > 0))*/) {
      this.acctController.accountList[this.getAcctIndex()].withdraw(this.state.acctWithdrawal);
    }
  }
  // For display purpose..
  selectedAcct = () => {
    if ((this.acctController.accountList.length === 0) || ((this.state.acctDeposit === '')
     && (this.state.acctWithdrawal === ''))) {
      return
    } else {
      return this.acctController.accountListNames()[this.getAcctIndex()];
    }
  }


  createTableRow = () => {    
    this.runTableRow();
    this.deleteForm();
  }

  runTableRow = () => {
    if (this.state.acctName !== '' && this.state.acctBal !== '') {
      if (!(this.AcctNameExist())) {
        this.acctController.createAccount(this.state.acctName, this.state.acctBal);
      }
    }
  }

  createForm = (num) => {
    this.setState({ isPresent: num })
  }

  AcctNameExist = () => {
    this.temp = false;
    this.acctController.accountListNames().forEach((element) => {
      if (element === this.state.acctName) {
        this.temp = true;
      }
    })
    return this.temp;
  }


  highestAcct = () => {
    return this.acctController.highestAccount();
  }

  lowestAcct = () => {
    return this.acctController.lowestAccount();
  }

  totalAcct = () => {
    return this.acctController.totalAccounts();
  }

  acctSummary = () => {
    return [this.highestAcct(),
    this.lowestAcct(),
    this.totalAcct()
    ]
  }

  acctStates = () => {
    return [this.state.isPresent,
    this.state.acctName,
    this.state.acctBal,
    this.state.acctDeposit,
    this.state.acctWithdrawal
    ]
  }

  deleteForm = () => {
    this.setState({ acctName: '' })
    this.setState({ acctBal: '' })
    this.setState({ acctDeposit: '' })
    this.setState({ acctWithdrawal: '' })
    this.setState({ isPresent: false })

  }

  deleteAcctEntry = () => {
    this.acctController.removeAcctByIndex(this.getAcctIndex());
    this.deleteForm();
  }


  render() {
    //console.log(this.AcctNameExist())
    //console.log(this.acctController.accountList)
    return (
      <section id="mainSection">
        <div id="idContDiv">
          <h1 className="header">PEOPLE'S BANK</h1>
          <div id='idLeftPanel' className='panel'>
            <p>{this.acctController.welcome()}</p>
            <button type="button" id="idCreateAcctBtn" className="clsCreateAcctBtn" onClick={() => this.createForm(1)}>CREATE ACCOUNT</button>
            <p>{this.selectedAcct()}</p>
            {(this.state.isPresent === 1) && <CreateAcctForm deleteForm={this.deleteForm} handleChange={this.handleChange} createTableContent={this.createTableRow} />}
            {(this.state.isPresent === 2) && <DepositForm depositUpdate={this.depositUpdate} deleteForm={this.deleteForm} handleChange={this.handleChange} />}
            {(this.state.isPresent === 3) && <WithdrawalForm withdrawalUpdate={this.withdrawalUpdate} deleteForm={this.deleteForm} handleChange={this.handleChange} />}
          </div>
          <div id='idRightPanel' className='panel'>
            <div className="clsAccountsDiv clsRightPanelChild">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Account Name</th>
                    <th scope="col">Balance</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <TableBody forms={this.createForm} accountList={this.acctController.accountList} getAcctIndex={this.getAcctIndex} deleteAcctEntry={this.deleteAcctEntry} />
              </table>
            </div>
            <div id='idMessageArea' className="clsMessageArea  clsRightPanelChild">
              <div className = 'clsInMessageArea'>
                 <DisplayInfo list={this.acctController.accountList} acctStates={this.acctStates()} acctSummary={this.acctSummary()} />
              </div>
            </div>
          </div>
        </div>
      </section>



    )
  }

}

export default Accounts;