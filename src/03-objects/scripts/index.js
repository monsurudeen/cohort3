
import * as oo from "./accounts.js";

const acctcont = new oo.AccountController();  // a new instance of the AccountController class.
const messageArea = idMessageArea;
const containerDiv = idContDiv;
containerDiv.addEventListener("click", (event) => {


    switch (event.target.className) {
        case "clsCreateAcct": {
            let targetParent = event.target.parentElement; // navigating to the Left Panel from the 'create acct button,
            let childrenArr = Array.from(targetParent.children);
            let childrenIds = childrenArr.map((child) => {  // gets the ids' of Left Panel children..
                return (child.id);
            });
            if (!(childrenIds.includes('idAcctFormDiv'))) { // only one 'create acct form' is on at a time
                const leftPanel = idLeftPanel;
                leftPanel.appendChild(acctcont.createAcctForm())
            }
            break;
        }

        case "clsAddAcctInpt": {
            let parent = event.target.parentElement;
            const acctName = idAcctNameInpt; // from the create acct form
            const acctBal = idBalInpt;       // from the create acct form 

            if (acctName.value !== "") {
                if ((acctBal.value !== "") && (parseFloat(acctBal.value) > 0)) {
                    //The next if condition ensures each account name is unique
                    if (!(acctcont.accountListLoop().includes(acctName.value))) {
                        const acctInstance = acctcont.createAccount(acctName.value, acctBal.value) // creates an instance of acct with input values
                        const tBodyAcctContent = acctcont.createAcctContent(acctInstance); // fills <tr> with acct information
                        const tableBody = idTbody;
                        tableBody.appendChild(tBodyAcctContent); // Appends <tr> to table body..

                        acctcont.getAcctList();
                        messageArea.innerHTML = `<button class='clsClearMsg'>clear</button>
                        <p>The <b>total</b> of all balance(s) is <b>$${acctcont.totalAccounts()}</b></P>
                        <p>The <b>highest</b> valued account is <b>${acctcont.highestAccount().accName}</b> with <b>$${acctcont.highestAccount().bal}</b></p>
                        <p> The <b>lowest</b> valued account is <b>${acctcont.lowestAccount().accName}</b> with <b>$${acctcont.lowestAccount().bal}</b><p/>`

                        acctcont.deleteElement(parent);

                    } else {
                            messageArea.innerHTML = `<button class='clsClearMsg'>clear</button>
                                                     <p><b> Account name already exists </b></p>`;
                    }
                } else {
                        messageArea.innerHTML = `<button class='clsClearMsg'>clear</button>
                                                 <p><b> Please enter a valid amount </b></p>`;
                }
            } else {
                    messageArea.innerHTML = `<button class='clsClearMsg'>clear</button>
                                             <p><b> Please enter a name for account </b></p>`;
            }     

            acctName.value = "";
            acctBal.value = "";

            break;
        }

        case "acctBtns deposit": {
            // the next line selects the <td> containing the initial balance navigating from the deposit btn.
            let balanceTableData = event.target.parentElement.previousElementSibling;
            let targetChild = Array.from(containerDiv.children).filter((child) => { // getting the left panel
                return (child.id === 'idLeftPanel')
            })
            //The next line gets the ids of all the children elements currently in the left panel
            let childrenIds = Array.from(targetChild[0].children).map((item) => {
                return item.id;
            })
            if (!(childrenIds.includes('idDepositFormDiv'))) {  // only one deposit form is on at a time
                let depositHeader = event.target.parentElement.previousElementSibling.previousElementSibling.textContent;
                const leftPanel = idLeftPanel;
                leftPanel.appendChild(acctcont.createDepositForm(depositHeader)); // brings up the deposit form...
            }

            const deposit = idAddDeposit; // selects deposit btn in form ....
            const depositInpt = idDepositInpt;
            deposit.addEventListener("click", (e) => {
                let parent = e.target.parentElement;
                let namesList = acctcont.accountListLoop(); // returns acct names in acct list             
                let childInForm = acctcont.getChildInForm(parent);  // Returns the first element child in the withdrawal form

                // The next line gets the index no of the selected acct name in the accts names list
                let indexInNameList = acctcont.getIndexInNamelist(namesList, childInForm.textContent);
                if ((parseFloat(depositInpt.value) > 0) && (depositInpt.value !== "")) {
                    //The next line deposits into the selected acct in the acct List using the index we got from the previous line    
                    let temp = acctcont.accountList[indexInNameList].deposit(parseFloat(depositInpt.value));
                    balanceTableData.textContent = temp;

                    acctcont.getAcctList();
                    messageArea.innerHTML = `<button class='clsClearMsg'>clear</button>
                     <p>The <b>total</b> of all balance(s) is <b>$${acctcont.totalAccounts()}</b></P>
                     <p>The <b>highest</b> valued account is <b>${acctcont.highestAccount().accName}</b> with <b>$${acctcont.highestAccount().bal}</b></p>
                     <p> The <b>lowest</b> valued account is <b>${acctcont.lowestAccount().accName}</b> with <b>$${acctcont.lowestAccount().bal}</b><p/>`

                    acctcont.deleteElement(parent);

                } else {
                    messageArea.innerHTML = `<button class='clsClearMsg'>clear</button>
                                             <p><b> Please enter a valid amount </b></p>`
                }
            })
            break;
        }

        case "acctBtns withdraw": {
            // the next line selects the <td> containing the initial balance navigating from the withwithdraw btn..
            let balanceTableData = event.target.parentElement.previousElementSibling.previousElementSibling;
            let targetChild = Array.from(containerDiv.children).filter((child) => {      // getting the left panel
                return (child.id === 'idLeftPanel')
            })
            let childrenIds = Array.from(targetChild[0].children).map((item) => {  //getting the ids of the left panel children..
                return item.id;
            })
            if (!(childrenIds.includes('idWithdrwFormDiv'))) { // only one withdraw form is on at a time...
                let withdrawHeader = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent
                const leftPanel = idLeftPanel;
                leftPanel.appendChild(acctcont.createWithdrawalForm(withdrawHeader));
            }

            const withdraw = idWithdraw; // selects withdraw btn in form ....
            const withDrawInpt = idWithdrwInpt;
            withdraw.addEventListener("click", (e) => {
                let parent = e.target.parentElement;
                let namesList = acctcont.accountListLoop(); // returns acct names in acct list..        
                let childInForm = acctcont.getChildInForm(parent); // Returns the first element child in the withdrawal form..

                // The next line gets the index no of the selected acct name in the accts names list..
                let indexInNameList = acctcont.getIndexInNamelist(namesList, childInForm.textContent);
                if ((withDrawInpt.value !== "") && (parseFloat(withDrawInpt.value) > 0)) {
                    if ((parseFloat(withDrawInpt.value) <= parseFloat(acctcont.accountList[indexInNameList].bal))) {

                        //The next line withdraws from the selected acct in the acct List using the index we got from the previous line    
                        let temp = acctcont.accountList[indexInNameList].withdraw(parseFloat(withDrawInpt.value));
                        balanceTableData.textContent = temp;

                        acctcont.getAcctList();
                        messageArea.innerHTML = `<button class='clsClearMsg'>clear</button>
                         <p>The <b>total</b> of all balance(s) is <b>$${acctcont.totalAccounts()}</b></P>
                        <p>The <b>highest</b> valued account is <b>${acctcont.highestAccount().accName}</b> with <b>$${acctcont.highestAccount().bal}</b></p>
                        <p> The <b>lowest</b> valued account is <b>${acctcont.lowestAccount().accName}</b> with <b>$${acctcont.lowestAccount().bal}</b><p/>`

                        acctcont.deleteElement(parent);

                    } else {
                        messageArea.innerHTML = `<button class='clsClearMsg'>clear</button>
                        <p> You can not withdraw more than <b>$${acctcont.accountList[indexInNameList].bal}</b></p>
                        <p>Your current balance is <b>$${acctcont.accountList[indexInNameList].bal}</b></p>`;
                    }
                } else {
                    messageArea.innerHTML = `<button class='clsClearMsg'>clear</button>
                                             <p><b> Please enter a valid amount </b></p>`
                }                
            })
            break;
        }

        case "clsClearMsg": {
            // Clears the message area...
            let parent = event.target.parentElement;
            parent.innerHTML = `<button class='clsClearMsg'>clear</button>`
            break; 
        }

        case "acctBtns delete": {
            // The next line gets the acct name <td> navigating from the delete <td>
            let targetTd = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling

            if (confirm(`Are you sure you want to delete account ${targetTd.textContent}`)) { // pops up a confirm delete message box
                // the next line removes the <tr> line with the selected acct name(targetTd)
                acctcont.deleteElement(event.target.parentElement.parentElement)
                acctcont.removeAccount(targetTd.textContent); // Removes the corresponding accName and bal from the account List
            }
            messageArea.innerHTML = `<button class='clsClearMsg'>clear</button>
               <p>The <b>total</b> of all balance(s) is <b>$${acctcont.totalAccounts()}</b></P>
               <p>The <b>highest</b> valued account is <b>${acctcont.highestAccount().accName}</b> with <b>$${acctcont.highestAccount().bal}</b></p>
               <p> The <b>lowest</b> valued account is <b>${acctcont.lowestAccount().accName}</b> with <b>$${acctcont.lowestAccount().bal}</b><p/>`

            break;
        }

        case "clsDeleteForm": {
            acctcont.deleteElement(event.target.parentElement)
            break;
        }
        default:
            console.log("Not Programmed for :", event.target);
    }
});