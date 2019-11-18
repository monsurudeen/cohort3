
class Accounts {
  constructor(accName, bal) {
    this.accName = accName;
    this.bal = bal;
  }

  deposit(depAmt) {

    this.bal = parseFloat(this.bal) + parseFloat(depAmt);
    return parseFloat(this.bal);
  }

  withdraw(withdrawAmt) {

    //if (!(withdrawAmt <= 0 || withdrawAmt >= this.bal)) 
    this.bal -= withdrawAmt;
    return this.bal;
  }

  balance() {
    return this.bal;
  }
}


class AccountController {

  constructor() {
    this.accountList = [];
  }

  // Creating accounts.......
  createAccount(accName, bal) {
    // console.log("accName: ", accName, "bal: ", bal);
    this.account = new Accounts(accName, bal);
    // let account.accName = accName;
    // let account.bal = bal;
    this.accountList.push(this.account);
    return this.account;
  }

  // Returning account names from accountsList.......
  accountListLoop() {
    let acctNames = this.accountList.map((acct) => {
      return acct.accName;
    })
    return acctNames;
  }

  // Returns an updated accounts List ....
  getAcctList() {
    return this.accountList;
  }

  // Create accounts form.....
  createAcctForm() {
    const acctFormDiv = document.createElement('div');
    acctFormDiv.setAttribute('id', 'idAcctFormDiv');
    acctFormDiv.className = 'clsAcctFormDiv';

    const acctNameInpt = document.createElement('input');
    acctNameInpt.setAttribute('id', 'idAcctNameInpt');
    acctNameInpt.setAttribute('placeholder', 'Enter an account name');
    acctNameInpt.setAttribute('required', 'true');
    acctNameInpt.setAttribute('type', 'text');
    acctNameInpt.className = 'clsAcctInpt';
    acctFormDiv.appendChild(acctNameInpt);

    const lbreak1 = document.createElement('br');
    const lbreak2 = document.createElement('br');
    acctFormDiv.appendChild(lbreak1);
    acctFormDiv.appendChild(lbreak2);

    const balInpt = document.createElement('input');
    balInpt.setAttribute('id', 'idBalInpt');
    balInpt.setAttribute('placeholder', 'Enter initial balance amount');
    balInpt.setAttribute('required', 'true');
    balInpt.setAttribute('type', 'number');
    balInpt.className = 'clsAcctInpt';
    acctFormDiv.appendChild(balInpt);

    const lbreak3 = document.createElement('br');
    const lbreak4 = document.createElement('br');
    acctFormDiv.appendChild(lbreak3);
    acctFormDiv.appendChild(lbreak4);

    const addAcctInpt = document.createElement('input');
    addAcctInpt.setAttribute('id', 'idAddAcctInpt');
    addAcctInpt.setAttribute('value', 'Add account');
    addAcctInpt.setAttribute('type', 'submit');
    addAcctInpt.className = 'clsAddAcctInpt';
    acctFormDiv.appendChild(addAcctInpt);

    const deleteAcctForm = document.createElement('input');
    deleteAcctForm.setAttribute('id', 'idDeleteAcctForm');
    deleteAcctForm.setAttribute('value', 'Cancel');
    deleteAcctForm.setAttribute('type', 'button');
    deleteAcctForm.className = 'clsDeleteForm';
    acctFormDiv.appendChild(deleteAcctForm);

    return acctFormDiv;
  }

  // Contents of create account form(creating a table row to append to table body).........
  createAcctContent(acct) {
    const row = document.createElement('tr');

    row.innerHTML = `
         <td>${acct.accName}</td>
         <td>${acct.bal}</td>
         <td><button class= "acctBtns deposit">deposit</button></td>
         <td><button class= "acctBtns withdraw">withdraw</button></td>
         <td><button class= "acctBtns delete">delete</button></td>`;

    return row;
  }

  // Creating a cash deposit form ...........
  createDepositForm(formTitle) {
    const depositFormDiv = document.createElement('div');
    depositFormDiv.setAttribute('id', 'idDepositFormDiv');
    depositFormDiv.className = 'clsDepositFormDiv';

    const depositTitle = document.createElement('h5');
    depositTitle.setAttribute('id', 'idDepositTitle');
    depositTitle.className = 'clsTitle';
    depositTitle.textContent = `${formTitle}`;
    depositFormDiv.appendChild(depositTitle);

    const depositInpt = document.createElement('input');
    depositInpt.setAttribute('id', 'idDepositInpt');
    depositInpt.setAttribute('placeholder', 'Enter a deposit amount');
    depositInpt.setAttribute('required', 'true');
    depositInpt.setAttribute('type', 'number');
    depositInpt.className = 'clsDepositInpt';
    depositFormDiv.appendChild(depositInpt);

    const lbreak1 = document.createElement('br');
    const lbreak2 = document.createElement('br');
    depositFormDiv.appendChild(lbreak1);
    depositFormDiv.appendChild(lbreak2);

    const addDeposit = document.createElement('input');
    addDeposit.setAttribute('id', 'idAddDeposit');
    addDeposit.setAttribute('value', 'Add deposit');
    addDeposit.setAttribute('type', 'button');
    addDeposit.className = 'clsAddDeposit';
    depositFormDiv.appendChild(addDeposit);

    const deleteDpstForm = document.createElement('input');
    deleteDpstForm.setAttribute('id', 'idDeleteDpstForm');
    deleteDpstForm.setAttribute('value', 'Cancel');
    deleteDpstForm.setAttribute('type', 'button');
    deleteDpstForm.className = 'clsDeleteForm';
    depositFormDiv.appendChild(deleteDpstForm);

    return depositFormDiv;
  }

  // Creating a cash withdrawal form ........
  createWithdrawalForm(formTitle1) {
    const withdrwFormDiv = document.createElement('div');
    withdrwFormDiv.setAttribute('id', 'idWithdrwFormDiv');
    withdrwFormDiv.className = 'clsWithdrwFormDiv';

    const withdrawTitle = document.createElement('h5');
    withdrawTitle.setAttribute('id', 'idWithdrawTitle');
    withdrawTitle.className = 'clsTitle';
    withdrawTitle.textContent = `${formTitle1}`;
    withdrwFormDiv.appendChild(withdrawTitle);

    const withdrwInpt = document.createElement('input');
    withdrwInpt.setAttribute('id', 'idWithdrwInpt');
    withdrwInpt.setAttribute('placeholder', 'Enter amount to withdraw');
    withdrwInpt.setAttribute('required', 'true');
    withdrwInpt.setAttribute('type', 'number');
    withdrwInpt.className = 'clsWithdrwInpt';
    withdrwFormDiv.appendChild(withdrwInpt);

    const lbreak1 = document.createElement('br');
    const lbreak2 = document.createElement('br');
    withdrwFormDiv.appendChild(lbreak1);
    withdrwFormDiv.appendChild(lbreak2);

    const withdraw = document.createElement('input');
    withdraw.setAttribute('id', 'idWithdraw');
    withdraw.setAttribute('value', 'Withdraw');
    withdraw.setAttribute('type', 'button');
    withdraw.className = 'clsWithdraw';
    withdrwFormDiv.appendChild(withdraw);

    const deleteWithdrwForm = document.createElement('input');
    deleteWithdrwForm.setAttribute('id', 'idDeleteWithdrwForm');
    deleteWithdrwForm.setAttribute('value', 'Cancel');
    deleteWithdrwForm.setAttribute('type', 'button');
    deleteWithdrwForm.className = 'clsDeleteForm';
    withdrwFormDiv.appendChild(deleteWithdrwForm);

    return withdrwFormDiv;
  }

  // Get a child from a form(the first child)..
  getChildInForm(targetParent) {

    return targetParent.firstElementChild;
  }

  // Get the index no of an acct name from the names list...
  getIndexInNamelist(namesList, eltTextContent) {
    let temp;
    namesList.forEach((name, index) => {
      if (name === eltTextContent) {
        temp = index;
      }
    })
    return temp;
  }

  // deletes an element....
  deleteElement(parentElt) {
    parentElt.remove();
  }

  removeAccount(accName) {
    this.accountList = this.accountList.filter(account => {
      return account.accName !== accName
    });
  }

  totalAccounts() {    
    return this.accountList.reduce((acc, account) => {
      return acc + parseFloat(account.bal)
    }, 0)
  }

  highestAccount() {
    let maxAccount;
    let maxVal = this.accountList[0].bal;
    this.accountList.forEach((account, indx) => {
      //console.log(account.bal, indx);
      if (parseFloat(maxVal) <= parseFloat(account.bal)) {
        maxVal = parseFloat(account.bal);
        maxAccount = account;
      }
    });
    return maxAccount;
  }

  lowestAccount() {
    let minAccount;
    let minVal = this.accountList[0].bal;
    this.accountList.forEach((account, indx) => {
      //console.log(account.bal, indx);
      if (parseFloat(minVal) >= parseFloat(account.bal)) {
        minVal = parseFloat(account.bal);
        minAccount = account;
      }
    });
    return minAccount;
  }
}


const functions = {
}

export { Accounts, AccountController, functions };