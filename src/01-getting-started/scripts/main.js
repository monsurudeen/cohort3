import functions from './functions.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));





//---------------------- A SIMPLE CALCULATOR -------------------------------

const calcDiv = idCalc; // container div
calcDiv.addEventListener("click", (e) => {

    const inpt1 = idFirst;
    const inpt2 = idSecond;
    const ans = idAns;

    let temp = functions.calculator(e.target.id, inpt1.value, inpt2.value);
    ans.value = temp;

    functions.clear(e.target.id, ans.value, inpt1.value, inpt2.value);

});


//-- ---------------------- CANADIAN TAX CALCULATOR -------------------------------

const taxCont = idTaxCalc;
const screenTax = idScreenTax;
const calcBtn = idCalcBtn;
const clearBtn = idClearTax;
const msgAreaTax = idMessageTax;


taxCont.addEventListener('click', (e) => {
     if(e.target.id === 'idCalcBtn'){

         if(screenTax.value.length > 0){
              let num = functions.taxCalculator(Number(screenTax.value))
              msgAreaTax.textContent = "Your tax amount is $" + num;
           }
         else{
               msgAreaTax.textContent = "Please enter a valid amount";
           }       
        }
    if(e.target.id === 'idScreenTax' || e.target.id === 'idClearTax' ){
          screenTax.value = "";
          msgAreaTax.textContent = `Welcome`;
        }     
 });





//-------------------------- ------- DICTIONARIES -------------------------------
const dictCont = idDictionaries;
const screenDict = idScreenDict;
const msgAreaDict = idMessageDict;
const lookUpBtn = idLookup;



const provinces = {
    AB : "Alberta",
    BC : "British Columbia",
    MB : "Manitoba",
    NB : "New Brunswick",
    NL : "Newfoundland and Labrador",
    NS : "Nova Scotia",
    ON : "Ontario",
    PE : "Prince Edward Island",
    QC : "Quebec",
    SK : "Saskatchewan",
    NT : "Northwest Territories",
    NU : "Nunavut",
    YT : "Yukon"

};


dictCont.addEventListener("click",  (e) => {
     if(e.target.id === 'idLookup'){

        let temp = functions.lookupFn(provinces, screenDict.value);
        
             msgAreaDict.textContent = `Province name is ` + temp;
                     
       }

       if(e.target.id === 'idScreenDict'){
           screenDict.value = "";
           msgAreaDict.textContent = `Welcome`;        
     }
} )





 



























