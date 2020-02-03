import React from 'react'


function CitySummary(props) {


    const cityStates = props.cityStates;
    const citySummary = props.citySummary;
    const createCityChecklist = props.createCityChecklist

    const detail = () => {
        if (props.list.length === 0) {
            return
        } else {
            return (
                'The northernmost city is ' + citySummary[0].name + ' at latitude ' + citySummary[0].lat + '\n' +
                'The southernmost city is ' + citySummary[1].name + ' at latitude ' + citySummary[1].lat + '\n' +
                'The total population is ' + citySummary[2] + '.'
            )
        };
    }


    if (props.list.length === 0) {
        if (((cityStates[0] === 1)||(cityStates[0] === false))
              && (!(createCityChecklist[0]))) {
            return 'New city NOT created, enter valid city values';
        } else {
            return null
        }

    } else if (props.list.length !== 0) {
        if (cityStates[0] === false) {
            return <p>{detail()}</p>;
        }

        if (cityStates[0] === 1) {
            if ((createCityChecklist[1]) && (createCityChecklist[0])) {
                return (<div>New city will NOT be added, longitude and latitude combination already exist!!! <br />
                    
                </div>
                )
            } else if ((!(createCityChecklist[0]))) {
                return (<div>New city NOT added,enter valid city values!!! <br />
                    <p>{detail()}</p>
                </div>
                )
            } else {
                return <p>{detail()}</p>;
            }
        }

        if (cityStates[0] === 2) {
            if ((parseFloat(cityStates[5]) < 0)) {
                return (<div>Enter a value greater than 0 !!! <br />
                    <p>{detail()}</p>
                </div>
                )
            } else {
                return <p>{detail()}</p>;
            }
        }

        if (cityStates[0] === 3) {
            if (cityStates[6] === '') {
                return (<div>Enter a value greater than zero but less than city population !!! <br />
                    <p>{detail()}</p>
                </div>
                )
            } else {
                return <p>{detail()}</p>;
            }
        }
    }
}

export default CitySummary;