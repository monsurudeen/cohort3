import functionsCityDom from './cityDom.js'
import { postData, getData, addData, clearData, deleteData, updateData } from './cityAPI.js'
import { City, Community } from './cityClasses.js'

let serverData = [];
let lastKey = 0;
const commInstance = new Community();  // a new instance of the Community controller class.
const messageArea = idCityRightPanel;
const cityDisplayArea = idCityDisplayArea;

//ON PAGE LOAD
window.onload = async (event) => {
    //await clearData();
    serverData = await getData();
    if (serverData.length !== 0) {
        lastKey = serverData[serverData.length - 1].key;
        let cities = commInstance.createCityFromServer(serverData);
        let cityContents = functionsCityDom.createCityContentFromServer(cities);
        functionsCityDom.appendCityFromServer(cityDisplayArea, cityContents);

        messageArea.innerHTML = `<button class='clsClearMsgBtn'>clear</button>
                                <p>There is/are currently ${serverData.length} city entries on server</p> 
                                <p>There are <b>${commInstance.getPopulation()}</b> people altogether across all cities</p>
                                <p>The <b>southermost</b> city is <b>${commInstance.getMostSouthern().name}</b> at latitude <b>${commInstance.getMostSouthern().lat}</b></p>
                                <p>The <b>northernmost</b> city is <b>${commInstance.getMostNorthern().name}</b> at latitude <b>${commInstance.getMostNorthern().lat}</b></p>                                           `
        return;
    } else {
               messageArea.innerHTML = `<button class='clsClearMsgBtn'>clear</button>
                                        <p>There are currently no city entries on server</p>`
    }
                                   
}; 


    const containerDiv = idContDivCity;
    containerDiv.addEventListener("click", async (event) => {

        switch (event.target.className) {
            case "clsCreateCityBtn": {
                let targetParent = event.target.parentElement; // navigating to the Left Panel from the 'create acct button,
                let childrenArr = Array.from(targetParent.children);
                let childrenIds = childrenArr.map((child) => {  // gets the ids' of Left Panel children..
                    return (child.id);
                });
                if (!((childrenIds.includes('idCityFormDiv')) || (childrenIds.includes('idMovedInFormDiv')) || (childrenIds.includes('idMovedOutFormDiv')))) { // only one 'create acct form' is on at a time
                    // const leftPanel = idCityLeftPanel;
                    targetParent.appendChild(functionsCityDom.createCityForm())
                }
                break;
            }

            case "clsAddCityBtn": {
                let addCityBtnparent = event.target.parentElement;
                const cityName = idCityNameInpt; // from the create acct form
                const cName = cityName.value;
                const cityLatitude = idLatInpt;       // from the create acct form 
                const cLat = parseFloat(cityLatitude.value);
                const cityLongitude = idLongInpt;
                const cLong = parseFloat(cityLongitude.value);
                const cityPopulation = idPoplInpt;
                const cPopl = parseFloat(cityPopulation.value);
                if (cName !== "") {
                    if (!(commInstance.compareLongLat(cLat, cLong))) {
                        //The next if condition ensures each account name is unique
                        if ((cPopl > 0) && (cLat >= -90 && cLat <= 90) && (cLong >= -180 && cLong <= 180)) {
                            lastKey++;
                            const city = commInstance.createCity(cName, lastKey, cLat, cLong, cPopl) // creates an instance of acct with input values
                            await addData(city);
                            const cityDivContent = functionsCityDom.createCityContent(city); // fills city 'div' with city information                        
                            cityDisplayArea.appendChild(cityDivContent); // Appends city 'div' to city display area 'div'..
                            commInstance.getCityList();

                            messageArea.innerHTML = `<button class='clsClearMsgBtn'>clear</button>
                         <p>There are <b>${commInstance.getPopulation()}</b> people altogether across all cities</P>
                         <p>The <b>southermost</b> city is <b>${commInstance.getMostSouthern().name}</b> at latitude <b>${commInstance.getMostSouthern().lat}</b></p>
                         <p> The <b>northernmost</b> city is <b>${commInstance.getMostNorthern().name}</b> at latitude <b>${commInstance.getMostNorthern().lat}</b><p/>`

                            functionsCityDom.deleteElement(addCityBtnparent);

                        } else {
                            messageArea.innerHTML = `<button class='clsClearMsgBtn'>clear</button>
                                                     <p><b> Enter a valid value </b></p>
                                                     <p><b> Population value must be greater than zero </b></p>
                                                     <p><b> Latitude value must be between -90 and 90 </b></p>
                                                     <p><b> Longitude value must be between -180 and 180 </b></p>`;


                        }
                    } else {
                        messageArea.innerHTML = `<button class='clsClearMsgBtn'>clear</button>
                                                 <p><b> A city with these longitude and<br>and latitude combination already exist </b></p>`;
                    }
                } else {
                    messageArea.innerHTML = `<button class='clsClearMsgBtn'>clear</button>
                                             <p><b> Please enter a name for city </b></p>`;
                }

                break;
            }

            case "cityBtns moveIn": {
                let moveInDivBtnparent = event.target.parentElement; // selects Moved In btn <p> in city div .... 
                let populationfield = moveInDivBtnparent.previousElementSibling.previousElementSibling;
                // the next line selects the left panel navigating from the Move In Btn in city div
                let leftPanelFromMvInBtn = event.target.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling;
                let childrenArr = Array.from(leftPanelFromMvInBtn.children);
                let childrenIds = childrenArr.map((child) => {  // gets the ids' of Left Panel children..
                    return (child.id);
                });
                let cityNameField = event.target.parentElement.parentElement.firstElementChild.textContent;
                let latitudeField = event.target.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.textContent;
                let longitudeField = event.target.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.textContent;

                if (!((childrenIds.includes('idCityFormDiv')) || (childrenIds.includes('idMovedInFormDiv')) || (childrenIds.includes('idMovedOutFormDiv')))) { // only one 'Moved In form' is on at a time                       
                    leftPanelFromMvInBtn.appendChild(functionsCityDom.createMovedInForm(`${cityNameField}, ${latitudeField}, ${longitudeField}`));
                }
                const moveIn = idMovedInBtn; // selects Moved In btn in form ....
                const movedInInpt = idMovedInInpt;
                moveIn.addEventListener("click", (e) => {
                    let moveInFormBtnparent = e.target.parentElement;
                    let childInForm = functionsCityDom.getChildInForm(moveInFormBtnparent);  // Returns the first element child in the withdrawal form
                    let list = commInstance.getCityList();  //returns updated city list
                    // The next line gets the index no of the selected city in the city list
                    let indexNum = commInstance.getCityIndexNum(list, childInForm.textContent);
                    console.log(indexNum);
                    if ((parseFloat(movedInInpt.value) > 0) && (movedInInpt.value !== "")) {
                        //The next line adds the moved in value to the selected city line in the city List..
                        let temp = list[indexNum].movedIn(parseFloat(movedInInpt.value));
                        list = commInstance.getCityList();
                        updateData(list[indexNum]); // Updating the city popl entry on the server with Moved In value
                        populationfield.textContent = `Population: ${temp}`; // updating the population field in city 'div'..

                        messageArea.innerHTML = `<button class='clsClearMsgBtn'>clear</button>
                         <p>There are <b>${commInstance.getPopulation()}</b> people altogether across all cities</P>
                         <p>The <b>southermost</b> city is <b>${commInstance.getMostSouthern().name}</b> at latitude <b>${commInstance.getMostSouthern().lat}</b></p>
                         <p> The <b>northernmost</b> city is <b>${commInstance.getMostNorthern().name}</b> at latitude <b>${commInstance.getMostNorthern().lat}</b><p/>`

                        functionsCityDom.deleteElement(moveInFormBtnparent);

                    } else {
                        messageArea.innerHTML = `<button class='clsClearMsgBtn'>clear</button>
                                             <p><b> Please enter a valid value </b></p>`
                    }
                })
                break;
            }

            case "cityBtns moveOut": {
                let moveOutBtnparent = event.target.parentElement; // selects Moved Out btn <p> in city div .... 
                let populationfield = moveOutBtnparent.previousElementSibling.previousElementSibling.previousElementSibling;
                // the next line selects the left panel navigating from the Move Out Btn in city div
                let leftPanelFromMvOutBtn = event.target.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling;
                let childrenArr = Array.from(leftPanelFromMvOutBtn.children);
                let childrenIds = childrenArr.map((child) => {  // gets the ids' of Left Panel children..
                    return (child.id);
                });
                let cityNameField = event.target.parentElement.parentElement.firstElementChild.textContent;
                let latitudeField = event.target.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.textContent;
                let longitudeField = event.target.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.textContent;

                if (!((childrenIds.includes('idCityFormDiv')) || (childrenIds.includes('idMovedInFormDiv')) || (childrenIds.includes('idMovedOutFormDiv')))) { // only one 'Moved In form' is on at a time                       
                    leftPanelFromMvOutBtn.appendChild(functionsCityDom.createMovedOutForm(`${cityNameField}, ${latitudeField}, ${longitudeField}`));
                }
                const moveOut = idMovedOutBtn; // selects Moved Out btn in form ....
                const movedOutInpt = idMovedOutInpt;
                moveOut.addEventListener("click", (e) => {
                    let moveOutFormBtnparent = e.target.parentElement;
                    let childInForm = functionsCityDom.getChildInForm(moveOutFormBtnparent);  // Returns the first element child in the withdrawal form
                    let list = commInstance.getCityList();  //returns updated city list
                    // The next line gets the index no of the selected city in the city list
                    let indexNum = commInstance.getCityIndexNum(list, childInForm.textContent);
                    // console.log(indexNum);
                    if ((parseFloat(movedOutInpt.value) > 0) && (movedOutInpt.value !== "")) {
                        let currentPopulationValue = parseFloat(list[indexNum].popl);
                        if (parseFloat(movedOutInpt.value) <= currentPopulationValue) {
                            //The next line subtracts the moved out value from the selected city line in the city List..
                            let temp = list[indexNum].movedOut(parseFloat(movedOutInpt.value));
                            list = commInstance.getCityList();
                            updateData(list[indexNum]); // Updating the city popl entry on the server with Moved Out value
                            populationfield.textContent = `Population: ${temp}`; // updating the population field in city 'div'..

                            messageArea.innerHTML = `<button class='clsClearMsgBtn'>clear</button>
                         <p>There are <b>${commInstance.getPopulation()}</b> people altogether across all cities</P>
                         <p>The <b>southermost</b> city is <b>${commInstance.getMostSouthern().name}</b> at latitude <b>${commInstance.getMostSouthern().lat}</b></p>
                         <p> The <b>northernmost</b> city is <b>${commInstance.getMostNorthern().name}</b> at latitude <b>${commInstance.getMostNorthern().lat}</b><p/>`

                            functionsCityDom.deleteElement(moveOutFormBtnparent);

                        } else {
                            messageArea.innerHTML = `<button class='clsClearMsgBtn'>clear</button>
                            <p><b> The current population value is ${currentPopulationValue}</b></p>
                            <p><b>Please enter a value that is less than or equal to ${currentPopulationValue} </b></p> `;
                        }
                    } else {
                        messageArea.innerHTML = `<button class='clsClearMsgBtn'>clear</button>
                           <p><b> Please enter a valid value </b></p>`;
                    }
                })
                break;
            }

            case "clsClearMsgBtn": {
                // Clears the message area...
                let parent = event.target.parentElement;
                parent.innerHTML = `<button class='clsClearMsgBtn'>clear</button>`
                break;
            }

            case "clsDeleteFormCity": {
                functionsCityDom.deleteElement(event.target.parentElement)
                break;
            }

            case "cityBtns deleteCity": {
                // The next line gets the city 'name' field content navigating from the delete button
                let nameFieldContent = event.target.parentElement.parentElement.firstElementChild.textContent;
                // The next line gets the 'key' field content navigating from the delete button
                let keyFieldContent = event.target.parentElement.parentElement.firstElementChild.nextElementSibling.textContent;
                let latitudeFieldContent = event.target.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.textContent;
                let longitudeFieldContent = event.target.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.textContent;

                if (confirm(`Are you sure you want to delete city ${nameFieldContent}, ${latitudeFieldContent}, ${longitudeFieldContent}`)) { // pops up a confirm delete message box               
                    let list1 = commInstance.getCityList();   // returns an updated city list
                    // The next line gets the index of a city list entry based on the key field contents...
                    let index1 = commInstance.getCityIndexNumKey(list1, keyFieldContent)
                    let keyList = commInstance.getKeys();
                    let key = keyList[index1];
                    deleteData(key);   // deletes selected entry from the server
                    //the next line removes the city 'div' with the selected city name(nameFieldContent)
                    functionsCityDom.deleteElement(event.target.parentElement.parentElement)
                    // The next line deletes a city  from the city List...
                    list1 = commInstance.deleteCity(index1);

                }
                messageArea.innerHTML = `<button class='clsClearMsgBtn'>clear</button>
           <p>There are <b>${commInstance.getPopulation()}</b> people altogether across all cities</P>
           <p>The <b>southermost</b> city is <b>${commInstance.getMostSouthern().name}</b> at latitude <b>${commInstance.getMostSouthern().lat}</b></p>
           <p> The <b>northernmost</b> city is <b>${commInstance.getMostNorthern().name}</b> at latitude <b>${commInstance.getMostNorthern().lat}</b><p/>`

                break;
            }

            default:
                console.log("Not Programmed for :", event.target);
        }
    })  