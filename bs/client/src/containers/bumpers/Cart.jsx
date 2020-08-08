import React, { createContext, Children, Component, Fragment, useState } from 'react';
import {SoloBumper} from '../bumpers/SoloBumper';
import BumpersContext from './BumpersAndCats';
import LoginControl from '../Authentication/LoginControl';
import {randCol} from '../../utils/randColors';

function checkLoggedIn() {
    console.log('purchased items. thanks.');
}

const Cart = (props) => {
    return  (
                <BumpersContext.Consumer>
                    {
                        context =>
                        <Fragment>
                        <CartBumpers contextData={context.apiData}>
                        {Children}
                        </CartBumpers>
                        </Fragment>
                    }
                </BumpersContext.Consumer>
    )
        }

class CartBumpers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            destrData: this.props.contextData,
            currentCartTotal: JSON.parse(localStorage.getItem("inCartLocStoreCount")),
            visibility: false,
            purchButtonDisabled: true,
            titleForButton: 'Please login to complete your order.',
            totalCost: 0
        }
    }
    /* {cartButtonStyle: '',
                cartStatus: '',
                category: '',
                id: 1,
                inCart: '',
                title: 'did not load'} */
    componentWillReceiveProps() {
        console.log(this.state.destrData, 'inside did mount')
        this.setState({
            destrData: this.props.contextData,
            currentCartTotal: JSON.parse(localStorage.getItem("inCartLocStoreCount")),
            totalCost: document.querySelectorAll('span.cart-span') ? Number(localStorage.getItem('inCartLocStoreCount')) * 1.99 : null
        });
        
        // this.cartNumToIcon();
    }
    componentDidUpdate() {  // using with componentDidMount to update properly
        let cartIcon = document.querySelector('li.cart');
        let currStateTotal;
        currStateTotal = this.state.currentCartTotal;
        let nodeSpan = document.createElement('span');
        cartIcon.appendChild(nodeSpan)
        nodeSpan.textContent = '';
        
        cartIcon.childNodes[1].textContent = currStateTotal;
        if(cartIcon.children.length > 2) {
            cartIcon.removeChild(cartIcon.childNodes[2])
        }
    }
    componentDidMount() { // using with componentDidUpdate to update properly
        // let inCartLocStorCount = localStorage.getItem("inCartLocStoreCount") !== (null || undefined) ? JSON.parse(localStorage.getItem("inCartLocStoreCount")) : 0 ;
        let cartIcon = document.querySelector('li.cart');
        let currStateTotal;
        currStateTotal = this.state.currentCartTotal;
        let nodeSpan = document.createElement('span');
        cartIcon.appendChild(nodeSpan)
        nodeSpan.textContent = '';
        cartIcon.childNodes[1].textContent = currStateTotal;
        if(cartIcon.children.length > 2) {
            cartIcon.removeChild(cartIcon.childNodes[2])
        }
        this.setState(prevState => ({
            totalCost: Number(localStorage.getItem('inCartLocStoreCount')) * 1.99
        }))
    }
//     handleChange = () => {
//         this.setState({
//             cartLoggedinStatus: document.cookie.split(';').find( (item) => item.includes('bsLoggedIn')) ? 'logged in' : 'not logged in'
//     })
// }
    cartNumToIcon = () => {
        
        // cartIcon.append(spanText)
    }
    handleClickChangeAddToCart = (event) => {
        // localStorage | cart add / remove
        // localStorage.clear();
        let currItem = `cartItemLocal-${event.target.parentNode.previousSibling.id}`;
        let tempStor = localStorage.getItem("inCartLocStoreArr");

        let itemsParsedFromLocStor;
        itemsParsedFromLocStor = JSON.parse(tempStor);
        itemStored();

        function itemStored() {
            let currIndex =
        itemsParsedFromLocStor.indexOf(currItem);

        if(currIndex !== -1) { // needed -1 since -1 when null in array
            itemsParsedFromLocStor.splice(currIndex, 1);
            localStorage.setItem("inCartLocStoreArr", JSON.stringify(itemsParsedFromLocStor));
        }
        // else {
        //     itemsParsedFromLocStor.push(`cartItemLocal-${event.target.parentNode.previousSibling.id}`);
        //     localStorage.setItem("inCartLocStoreArr", JSON.stringify(itemsParsedFromLocStor));
        // }
        }
        this.setState(prevState => ({
            currentCartTotal: itemsParsedFromLocStor.length,
            totalCost: Number(localStorage.getItem('inCartLocStoreCount')) * 1.99
        }))
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
    handleHoverCartButton = () => {
        if(document.cookie.split(';').find( (item) => item.includes('bsLoggedIn'))) {
            this.setState({
                titleForButton: '',
                purchButtonDisabled: false
            })
        } else {
            this.setState({
                titleForButton: 'Please login to complete your order.',
                purchButtonDisabled: true
            })
        }
    }
    handleOrder = async () => {
        // need order page
        // need func to remove items in localstorage
        // send to api
        // redirect home
        const inCart = localStorage.getItem('inCartLocStoreArr');
        const response = await fetch('api/order', {
            method: 'POST',
            referrerPolicy: 'same-origin',
            headers: {
                'accept': 'text/html',
                'content-type': 'application/json',
                // cookie: document.cookie.split(';').find(item => item.includes('bsLoggedIn'))
            },
            // mode: 'same-origin',
            // credentials: 'same-origin', 
            body: JSON.stringify(
                {"user": "test",
                "items": JSON.stringify(inCart)}, // get text
            )
        })
        .then(response => console.log('response.json()', response))
        // .then(data => console.log('after res data', data))
        .then(localStorage.setItem("inCartLocStoreArr", "[]"),localStorage.setItem("inCartLocStoreCount", 0))
        .then(this.setState({
            visibility: !this.state.visibility
        }))
    }
    totalChange = () => {
        this.setState(prevState => ({
            totalCost: document.querySelectorAll('span.cart-span') ? Number(localStorage.getItem('inCartLocStoreCount')) * 1.99 : null
        }))
    }
    render() {
        const unparsedLocStor = localStorage.getItem('inCartLocStoreArr') || "[]";
        let parsedLocStor = unparsedLocStor !== null || "[]" ? JSON.parse(unparsedLocStor) : null;
        let parseData = JSON.parse(JSON.stringify([...this.props.contextData]));
        // let test2 = JSON.stringify([...props.contextData]).valueOf();
        // parseData.map(item => destrData.push(item))
        // let test3 = JSON.parse(test2)
        if(this.state.destrData.length !== 0 && parsedLocStor.length > 0) {
            return (
                <div id='cart-content' className='main-content'>
                <h2 style={{textAlign: 'center', fontWeight: 'bold'}}>Current Cart Items</h2>
                <div id="main-wrapper" className="content-grid">
                <div id="bumper-left" className="content-left bumper-flex" key={7}>
                {
                    parsedLocStor.map(item =>
                    <SoloBumper key={Number(item.substring(14))} clickCartButtonHandle={this.handleClickChangeAddToCart} text={'Remove - $1.99'} buttonClass={'add-to-cart-selected'}> <div id={this.state.destrData[Number(item.substring(14))].id} style={{display: 'block', width: '100%', height: "75px"}}>
                    <span className='cart-span' onClick={this.totalChange} style={{height: '75px', lineHeight: '75px', display: 'inline-block', color: randCol(), backgroundColor: randCol()}}>{this.state.destrData[Number(item.substring(14))].title}
                    </span></div>
                    </SoloBumper>
                    )
                }
                </div>
                <div style={{textAlign: 'center',margin: 'auto', marginTop: '15px', width: 'max-content'}}>
                <div style={{textAlign: 'left'}}>
                <CCPay show={!this.state.visibility} totalCost={this.state.totalCost} totalChange={this.totalChange}/>
                </div>
                <div style={{textAlign: 'left'}}>
                <PurchButton disabled={this.state.purchButtonDisabled} text={'Complete Purchase'} title={this.state.titleForButton} order={this.handleOrder} hover={this.handleHoverCartButton}/>
                </div>
                </div>
                </div>
                </div>
                    )
                } else if(parsedLocStor.length === 0) {
            return (
                <div id='contact-wrapper' className='content-left'>
                <h2>Cart is Empty</h2>
                    </div>
                    )
                } else {
            return (
                <div id='contact-wrapper' className='content-left'>
                <h2>Cart is Empty Else</h2>
                    </div>
                    )
                }
    }
}
function PurchButton(props) {
    // response.json() Promise { <state>: "pending" } 200
    return <button disabled={props.disabled} onMouseOver={props.hover} onClick={props.order} title={props.title}>{props.text}</button>
    // return document.cookie.split(';').find( (item) => item.includes('bsLoggedIn')) ? <button onMouseOver={props.hover} onClick={props.order}>{props.text}</button> : 'Please Log In to Order'
        
}
function CCPay(props) {
    if(props.show) {
        return (
            <div>
            <TotalCartCost totalCost={props.totalCost} totalChange={props.totalChange} />
            <form id='cc-pay' key={1}>
            <input type='text' value='Name on Card' /><br />
            <input type='number' value={Number(1111999911119999)} /><br />
            <input type='data' value={'11/2023'} /><br />
            </form>
            </div>
        )
    } else 
    return null
}
function TotalCartCost(props) {
    return (
    <span>Cart Total:  {props.totalCost}</span>
    )
}
// class PurchButton extends Component {
//     state = {
//         text: document.cookie.split(';').find( (item) => item.includes('bsLoggedIn')) ? 'logged in' : 'not logged in'
//     }
//     handleChange() {
//         this.setState({
//             text: 'changed'
//         })
//     }
//     render() {
//         return <button onChange={this.handleChange}>{this.state.text}</button>
//     }
// }

export default Cart;

// return document.cookie.split(';').find( (item) => item.includes('bsLoggedIn')) ?
//         this.setState({
//             cartLoggedinStatus: 'logged in'
//         }) : this.setState({
//             cartLoggedinStatus: 'not logged in'
//         })  