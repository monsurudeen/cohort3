var fbtn = document.getElementById("btn");
var finpt = document.getElementById("inpt");



function size(intx){
   var y = "";
   
    if (intx < 10){
        y ="small";
        return "small";

    }

    else if(intx <= 19){
        y ="medium";
        return "medium";
      
    }

    else {
        y = "large";
        return "large";
    };


}

fbtn.addEventListener("click", sizes);

function sizes(){
    var sum = parseFloat(finpt.value);
    console.log(size(sum));
    console.log(sum);




}