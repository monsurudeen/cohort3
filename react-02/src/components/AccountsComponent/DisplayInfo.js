import React from 'react'

function DisplayInfo(props) {
    const acctStates = props.acctStates;
    const acctSummary = props.acctSummary;
    const detail = () => {
        if (props.list.length === 0) {
            return
        } else {
            return (
                'The highest valued account is ' + acctSummary[0].accName + ' with ' + acctSummary[0].bal + '\n' +
                'The lowest valued account is ' + acctSummary[1].accName + ' with ' + acctSummary[1].bal + '\n' +
                'The total of all accounts is ' + acctSummary[2] + '.'
            )
        };
    }


    if (props.list.length === 0) {
        if ((acctStates[0] === 1) && (acctStates[1] === '' || acctStates[2] === '')) {
            return 'enter acct values';
        } else {
            return null
        }

    } else if (props.list.length !== 0) {
        if (acctStates[0] === false) {
            return <p>{detail()}</p>;
        }

        if (acctStates[0] === 1) {
            if (acctStates[1] === '' || acctStates[2] === '') {
                return 'enter acct values';
            } else {
                return detail();
            }
        }

        if (acctStates[0] === 2) {
            if (acctStates[3] === '') {
                return 'Enter deposit amount'
            } else {
                return detail();
            }
        }

        if (acctStates[0] === 3) {
            if (acctStates[4] === '') {
                return 'Enter an amount to withdraw'
            } else {
                return detail();
            }
        }
    }

}







export default DisplayInfo;
