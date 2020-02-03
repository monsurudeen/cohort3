/*const screenTax = document.querySelector("#idScreenTax");
const calcBtn = document.querySelector("#idCalcBtn");
const clearBtn = document.querySelector("#idClearTax");
const msgAreaTax = document.querySelector("#idMessageTax");


const a = (15/100) * 47630;
const b = (20.5/100) * 47629;
const c = (26/100) * 52408;
const d = (29/100) * 62704;



/*const isValidDigits = (digits) => {
     return( (!(isNan(digits)) ) &&  (!(digits < 1)) &&  ((digits.length() > 0)) );
         
     }*/

/*const taxCalculator = (income) => {
    
    let result = 0;

    if(income <= 47630){
        result = (15/100) * (income);
    }
    else if(income <= 95259){
        result = a + ((20.5/100) * (income - 47630));
    
    }
    else if(income <= 147667){
        result = a + b +
        ((26/100) * (income - 95259));

    }
    else if(income <= 210371){
        result = a + b + c +
        ((29/100) * (income - 147667));

    }
    
    else{
        result = a + b + c + d +
        ((33/100) * (income - 210371));
    }
    
    //result = result.toFixed(3);
    //return result.toString();
       return result.toFixed(3);
}





calcBtn.addEventListener("click", () => {
     if(screenTax.value.length > 0){        
      let temp = taxCalculator(Number(screenTax.value));
      msgAreaTax.textContent = "Your tax amount is $" + temp;
     }
     else{
           msgAreaTax.textContent = "Please enter a valid amount";
           
        return; }       
        
})
          
  screenTax.addEventListener("click", () => {
      screenTax.value = "";
      msgAreaTax.textContent = `Welcome`;

})

clearBtn.addEventListener("click", () => { 
    screenTax.value = "";
    msgAreaTax.textContent = "Welcome";
} )*/







 










