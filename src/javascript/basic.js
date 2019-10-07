/*console.log("Hello World from Basic.js");

function onButtonClicked(){
    console.log("i'm in the button click event");
}

/*var fbtn = document.getElementById("btn");
fbtn.addEventListener("click", onButtonClicked);




var finpt = document.getElementById("inpt");

finpt.addEventListener("change", function(){
    console.log(finpt.value);
});




finpt.addEventListener("change", function(){
console.log(Number(finpt.value) + 1);
});*/

var finpt1 = document.getElementById("inpt");
var fbtn1 = document.getElementById("btn");

 
function size (intx){
    
     var y ="";

    if(intx < 10){
        y = "small";
        return "small";
    }
    else if(intx <= 19){
        y = "medium";
        return "medium";
    }
    else {
        y= "large";
        return "large";
    }

    

}

fbtn1.addEventListener("click", onButtonClicked);

function onButtonClicked() {
    var num = parseFloat(finpt1.value);
    console.log(finpt1.value);
    console.log(size(num));
    finpt1.value ="";
    
}
