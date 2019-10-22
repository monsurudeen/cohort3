const btnNum = document.querySelectorAll(".btn-num");
const btnOps = document.querySelectorAll(".btn-ops");
const btnDot = document.querySelector(".btn-dot");
const btnClear = document.querySelector(".btn-clear");
const btnEqual = document.querySelector(".btn-equal");
const screen = document.querySelector(".screen");


var xoxo = 0


for (let i = 0; i < btnNum.length; i++){
    btnNum[i].addEventListener("click", () => {
        let num = btnNum[i].getAttribute("data-num");
        
       if(screen.value.endsWith(" ")){
           screen.value = num;
       }
       else{
          screen.value += num;
       }
    })
}

for(let i = 0; i < btnOps.length; i++){
    btnOps[i].addEventListener("click", () => {
    let endChar = screen.value.length - 1;
    if(!(["+","-","*","/"].includes(screen.value.charAt(endChar)))
     && (screen.value !== "")){
       let num = btnOps[i].getAttribute("data-ops");
       screen.value += num;  
     }
    })
}


btnDot.addEventListener("click", () => {
    let num = btnDot.getAttribute("data-dot");
    let endChar = screen.value.length - 1;
    if(screen.value.endsWith(" ")){
        screen.value = num;
    }    
        
    else if(((screen.value.charAt(endChar)) !== ".")
       && (screen.value.charAt(endChar) !==" ")){
           
        screen.value += num;
     } 
})



btnEqual.addEventListener("click", () => {
    if(screen.value !== ""){
     let value = eval(screen.value);
     screen.value = value + " ";
     
    }

} )



screen.addEventListener("keypress", (event) => {
    if((screen.value !== "") && (event.keyCode === 13)){
     let value = eval(screen.value);
     screen.value = value;}
    })




btnClear.addEventListener("click", () => {

screen.value = "";
})


