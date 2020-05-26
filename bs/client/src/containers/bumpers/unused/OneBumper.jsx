import React, { Component, Fragment } from '../containers/bumpers/unused/react';
import { bumperStickers } from './BumpersGenerator';
import { SoloBumper } from '../SoloBumper';

class OneBumper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: 'bumper bumper-long',
            bumpersPaged: this.generatePagesWithBumpers,
            // need to refactor this.generatePagesWithBumpers as it is setting state from other than inside constructor
            pages: this.counter,
            currentPageNumber: 1,
            currentBumpersOnPage: ['OneBumper', 'currentBumpersOnPage', 'need to loop these', ' > pages working <', '> clicks working <']
        };
        // this.addToCart = this.addToCart.bind(this);
        this.bumper32 = this.bumper32.bind(this);
        //this.counter = this.pagesCounted;
        this.sendToParent = this.sendToParent.bind(this);
    }
    sendToParent = () => {
        this.props.updateParent(this.state.bumpersPaged, this.state.pages, this.state.bumpersPaged[1].bumpers); // had to load bumperspaged directly to load right first page >> updated via clicks on page numbers in bumpersgenerator.jsx via state change
    };
    // addToCart = () => {
    //     this.setState({
    //         className:  "bumper bumper-long testing"
    //     })
    // }
    generatePagesWithBumpers = {
    }
    counter = [];
    bumper32EachArray = bumperStickers; // bring in all
    componentDidMount() {
            this.sendToParent();
            this.setState({
                //currentPageNumber: 1,
                //currentBumpersOnPage: this.state.bumpersPaged[2].bumpers
            })
    }
    bumper32 = () => {
        // candidate for memoization
        let bumpArrLength = this.bumper32EachArray.length;
        let pages = Math.floor((bumpArrLength/32) +1);
        let count = [];
        let pageHolder = (item) => {
            while(item > 0) {
                // attempting to change to object to utilize state ==>  className: 'bumper bumper-long'}
                count.unshift({page: item, pageClass: 'page-number'});
                this.counter.unshift({page: item, pageClass: 'page-number'});
                item-= 1;
            }
            this.counter = count;
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
            let zForClass = 1;
            for (let num in count) {
                this.generatePagesWithBumpers[zForClass] = {
                    page: Number(num)+1,
                    // key: zForClass,
                    bumpers: loopItems()
                }
                zForClass++;
                //onsole.log('dddddddddddddd', this.generatePagesWithBumpers);
                // console.log('bumpers1: ', this.state.bumpersPaged[1])
                // result = [];
            }
        }
        countAssign()
        }
    render() {
        (this.bumper32());
        //let i = 0;
        return (
            Object.values(this.props.currBumpers).map( (item, e) => {
                return (
                    <Fragment>
                    <SoloBumper>
                    <div style={{border: "1px solid black", height: 75, verticalAlign: "middle"}}>
                    {item}</div>
                    </SoloBumper>
                    </Fragment>
                        )
                    }
                    )
                    )
                }
}

export {OneBumper};