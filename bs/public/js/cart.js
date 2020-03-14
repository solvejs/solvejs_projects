let addCartDiv =document.createElement('div.add-to-cart');
let cartText  = document.createTextNode('add to cart');
addCartDiv.appendChild(cartText);

// need to change code so double-click on add-cart not selecting text
let listBumpers = document.querySelectorAll('.bumper');
for(bumper of listBumpers) {
    bumper.addEventListener('mouseenter', (event) => {
        event.target.appendChild(addCartDiv);
        addCartDiv.setAttribute('style', 'position: relative; font-size: small; top: 20px; color: pink');
        // still need to position and set consistent location on bumper
        // removing set width places bottom right inside bumper but moves bumper text left > consistent placement, though
        // event.target.addEventListener('click', (increaseCart) => alert('test click to cart')) // works but fires multiple times
        console.log(event);
    })
    continue; // not sure why this works
}
// other events to match and return to prior state

// increase # to cart
const cartIcon = document.getElementById('shopping-cart');
let cartNum = 0;
let cartAddNode = document.createElement('span.cart-span');
let cartAddText = document.textContent = `${cartNum}`;
cartAddNode.append(cartAddText)
//createTextNode('p.cart-span');
// cartAddNode.textContent = cartAddText;
cartIcon.appendChild(cartAddNode);
cartAddNode.setAttribute('style',  'position: relative; left: -49%; bottom: 8px; color: black; font-size: x-small');
function increaseCart() {
    addCartDiv.addEventListener('click', () => {
        // increment shopping cart by 1
        // cartIcon.append(cartNum++)
        // duplicate code to get working > need to adjust
        // will need to set up later to use product id to increment actual basket for viewing

        cartNum2 = ++cartNum;
        let cartAddNode2 = cartAddNode; // should be replacing node below but console play only recognizes node 1
        cartAddNode2.textContent = `${cartNum2}`;
        cartIcon.replaceChild(cartAddNode2, cartAddNode);
        // cartAddNode2.setAttribute('style',  'left: -10px; background-color: red, bottom: 5px');
        // **** works but 1st click does not increment counter
        // had to pre-increment
        // need to move to middle of cart icon
        // addCartDiv.append('0')
    })
}
increaseCart();