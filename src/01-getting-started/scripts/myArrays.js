const screenArr = document.querySelector("#screen-arr");
const msgAreaArr = document.querySelector("#message-arr");
const addBtn = document.querySelector("#add-btn");
const showBtn = document.querySelector("#show-btn");
const totalBtn = document.querySelector("#total-btn");
const clearBtnArr = document.querySelector("#clear-arr");

const arr = [];


addBtn.addEventListener("click", () => {
    if(!(isNaN( Number(screenArr.value))) && (screenArr.value.length > 0)){
        arr.push(screenArr.value);
        msgAreaArr.textContent = "You just added "
             + screenArr.value + " to the list" ;

         screenArr.value = "";
    } 
    else{
        msgAreaArr.textContent = `You entered an invalid value,
                                please enter a number`
    }
         
    })
  
    
showBtn.addEventListener("click",  () => {
        if(arr.length > 0){
          msgAreaArr.textContent = "The list contains : "
                                  +  arr.toString();
        } 
        else{
            msgAreaArr.textContent = "The list is empty";
        }       
 })



totalBtn.addEventListener("click",  () => {
    if(arr.length > 0){ 
       let newArr = arr.reduce( (acc, num) => {
           return( acc + Number(num));
    
        },0 );

      msgAreaArr.textContent ="sum of list elements is "
                            + newArr.toString(); 
    }
    else{
        msgAreaArr.textContent = `The list is empty`;
    }

})



clearBtnArr.addEventListener("click", ()  => {
    if(arr.toString !== ""){ 
       let counter = arr.length;
       for(let i = 0; i < counter; i++){
           arr.pop();
    }

    msgAreaArr.textContent = `You just cleared the list,`
     

  }
})


screenArr.addEventListener("click", () => {
    screenArr.value = "";
    msgAreaArr.textContent = `Welcome`
})

 