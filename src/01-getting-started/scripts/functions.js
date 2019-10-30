
const functions = {

    /* size: (num) => {
         if (num < 10) return "small";
         if (num < 20) return "medium";
         return "large";
     },*/

    //------------------- SIMPLE CALCULATOR FUNCTIONS ----------------------

    add: (a, b) => {
        console.log(Number(a) + Number(b));
        return Number(a) + Number(b);
    },

    subtract: (a, b) => {
        
        return Number(a) - Number(b);
    },


    multiply: (a, b) => {
        
        return Number(a) * Number(b);
    },


    divide: (a, b) => {
        
        return Number(a) / Number(b);
    },


    calculator: (ids, val1, val2) => {

        let result = "";
        switch (ids) {

            case "idSum":
                result = functions.add(val1, val2);
                break;

            case "idSub":
                result = functions.subtract(val1, val2);
                break;

            case "idMult":
                result = functions.multiply(val1, val2);
                break;

            case "idDiv":
                result = functions.divide(val1, val2);
                break;

        }

        return result;
    },


    clear: (val1, _val2, _val3, _val4) => {

        if (val1 === 'idAns') {
            _val2 = "";
            _val3 = "";
            _val4 = "";
        }

    },


    //------------------- TAX CALCULATOR FUNCTIONS ----------------------

   


    taxCalculator: (income) => {

        const a = (15 / 100) * 47630;
        const b = (20.5 / 100) * 47629;
        const c = (26 / 100) * 52408;
        const d = (29 / 100) * 62704;


        let result = 0;

        if (income <= 47630) {
            result = (15 / 100) * (income);
        }
        else if (income <= 95259) {
            result = a + ((20.5 / 100) * (income - 47630));

        }
        else if (income <= 147667) {
            result = a + b +
                ((26 / 100) * (income - 95259));

        }
        else if (income <= 210371) {
            result = a + b + c +
                ((29 / 100) * (income - 147667));

        }

        else {
            result = a + b + c + d +
                ((33 / 100) * (income - 210371));
        }
        return result.toFixed(3);
    },                  
              
     //------------------- WORKING WITH DICTIONARIES (FUNCTIONS) ----------------------

     lookupFn: (province, scrnVal) => {
            let arr = Object.keys(province).filter((prov) => {
            return prov === scrnVal.toUpperCase();
        });
           return province[arr];
     },
      
     













};

export default functions;
