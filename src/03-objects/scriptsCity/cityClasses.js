
class City {
    constructor(name, key, lat, long, popl) {
        this.name = name;
        this.key = key;
        this.lat = parseFloat(lat);
        this.long = parseFloat(long);
        this.popl = parseFloat(popl);
    }

    show() {
        return `Name: ${this.name}, Key: ${this.key}, Lat: ${this.lat}, Long: ${this.long}, Population: ${this.popl}`
    }
    movedIn(value) {
        return (this.popl += parseFloat(value));
    }

    movedOut(value) {
        return (this.popl -= parseFloat(value));
    }

    howBig() {
        if (this.popl > 100000) return "City";
        if (this.popl > 20000) return "Large Town";
        if (this.popl > 1000) return "Town";
        if (this.popl > 100) return "Village";
        if (this.popl > 0) return "Hamlet";

        return "city not in existence";
    }
}

class Community {
    constructor() {
        this.cityList = []

    }

    createCity(name, key, lat, long, popl) {
        this.city = new City(name, key, lat, long, popl);
        this.cityList.push(this.city);
        return this.city;
    }

    getKeys() {
        this.keyList = this.cityList.map((entry) => {
            return ({ key: entry.key })
        })
        return this.keyList;
    }

    createCityFromServer(serverData) {
        this.serverDataList = serverData.map((city) => {
            return this.createCity(city.name, city.key, city.lat, city.long, city.popl)
        });
        return this.serverDataList;
    }

    getCity(key) {
        let cityKey = this.cityList.filter((city) => city.keyVal === key);
        return cityKey[0];
    }

    whichSphere(city) {
        if (city.lat < 0) return "Southern Hemisphere";
        return "Northern Hemisphere";
    }

    getPopulation() {
        return this.cityList.reduce((acc, city) => { return acc + Number(city.popl) }, 0);
    }

    getMostNorthern() {
        let north = this.cityList.sort((a, b) => b.lat - a.lat);
        return north[0];
    }

    getMostSouthern() {
        let south = this.cityList.sort((a, b) => a.lat - b.lat);
        return south[0];
    }

    deleteCity(indexNum) {

        this.cityList = this.cityList.filter((city, index) => {
            return (index !== indexNum);  // filters based on index number of entry in the city List
        });
        return this.cityList;
    }

    getCityList() {
        return this.cityList;
    }

    compareLongLat(lat, long) {
        let result = false;
        this.cityList.forEach((obj) => {
            if ((obj.lat === lat) && (obj.long === long)) {
                result = true;
            }
        })
        return result;
    }

    getCityIndexNum(list, eltTextContent) {
        let value;
        list.forEach((entry, index) => {
            if ((eltTextContent.includes(entry.lat)) && (eltTextContent.includes(entry.long))) {
                value = index;
            }
        })
        return value;
    }

    getCityIndexNumKey(list, keyFieldContent) {
        let value;
        list.forEach((entry, index) => {
            if( keyFieldContent.includes(entry.key)) {
                value = index;
            }
        })
        return value;
    }


}










export { City, Community };
