const functionsCityDom = {
createCityForm: () => {
    const cityFormDiv = document.createElement('div');
    cityFormDiv.setAttribute('id', 'idCityFormDiv');
    cityFormDiv.className = 'clsCityFormDiv';

    const cityNameInpt = document.createElement('input');
    cityNameInpt.setAttribute('id', 'idCityNameInpt');
    cityNameInpt.setAttribute('placeholder', 'Enter a name for new city');
    cityNameInpt.setAttribute('required', 'true');
    cityNameInpt.setAttribute('type', 'text');
    cityNameInpt.className = 'clsCityFormInpt';
    cityFormDiv.appendChild(cityNameInpt);

    const lbreak1 = document.createElement('br');
    const lbreak2 = document.createElement('br');
    cityFormDiv.appendChild(lbreak1);
    cityFormDiv.appendChild(lbreak2);

    const latInpt = document.createElement('input');
    latInpt.setAttribute('id', 'idLatInpt');
    latInpt.setAttribute('placeholder', 'Enter a value for latitude');
    latInpt.setAttribute('required', 'true');
    latInpt.setAttribute('type', 'number');
    latInpt.className = 'clsCityFormInpt';
    cityFormDiv.appendChild(latInpt);

    const lbreak3 = document.createElement('br');
    const lbreak4 = document.createElement('br');
    cityFormDiv.appendChild(lbreak3);
    cityFormDiv.appendChild(lbreak4);

    const longInpt = document.createElement('input');
    longInpt.setAttribute('id', 'idLongInpt');
    longInpt.setAttribute('placeholder', 'Enter a value for longitude');
    longInpt.setAttribute('required', 'true');
    longInpt.setAttribute('type', 'number');
    longInpt.className = 'clsCityFormInpt';
    cityFormDiv.appendChild(longInpt);

    const lbreak5 = document.createElement('br');
    const lbreak6 = document.createElement('br');
    cityFormDiv.appendChild(lbreak5);
    cityFormDiv.appendChild(lbreak6);


    const poplInpt = document.createElement('input');
    poplInpt.setAttribute('id', 'idPoplInpt');
    poplInpt.setAttribute('placeholder', 'Enter a value for the population');
    poplInpt.setAttribute('required', 'true');
    poplInpt.setAttribute('type', 'number');
    poplInpt.className = 'clsCityFormInpt';
    cityFormDiv.appendChild(poplInpt);

    const lbreak7 = document.createElement('br');
    const lbreak8 = document.createElement('br');
    cityFormDiv.appendChild(lbreak7);
    cityFormDiv.appendChild(lbreak8);


    const addCity = document.createElement('input');
    addCity.setAttribute('id', 'idAddCityBtn');
    addCity.setAttribute('value', 'Add city');
    addCity.setAttribute('type', 'button');
    addCity.className = 'clsAddCityBtn';
    cityFormDiv.appendChild(addCity);

    const deleteCityForm = document.createElement('input');
    deleteCityForm.setAttribute('id', 'idDeleteAcctForm');
    deleteCityForm.setAttribute('value', 'Cancel');
    deleteCityForm.setAttribute('type', 'button');
    deleteCityForm.className = 'clsDeleteFormCity';
    cityFormDiv.appendChild(deleteCityForm);

    return cityFormDiv;
  },

  createCityContent: (city) => {
    const cityDiv = document.createElement('div');    
     cityDiv.className = 'clsCityDiv';  
     cityDiv.innerHTML = `
         <h3 class = 'name'>City Name: ${city.name}</h3>
         <p class = 'key'>Key: ${city.key}</p>
         <p class = 'lat'>Latitude: ${city.lat}</p>
         <p class = 'long'>Longitude: ${city.long}</p>
         <p class = 'popl'>Population: ${city.popl}</p>
         <p>Type: ${city.howBig()}</p>
         <p><button class= "cityBtns moveIn">Moved In</button></p>
         <p><button class= "cityBtns moveOut">Moved Out</button></p>
         <p><button class= "cityBtns deleteCity">Delete</button></p>`;

    return cityDiv;
  },

  createCityContentFromServer: (serverCities) => {
    let serverCityList = serverCities.map((city) => {
     return functionsCityDom.createCityContent(city); 
    });
    return serverCityList;
 },

 appendCityFromServer: (displayArea, cityDivs) => {
    cityDivs.forEach( (city) => {
      displayArea.appendChild(city);
    }) 
 }, 

  // Creating a Moved In form ...........
  createMovedInForm: (formTitle) => {
    const movedInFormDiv = document.createElement('div');
    movedInFormDiv.setAttribute('id', 'idMovedInFormDiv');
    movedInFormDiv.className = 'clsMovedInFormDiv';

    const movedInTitle = document.createElement('h5');
    movedInTitle.setAttribute('id', 'idMovedInTitle');
    movedInTitle.className = 'clsMovedTitle';
    movedInTitle.textContent = `${formTitle}`;
    movedInFormDiv.appendChild(movedInTitle);

    const movedInInpt = document.createElement('input');
    movedInInpt.setAttribute('id', 'idMovedInInpt');
    movedInInpt.setAttribute('placeholder', 'How many people moved in ?');
    movedInInpt.setAttribute('required', 'true');
    movedInInpt.setAttribute('type', 'number');
    movedInInpt.className = 'clsMovedInpt';
    movedInFormDiv.appendChild(movedInInpt);

    const lbreak1 = document.createElement('br');
    const lbreak2 = document.createElement('br');
    movedInFormDiv.appendChild(lbreak1);
    movedInFormDiv.appendChild(lbreak2);

    const movedInBtn = document.createElement('input');
    movedInBtn.setAttribute('id', 'idMovedInBtn');
    movedInBtn.setAttribute('value', 'Moved In');
    movedInBtn.setAttribute('type', 'button');
    movedInBtn.className = 'clsMovedInBtn';
    movedInFormDiv.appendChild(movedInBtn);

    const deleteMovedInForm = document.createElement('input');
    deleteMovedInForm.setAttribute('id', 'idDeleteDpstForm');
    deleteMovedInForm.setAttribute('value', 'Cancel');
    deleteMovedInForm.setAttribute('type', 'button');
    deleteMovedInForm.className = 'clsDeleteFormCity';
    movedInFormDiv.appendChild(deleteMovedInForm);

    return movedInFormDiv;
  },

   // Creating a Moved Out form ........
   createMovedOutForm:(formTitle1) => {
    const movedOutFormDiv = document.createElement('div');
    movedOutFormDiv.setAttribute('id', 'idMovedOutFormDiv');
    movedOutFormDiv.className = 'clsMovedOutFormDiv';

    const movedOutTitle = document.createElement('h5');
    movedOutTitle.setAttribute('id', 'idMovedTitle');
    movedOutTitle.className = 'clsMovedTitle';
    movedOutTitle.textContent = `${formTitle1}`;
    movedOutFormDiv.appendChild(movedOutTitle);

    const movedOutInpt = document.createElement('input');
    movedOutInpt.setAttribute('id', 'idMovedOutInpt');
    movedOutInpt.setAttribute('placeholder', 'How many people moved out ?');
    movedOutInpt.setAttribute('required', 'true');
    movedOutInpt.setAttribute('type', 'number');
    movedOutInpt.className = 'clsMovedInpt';
    movedOutFormDiv.appendChild(movedOutInpt);

    const lbreak1 = document.createElement('br');
    const lbreak2 = document.createElement('br');
    movedOutFormDiv.appendChild(lbreak1);
    movedOutFormDiv.appendChild(lbreak2);

    const movedOutBtn = document.createElement('input');
    movedOutBtn.setAttribute('id', 'idMovedOutBtn');
    movedOutBtn.setAttribute('value', 'Moved Out');
    movedOutBtn.setAttribute('type', 'button');
    movedOutBtn.className = 'clsMovedOutBtn';
    movedOutFormDiv.appendChild(movedOutBtn);

    const deleteMovedOutForm = document.createElement('input');
    deleteMovedOutForm.setAttribute('id', 'idDeleteMovedOutForm');
    deleteMovedOutForm.setAttribute('value', 'Cancel');
    deleteMovedOutForm.setAttribute('type', 'button');
    deleteMovedOutForm.className = 'clsDeleteFormCity';
    movedOutFormDiv.appendChild(deleteMovedOutForm);

    return movedOutFormDiv;
  },

 // returns the first child element..
  getChildInForm:(targetParent) => {
    return targetParent.firstElementChild;
  },

  // deletes an element....
  deleteElement:(parentElt) => {
    parentElt.remove();
  }
}

export default functionsCityDom; 
