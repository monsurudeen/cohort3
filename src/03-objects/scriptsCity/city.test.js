
import {City, Community} from './cityClasses.js'


describe('Testing City class', () => {
    const testCity = new City("Lagos", 2, 89.2, 50.6, 250000);


    test('City properties', () => {
        expect(testCity.name).toEqual("Lagos");
        expect(testCity.popl).toEqual(250000);
    });

    test('show() returns display string of properties', () => {
        expect(testCity.show()).toEqual("Name: Lagos, Key: 2, Lat: 89.2, Long: 50.6, Population: 250000");
    });

    test('movedIn(value) adds value to popl', () => {
        testCity.movedIn(1000);
        expect(testCity.popl).toEqual(251000);
    });

    test('movedOut(value) subtracts value from popl', () => {
        testCity.movedOut(500);
        expect(testCity.popl).toEqual(250500);
    });

    test('howBig() returns appropriate classification string', () => {
        expect(testCity.howBig()).toEqual("City");
    });

});

describe('Testing Community Controller class', () => {
    test("Community:  createCity and getCityList Methods", () => {
        let region = new Community;
        
        region.createCity("Villa", 1, 27.245, -80.250, 100);
        expect(region.createCity("Abuja", 2, 77.245, -65.250, 1020)).toEqual                        
               ({ "name": "Abuja", "key": 2, "lat": 77.245, "long": -65.250, "popl": 1020 });

        expect(region.getCityList()).toEqual
            (
               [{
                    "name": "Villa",
                    "key": 1,
                    "lat": 27.245,
                    "long": -80.25,
                    "popl": 100
                },
                {
                    "name": "Abuja",
                    "key": 2,
                    "lat": 77.245,
                    "long": -65.25,
                    "popl": 1020
                }
            ]);

    });

    test("Community: deleteCity Method", () => {
        let region1 = new Community;
    
        region1.createCity("Calgary", 1, 65.150, -56.250, 250);
        region1.createCity("Toronto", 2, 86.225, -65.250, 1020);
        region1.createCity("Madrid", 3, -43.5, -27.125, 10000);
        
        expect(region1.deleteCity(1)).toEqual([
            {
                name: 'Calgary',
                key: 1,
                lat: 65.150,
                long: -56.250,
                popl: 250
            },
            {
                name: 'Madrid',
                key: 3,
                lat: -43.5,
                long: -27.125,
                popl: 10000
            }]);
    
    });
    
    test("check getPopulation, getMostSouthern, getMostNorthern and whichSphere Methods", () => {
        let region2 = new Community;
    
        region2.createCity("Lagos", 1, 65.150, -56.250, 10000);
        region2.createCity("Lisbon", 2, 86.225, -65.250, 2000);
        region2.createCity("London", 3, -43.5, -27.125, 10000);
        region2.createCity("Ulanbataar", 4,  27.245, -80.250, 10000);
        region2.createCity("Kinshasa", 5, 77.245, -65.250, 100);
        
        expect(region2.getPopulation()).toEqual(32100);
        expect(region2.getMostSouthern().name).toEqual("London");
        expect(region2.getMostNorthern().name).toEqual("Lisbon");
        expect(region2.whichSphere({name:"Lagos", key:1, lat:65.150, long:-56.250, popl:10000})).toEqual("Northern Hemisphere")
    });
    
   
})