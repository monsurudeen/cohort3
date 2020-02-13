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

 //-------------------------- ------- ARRAYS -------------------------------

const arrCont = idArrays;
const screenArr = idScreenArr;
const msgAreaArr = idMessageArr;
const addBtn = idAddBtn;
const showBtn = idShowBtn;
const totalBtn = idTotalBtn;
const clearBtnArr = idClearArr;
const arr = [];

arrCont.addEventListener("click", (e) => {
    if(e.target.id ==='idAddBtn'){
      
        if(functions.isValidNo(screenArr.value)){
              functions.addNumArr(arr, screenArr.value, msgAreaArr );
              screenArr.value = "";                 
        }
        else{
            msgAreaArr.textContent = `You entered an invalid value,
                                       please enter a number`;
          screenArr.value = "";
       }       
    }

    if(e.target.id ==='idShowBtn'){

        functions.showArr(arr, msgAreaArr);
    }

    if(e.target.id ==='idTotalBtn'){

        functions.arrSum(arr, msgAreaArr);
    }

    if(e.target.id ==='idClearArr'){

        functions.clearArr(arr, msgAreaArr);
        screenArr.value = "";
    }
    
})

//-------------------------- ------- DICTIONARIES -------------------------------
const dictCont = idDictionaries;
const screenDict = idScreenDict;
const msgAreaDict = idMessageDict;
const lookUpBtn = idLookup;


dictCont.addEventListener("click",  (e) => {
     if(e.target.id === 'idLookup'){
        let temp = functions.lookupFn(functions.provinces, screenDict.value);
        
             msgAreaDict.textContent = `Province name is ` + temp;                     
       }
       if(e.target.id === 'idScreenDict'){
           screenDict.value = "";
           msgAreaDict.textContent = `Welcome`;        
     }
} )





 



























