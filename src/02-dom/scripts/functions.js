
const functions = {



    addListItem: (inputVal) => {
        const ordList = document.querySelector("#list-cont");
        const li = document.createElement("li");
        const text = document.createTextNode(inputVal);
        li.appendChild(text);
        ordList.appendChild(li);


    },

    showItems: (ol, showDiv) => {
          
        showDiv.textContent = ol.textContent;
        
    },

    deleteItem: (ol) => {

        ol.lastElementChild.remove();

    }

};


export default functions;