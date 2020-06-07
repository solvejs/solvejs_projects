import React, { Component, Fragment } from 'react';
// import { bumperStickers } from './BumpersGenerator';

class SoloBumper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: 'bumper bumper-long',
            display: "inline-block",
            text: 'Add to Cart',
            textStyle: {},
            inCartTotal: 0,
            inCartItems: [],
            totalNumSpan: this.totalNumSpan
            //bumpersPaged: this.generatePagesWithBumpers,
            //pages: this.counter,
            //currentPageNumber: 1
        };
        this.addToCart = this.addToCart.bind(this);
        this.handleClick = this.handleClick.bind(this);
        //this.removeAddToCart = this.removeAddToCart(this);
        // // this.bumper32 = this.bumper32.bind(this);
        // //this.counter = this.pagesCounted;
        // this.sendToParent = this.sendToParent.bind(this);
    }
    // sendToParent = () => {
    //     this.props.updateParent(this.state.bumpersPaged, this.state.pages);
    // };
    cart = document.getElementsByClassName('cart');
    totalNumSpan = document.createElement('span').append('this.state.inCartTotal');

    addToCart = () => {
        this.setState({
            display: 'inline-block'
        })
    }
    removeAddToCart = () => {
        this.setState({
            display: "none"
        })
    }
    // generatePagesWithBumpers = {
    // }
    // counter = [];
    // bumper32EachArray = bumperStickers; // bring in all
    // componentDidMount() {
    //         this.sendToParent();
    // }
    // bumper32 = () => {
    //     let bumpArrLength = this.bumper32EachArray.length;
    //     let pages = Math.floor((bumpArrLength/32) +1);
    //     let count = [];
    //     let pageHolder = (item) => {
    //         while(item > 0) {
    //             count.unshift(item);
    //             this.counter.unshift(item);
    //             item-= 1;
    //         }
    //         this.counter = count;
    //         console.log('this counter: ', this.counter)
    //     }
    //     pageHolder(pages);
    //     //let result = [];
    //     let countAssign = () => {
    //         let j = 0;
    //         let loopItems = (result) => {
    //             result = [];
    //             for(let i=0; i<32 && j!==bumpArrLength; i++) {
    //                 result.push(this.bumper32EachArray[j]);
    //                 j++;
    //             }
    //             return result;
    //         }
    //         for (let item of count) {
    //             this.generatePagesWithBumpers[item] = {
    //                 page: item,
    //                 bumpers: loopItems()
    //             }
    //             // result = [];
    //         }
    //     }
    //     countAssign()
    //     }
    handleClickChangeAddToCart = (event) => {
        this.setState({
            textStyle: {color: 'green', fontWeight: 'bold', fontSize: 'medium'}
        });
        let itemStored = localStorage.setItem(`cartItemLocal-${event.target.parentNode.previousSibling.id}`, '1'/* , event.target.parentNode.previousSibling.outerHTML */);
        this.state.inCartItems.push(itemStored);
        console.log('client side localstorage', localStorage);
    }
    handleClick = (event) => {
        console.log(event.target.parentNode.previousSibling, 'event click add to cart solobump'); // returns div with bumper id#
        this.setState({
            text: 'Item In Cart',
        });
        const locStor = (id, query, ) => {
            localStorage.setItem(`cartItemLocal-${event.target.parentNode.previousSibling.id}`, 1/* , event.target.parentNode.previousSibling.outerHTML */);
        } 

        let itemStored = localStorage.setItem(`cartItemLocal-${event.target.parentNode.previousSibling.id}`, '1'/* , event.target.parentNode.previousSibling.outerHTML */);
        this.state.inCartItems.push(itemStored);
        console.log('client side localstorage', localStorage);
    }
    render() {
        // (this.bumper32());
        const styles = {
            containerStyle: {
                display: this.state.display
            }
        }
        const { containerStyle } = styles;
        return (
              //  return (
                  <div className={this.state.className}>
                    {this.props.children}
                    {/* <div onMouseOver={this.addToCart} id={i} key={i++} className={this.state.className}>{item} */}
                    <button style={containerStyle} className="add-to-cart" onClick={this.props.clickAddHandle}>
                    <CartText text={this.state.text} style={this.state.textStyle} clickAddCartChange={this.handleClickChangeAddToCart}/>
                    </button>
                    </div>
                        )
                //}
                //)
               // )
    }
}
function CartText(props) {
    return(
        <Fragment>
        <span style={props.style} onClick={props.clickAddCartChange}>{props.text}</span>
        </Fragment>
    )
}
export {SoloBumper, CartText};