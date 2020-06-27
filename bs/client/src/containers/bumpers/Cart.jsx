import React, { createContext, Children, Component, Fragment } from 'react';
import {SoloBumper} from '../bumpers/SoloBumper';
import BumpersContext from './BumpersFuncTest';

function checkLoggedIn() {
    console.log('purchased items. thanks.');
}

const Cart = (props) => {
    return  (
                <BumpersContext.Consumer>
                    {
                        context =>
                        <CartBumpers contextData={context.apiData}>
                        {Children}
                        </CartBumpers>
                    }
                </BumpersContext.Consumer>
    )
        }

class CartBumpers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            destrData: this.props.contextData,
            currentCartTotal: JSON.parse(localStorage.getItem("inCartLocStoreCount"))
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
            currentCartTotal: JSON.parse(localStorage.getItem("inCartLocStoreCount"))
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
    }
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
            currentCartTotal: itemsParsedFromLocStor.length
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
    render() {
        const unparsedLocStor = localStorage.getItem('inCartLocStoreArr') || "[]";
        let parsedLocStor = unparsedLocStor !== null || "[]" ? JSON.parse(unparsedLocStor) : null;
        let parseData = JSON.parse(JSON.stringify([...this.props.contextData]));
        // let test2 = JSON.stringify([...props.contextData]).valueOf();
        // parseData.map(item => destrData.push(item))
        // let test3 = JSON.parse(test2)
        
        if(this.state.destrData.length !== 0 && parsedLocStor.length > 0) {
            return (
                <div id='contact-wrapper' className='content-left'>
                <h2>Current Cart Items</h2>
                {
                    parsedLocStor.map(item =>
                    <SoloBumper key={Number(item.substring(14))} clickAddHandle={this.handleClickChangeAddToCart} text={'Remove'} buttonClass={'add-to-cart-selected'}> <div id={this.state.destrData[Number(item.substring(14))].id} onChange={this.handleChange} style={{border: "3px solid blue", height: "75px", verticalAlign: "middle"}}>{this.state.destrData[Number(item.substring(14))].title}</div>
                    </SoloBumper>
                    )
                }
                <PurchButton />
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
                <h2>Cart is Empty</h2>
                    </div>
                    )
                }
        
    }
}

const PurchButton = () => {
    if (document.cookie.split(';').some( (item) => item.includes('loggedIn'))) {
    return (
        <button>Complete Order</button>
    ) 
    } else {
        return (
            <button>Please Login to Order</button>
    )
        }
}

export default Cart;