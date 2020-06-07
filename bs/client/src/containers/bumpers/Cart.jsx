import React, { Fragment } from 'react';
import {SoloBumper, CartText} from '../bumpers/SoloBumper';

function checkLoggedIn() {
    console.log('purchased items. thanks.');
}

const Cart = (props) => {
    return (
        <Fragment>
        <h2>Cart Items</h2><br />
        <SoloBumper>
        <CartText />
        </SoloBumper>
        <button onClick={checkLoggedIn}>Buy</button>
        </Fragment>
    )
}

const itemsInLocalStorage = [];
const getLocalStorageBumpers = () => {
    // localStorage.forEach(item => {
    //     if(item == 'cartItemLocal-') {
    //         itemsInLocalStorage.push(item);
    //         return itemsInLocalStorage;
    //     }
    // });
}
export default Cart;