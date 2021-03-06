import React, { Component } from '../containers/bumpers/react';
import { bumperStickers } from './BumpersGenerator';

class OneBumper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: 'bumper bumper-long',
            bumpersPaged: this.generatePagesWithBumpers,
            pages: this.counter,
            currentPageNumber: 1
        };
        this.addToCart = this.addToCart.bind(this);
        this.bumper32 = this.bumper32.bind(this);
        //this.counter = this.pagesCounted;
        this.sendToParent = this.sendToParent.bind(this);
    }
    sendToParent = () => {
        this.props.updateParent(this.state.bumpersPaged, this.state.pages);
    };
    addToCart = () => {
        this.setState({
            className:  "bumper bumper-long testing"
        })
    }
    generatePagesWithBumpers = {
    }
    counter = [];
    bumper32EachArray = bumperStickers; // bring in all
    componentDidMount() {
            this.sendToParent();
    }
    bumper32 = () => {
        let bumpArrLength = this.bumper32EachArray.length;
        let pages = Math.floor((bumpArrLength/32) +1);
        let count = [];
        let pageHolder = (item) => {
            while(item > 0) {
                count.unshift(item);
                this.counter.unshift(item);
                item-= 1;
            }
            this.counter = count;
            console.log('this counter: ', this.counter)
        }
        pageHolder(pages);
        //let result = [];
        let countAssign = () => {
            let j = 0;
            let loopItems = (result) => {
                result = [];
                for(let i=0; i<32 && j!==bumpArrLength; i++) {
                    result.push(this.bumper32EachArray[j]);
                    j++;
                }
                return result;
            }
            for (let item of count) {
                this.generatePagesWithBumpers[item] = {
                    page: item,
                    bumpers: loopItems()
                }
                // result = [];
            }
        }
        countAssign()
        }
    render() {
        (this.bumper32());
        let i = 0;
        return (
            this.props.bumpers.map( (item, e) => {
                return (
                    <div onMouseOver={this.addToCart} id={i} key={i++} className={this.state.className}>{item}</div>
                        )
                }
                )
                )
    }
}

export {OneBumper};