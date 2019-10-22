const screenDict = document.querySelector("#screen-dict");
const msgAreaDict = document.querySelector("#message-dict");
const lookUpBtn = document.querySelector("#lookup");



const province = {
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


screenDict.addEventListener("click",  () => {
    
      screenDict.value = "";
      msgAreaDict.textContent = `Welcome`;
      
})

lookUpBtn.addEventListener("click", () => {
       let arr = Object.keys(province).filter((prov) => {
            return prov === screenDict.value.toUpperCase()
        })
       
        if(arr.length > 0){        
          
            msgAreaDict.textContent = `Province name is ` + province[arr];
        }
        else{
              msgAreaDict.textContent = `You enterd an invalid code,
                                    please try again`}


})
