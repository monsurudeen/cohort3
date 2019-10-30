import functions from './functions.js';

const inpt = document.querySelector(`#inpt`);
const addBtn = document.querySelector(`#add`);
const delBtn = document.querySelector(`#delete`);
const ordList = document.querySelector(`#list-cont`)
const showBtn = show;
const showCont = showDiv;

addBtn.addEventListener("click", () => {
    if(inpt.value.length > 1){
       
       functions.addListItem(inpt.value);
        inpt.value = "";
        
    }
    
});

delBtn.addEventListener("click", () => {
    if(ordList.childElementCount > 0){
        
        functions.deleteItem(ordList);
        
    }

});

showBtn.addEventListener("click", () => {

    functions.showItems(ordList, showCont );

})









