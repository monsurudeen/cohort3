import React from "react"

class MyComp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.whatToClick}>
                    Push Me from mycomponent
                </button>
                <h1>{this.props.whatToSay}</h1>
            </div>
        )
    }
}

export default MyComp;
