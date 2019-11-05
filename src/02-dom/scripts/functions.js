

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

    },

// DOM EXERCISE 2---- WORKING WITH CARDS -----------

    counter: 0,

    createCard:  () => {

    functions.counter++;

    // -----childDiv settings------
    const childDiv = document.createElement('div');
    childDiv.className = 'childDiv';
    childDiv.setAttribute('count',functions.counter);
    childDiv.textContent = `card ${functions.counter}`;

    // creating a <br> and the buttons
    const linebreak = document.createElement('br'); 
    childDiv.appendChild(linebreak);
    
    const btnBefore = document.createElement('button');
    btnBefore.className = 'btn addBefore';
    btnBefore.textContent = 'add-before'; 
    childDiv.appendChild(btnBefore);

    const btnAfter = document.createElement('button');
    btnAfter.className = 'btn addAfter';
    btnAfter.textContent = 'add-after';
    childDiv.appendChild( btnAfter);

    const linebreak1 = document.createElement('br');
    childDiv.appendChild(linebreak1);

    const delBtn = document.createElement('button');
    delBtn.className = 'btn delete';
    delBtn.textContent = 'delete';
    childDiv.appendChild(delBtn); 
          
    return childDiv;

    },

    addCard: (parentDiv) => {
        
        let cardInGrp = functions.createCard();

        parentDiv.appendChild(cardInGrp);

        const temp = Array.from(parentDiv.children).filter( (child)  => {return child.className === 'childDiv'});
        //console.log(temp);   
        const temp1 = temp.map( (child) => {return child.getAttribute('count')});
        //console.log(temp1);
        return temp1;
        
        
    },
    positionCard: (parentCard, position, parentOfCard ) => {
      
        parentCard.insertAdjacentElement(position, functions.createCard());

        const temp = Array.from(parentOfCard.children).filter( (child)  => {return child.className === 'childDiv'});
       // console.log(temp);   
        const temp1 = temp.map( (child) => {return child.getAttribute('count')});
        //console.log(temp1);
        return temp1;
        
        

    },
    delCard:(parentCard, parentOfCard) => {
        parentCard.remove();
        
        const temp = Array.from(parentOfCard.children).filter( (child)  => {return child.className === 'childDiv'});
        //console.log(temp);   
        const temp1 = temp.map( (child) => {return child.getAttribute('count')});
        //console.log(temp1);
        return temp1;
        

    },

    

   


};


export default functions;