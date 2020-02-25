
const url = 'http://localhost:5000/';

async function postData(url = '' , data = {} ) {
    try {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST',     // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',       // no-cors, *cors, same-origin
            cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow',         // manual, *follow, error
            referrer: 'no-referrer',    // no-referrer, *client
            body: JSON.stringify(data)  // body data type must match "Content-Type" header
        });

        const json = await response.json();    // parses JSON response into native JavaScript objects
        json.status = response.status;
        json.statusText = response.statusText;
        return json;

    }
    catch (error) {
        return "Sorry, our server is down at the moment. Please try again later.";
    }
}

async function checkServerConnection () {
    const url = "http://127.0.0.1:5000/";
    return await postData(url + 'all');
 };

async function clearData() {
    return await postData(url + 'clear');
};

async function getData() {
    let data = await postData(url + 'all');
    return data;
};

async function addData(cityClassData) {                              // An entry line in the city List.
    let data = await postData(url + 'add', cityClassData);   
    return data;
};

async function deleteData(key) {                                     // a selected line in the key List array...
    let data = await postData(url + 'delete', key);
    return data;
};

async function updateData(updatedCityObj) {                           // An entry line in the city list with updated fields
    let data = await postData(url + 'update', updatedCityObj);
    return data;
};


export { postData, getData, addData, clearData, deleteData, updateData };
