import React, { Component } from 'react';

export default class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            display: false
        })
    }
    render() {
        return <div className='popup' style={{zIndex: '100', position: 'fixed', top: '15vh', left: '25%', width: '500px', height: '500px', textAlign: 'center',  backgroundColor: 'rgb(0, 181, 255)', display: this.state.display ? 'block' : 'none'}} onClick={this.handleClick}><span style={{lineHeight: '500px'}}>Get the Newsletter &gt; future popup centered</span>
        </div>
    }
}