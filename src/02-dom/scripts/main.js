import functions from './functions.js';

const inpt = document.querySelector(`#inpt`);
const addBtn = document.querySelector(`#add`);
const delBtn = document.querySelector(`#delete`);
const ordList = document.querySelector(`#list-cont`)
const showBtn = show;
const showCont = showDiv;

addBtn.addEventListener("click", () => {
    if (inpt.value.length > 1) {

        functions.addListItem(inpt.value);
        inpt.value = "";

    }

});

delBtn.addEventListener("click", () => {
    if (ordList.childElementCount > 0) {

        functions.deleteItem(ordList);

    }

});

showBtn.addEventListener("click", () => {

    functions.showItems(ordList, showCont);

});


// DOM EXERCISE 2----- WORKING WITH CARDS ----------

 const bigDiv = idBigDiv;
 bigDiv.addEventListener("click", (event) => {
        let eTarget = event.target;
    
        switch (event.target.className) {
        case "btn  addCard": { 
                              console.log("hi");
                             const newCard = functions.addCard(bigDiv);
                              break;
                            }                             
                        
        case "btn addBefore": {
            
                             let card = event.target.parentElement;
                             let cardParent = event.target.parentElement.parentElement;
                             // position = "beforebegin";  property of the method           
                             const newCard = functions.positionCard(card,"beforebegin", cardParent)

                             break;
                            }

       case "btn addAfter":  {          

                             let card = event.target.parentElement;
                             let cardParent = event.target.parentElement.parentElement;
                             // position = "afterend";  property of the method           
                             const newCard = functions.positionCard(card, "afterend", cardParent );

                             break;
                            } 

        case "btn delete": {
            
                            let card = event.target.parentElement;
                            let cardParent = event.target.parentElement.parentElement;
                            const newCard = functions.delCard(card,cardParent);
                            //console.log(newCard)
                            break;
                           }
                       

        default: 
            console.log("Not Programmed for :",event.target);
        
    }


});









