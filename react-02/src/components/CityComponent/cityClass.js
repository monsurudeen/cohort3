class CityClass {
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
        this.cityList = [];
        this.sortedCityList = [];
        this.cityDefault = [
            ['lagos', 1, -78, 120, 500], 
            ['boston', 2, 62, -56, 1100],
            ['harare', 3, -49, 99, 10000],
            ['bogota', 4, 22, -15, 50000],
            ['abuja', 5, 35, 79, 200000] 
        ];        
        this.cityType = '';
        this.cityTypeList = [];
    }

    createCity([name, key, lat, long, popl]) {
        this.city = new CityClass(
               [name, key, lat, long, popl][0], 
               [name, key, lat, long, popl][1],
               [name, key, lat, long, popl][2],
               [name, key, lat, long, popl][3],
               [name, key, lat, long, popl][4]
             );
        this.cityType = this.city.howBig();
        this.cityTypeList.push(this.cityType);                                                          
        this.cityList.push(this.city);
        this.sortedCityList = this.sortedCities();         
        return this.city;       
    }

    createCityDefault(cityArr) {        
        cityArr.forEach((city) => {            
            this.createCity(city)
        } )
       // this.cityType = '';
    }

    createCityFromServer(serverData) {
        let serverDataList = serverData.map((city) => {
            return this.createCity([city.name, city.key, city.lat, city.long, city.popl])
        });
        return serverDataList;
    }

    getCityType() {
        if(this.cityType !== ''){
            return this.cityType;
        }
    }

    getKeys() {
        this.keyList = this.cityList.map((entry) => {
            return ({ 'key': entry.key })
        })
        return this.keyList;
    }

    getServerHighestKey(list) {
        let keyz = list.sort((a, b) => b.key - a.key);
        return keyz[0].key;
    }

    getHighestKey() {
        let keyz = this.cityList.sort((a, b) => b.key - a.key);
        return keyz[0].key;
    }

    sortedCities() {
         let cities = this.cityList.sort((a, b) => a.key - b.key);
        return [...cities];
    }
    
    getCity(key) {
        let cityKey = this.cityList.filter((city) => city.key === key);
        return cityKey[0];
    }

    whichSphere(cityClass) {
        if (cityClass.lat < 0) return "Southern Hemisphere";
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
   
    latlongList() {
        let latlong = this.cityList.map((list) => (
            {'lat':list.lat, 'long':list.long}));

        return latlong;
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

   


}










export { CityClass, Community };