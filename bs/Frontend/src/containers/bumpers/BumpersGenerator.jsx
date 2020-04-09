import React, {Component} from 'react';
import {bumperStickers} from './bumpers';
//import bumperStickers from './bumpers';

class BumpersDiv extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
        clickAdd = () => {
            onmouseover = () => {
                this.setState(
                    {addToCart: !false}
                )
            }
        }
        render() {
            return (
                <main className="main-content">
                <div className="content-grid" id="main-wrapper">
                <Bumper bumpers = {bumperStickers}/>
                </div>
                </main>
                )
        }
}
class Bumper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addToCart: false
        };
    }
    render() {
        return (
            <div className="content-grid" id="main-wrapper">
            <div id="bumper-left" className="content-left bumper-flex">
            <OneBumper bumpers = {this.props.bumpers} />
            </div>
            </div>
        )
    }
}

function OneBumper(props) {
    return (
            props.bumpers.map( (item) => {
                return (<div className="bumper bumper-long">{item}</div>);
            }
            )
    )
}
function PagingBumpers() {
    return (
        {}
    )
}
export default BumpersDiv;