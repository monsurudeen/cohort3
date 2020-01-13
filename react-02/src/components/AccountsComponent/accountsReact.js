
class Account {
  constructor(accName, bal) {
    this.accName = accName;
    this.bal = parseFloat(bal);
  }

  deposit(depAmt) {

    this.bal += parseFloat(depAmt);
    //return parseFloat(this.bal);
  }

  withdraw(withdrawAmt) {


    this.bal -= parseFloat(withdrawAmt);
    //return this.bal;
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
    this.account = new Account(accName, bal);
    this.accountList.push(this.account);
    return this.accountList;
  }

  // Returning account names from accountsList.......
  accountListNames() {
    let acctNames = this.accountList.map((acct) => {
      return acct.accName;
    })
    return acctNames;
  }

  // Returns an updated accounts List ....
  getAcctList() {
    return this.accountList;
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

  welcome() { return 'WELCOME'; }

  removeAcctByIndex(ind) {
    this.accountList = this.accountList.filter((account, index) => {
      return index !== ind;
    });
  }

  totalAccounts() {
    return this.accountList.reduce((acc, account) => {
      return acc + parseFloat(account.bal)
    }, 0)
  }

  highestAccount() {
    if (this.accountList.length === 0) {
      return
    } else {
      let maxAccount;
      let maxVal = this.accountList[0].bal;
      this.accountList.forEach((account, indx) => {        
        if (parseFloat(maxVal) <= parseFloat(account.bal)) {
          maxVal = parseFloat(account.bal);
          maxAccount = account;
        }
      });
      return maxAccount;
    }
  }

  lowestAccount() {
    if (this.accountList.length === 0) {
      return
    } else {
      let minAccount;
      let minVal = this.accountList[0].bal;
      this.accountList.forEach((account, indx) => {      
        if (parseFloat(minVal) >= parseFloat(account.bal)) {
          minVal = parseFloat(account.bal);
          minAccount = account;
        }
      });
      return minAccount;
    }
  }



}





export { Account, AccountController };