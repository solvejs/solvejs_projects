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
        // this.handleInCart = this.handleInCart.bind(this);
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
        // localStorage | cart add / remove
        // localStorage.clear();
        let currItem = `cartItemLocal-${event.target.parentNode.previousSibling.id}`;
        let tempStor = localStorage.getItem("inCartLocStoreArr") !== null ?
        localStorage.getItem("inCartLocStoreArr") : (
            window.localStorage.setItem("inCartLocStoreArr", JSON.stringify([currItem])),
            window.localStorage.setItem("inCartLocStoreCount", "1"),
            window.localStorage.getItem("inCartLocStoreArr")
        );

        let itemsParsedFromLocStor;
        itemsParsedFromLocStor = JSON.parse(tempStor);
        itemStored();

        function itemStored() {
            let currIndex =
        itemsParsedFromLocStor.indexOf(currItem) !== null ?
        itemsParsedFromLocStor.indexOf(currItem) : (
            undefined
        )
            console.log('currIndex:', currIndex, 'itemsParsedFromLocStor:', itemsParsedFromLocStor, itemsParsedFromLocStor.length, 'tempStor:', tempStor, 'currItem:', currItem, 'window.locst:', window.localStorage.key('inCartLocStoreArr').length)

        if(currIndex !== -1) { // needed -1 since -1 when null in array
            itemsParsedFromLocStor.splice(currIndex, 1);
            window.localStorage.setItem("inCartLocStoreCount", `${itemsParsedFromLocStor.length}`)
            localStorage.setItem("inCartLocStoreArr", JSON.stringify(itemsParsedFromLocStor));
        } else {
            itemsParsedFromLocStor.push(`cartItemLocal-${event.target.parentNode.previousSibling.id}`);
            window.localStorage.setItem("inCartLocStoreCount", `${itemsParsedFromLocStor.length}`)
            localStorage.setItem("inCartLocStoreArr", JSON.stringify(itemsParsedFromLocStor));
        }
        }
        
        // this.state.textStyle.color === 'green' ? 
        // this.setState(prevState => ({
        //     textStyle: {color: 'orange', fontWeight: 'bold', fontSize: 'medium'},
        //     inCartItems: itemsParsedFromLocStor,
        //     text: 'Add to Cart'
        // })) : this.setState(prevState => ({
        //     textStyle: {color: 'green', fontWeight: 'bold', fontSize: 'medium'},
        //     inCartItems: itemsParsedFromLocStor,
        //     text: 'In Cart'
        // }))
    }
    handleInCart = () => {
        this.setState(prevState => ({
            textStyle: {color: 'red', fontWeight: 'bold', fontSize: 'medium'},
            text: 'testing handleInCart'
        }))
        // let tempLocStorCheck = localStorage.getItem('inCartLocStoreArr');
        // let tempLocStorParseHolder = JSON.parse(tempLocStorCheck);
        // let found = `cartItemLocal-${}`;
        // if(tempLocStorParseHolder.includes(found)) {
        //     console.log(event.target.parentNode.previousSibling, 'found item...')
        //     this.setState({
        //         text: 'testing handleInCart'
        //     })
        // }
    }
    handleClick = (event) => { 
        // not being used currently > see handleClickChangeAddToCart
        console.log(event.target.parentNode.previousSibling, 'event click add to cart solobump'); // returns div with bumper id#
        this.setState({
            text: 'Item In Cart',
        });
        // const locStor = (id, query, ) => {
        //     localStorage.setItem(`cartItemLocal-${event.target.parentNode.previousSibling.id}`, 1/* , event.target.parentNode.previousSibling.outerHTML */);
        // } 

        // let itemStored = localStorage.setItem(`cartItemLocal-${event.target.parentNode.previousSibling.id}`, '1'/* , event.target.parentNode.previousSibling.outerHTML */);
        // this.state.inCartItems.push(itemStored);
        // console.log('client side localstorage', localStorage);
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
                  <div className={this.state.className} style={{}}>
                    {this.props.children}
                    {/* <div onMouseOver={this.addToCart} id={i} key={i++} className={this.state.className}>{item} */}
                    <button style={containerStyle} className={this.props.buttonClass} onClick={this.props.clickAddHandle}>
                    <CartText text={this.props.text} style={this.state.textStyle} className={this.props.buttonClass} clickAddCartChange={this.handleClickChangeAddToCart} checkInCart={this.handleInCart}/>
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
        <span style={props.style} onClick={props.clickAddCartChange} onLoad={props.checkInCart}>{props.text}</span>
        </Fragment>
    )
}
export {SoloBumper, CartText};