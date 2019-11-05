import functions from './functions.js';




test('check Add ', () => {
 
    const ol = document.createElement("ol");
    document.body.appendChild(ol);
    ol.id = "list-cont";
    let listCount = ol.childElementCount;


    functions.addListItem("star");
    // console.log(listCount,  ol.childElementCount);
    functions.addListItem("cat");
   // console.log(listCount,  ol.childElementCount);

    expect(ol.childElementCount).toEqual(listCount + 2);


});

// -------  DOM-2-- PLAYING WITH CARDS (COMPETENCIES 110)----------------

const parentBody = document.body ;
    
    functions.addCard(parentBody);
    functions.addCard(parentBody);
    functions.addCard(parentBody);
    functions.addCard(parentBody);

test('Testing addCard function ', () => {
 
    let countArr = functions.addCard(parentBody);

    expect(countArr).toEqual(['1','2','3','4','5']); 

});

test('Testing delete functionality ', () => {
 
    
    
    functions.delCard(parentBody.children[2], parentBody) // deletes the third child card with count #3      
    let countArr1 = functions.addCard(parentBody);

    expect(countArr1).toEqual(['1','2','4','5','6']); 

    

});





