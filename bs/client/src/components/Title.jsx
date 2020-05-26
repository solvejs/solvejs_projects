import React, { Component } from 'react';

/* export default function BumperTitle(props) { // component
    return <h1>{props.topHeader}</h1>; // passing in banner from title
}

// setting variable to Title component
const bumperTitle = <BumperTitle topHeader="Bumper Stickers - Choose Wisely" />;

ReactDOM.render(
    bumperTitle,
    document.getElementById('root')
); */

export default class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const pageTitle = "Bumper Stickers - Choose Wisely" ;
        return (
            <h1>{pageTitle}</h1>
            )
        }
    }
    
    // const bumperTitle = <Title topHeader="Bumper Stickers - Choose Wisely" />;