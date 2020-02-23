let h1 = document.getElementsByClassName('h1');
let body = document.getElementById('body');
let textColor = ['blue', 'white', 'black', 'pink', 'yellow', 'green', 'grey', 'olive'];
let colorButton = document.querySelector('.color-button');
let randColHEX = function() {
    return Math.floor(Math.random() * 256);
}
let box = document.querySelectorAll('div.box-color');

// trying to set box size . had to pick one as this is nodelist and requires array selection
// need to run a loop in order to change all items in nodelist
/* box[0].style.width = '150px';
box[0].style.height = '120px';
box[0].style.margin = '10px auto 0' */

function randColorButton() {
    colorButton.addEventListener('click', function() {
        body.style.backgroundColor = `rgb(${randColHEX()}, ${randColHEX()}, ${randColHEX()}`;
        let randColText = Math.floor(Math.random() * textColor.length);
        let randColText2 = Math.floor(Math.random() * textColor.length);
        body.style.color = textColor[randColText];
        // box[0].style.backgroundColor = textColor[randColText2];
    })
}
randColorButton();

// loop for small boxes color change
/* for(let i=0; i<box.length; i++) {
    randColSmallBox();
    console.log('added');
} */
// funcing to randomly change the colors of the small boxes
function randColSmallBox() {
    box.forEach(item => {
        item.addEventListener('click', function() {
            item.style.backgroundColor = `rgb(${randColHEX()}, ${randColHEX()}, ${randColHEX()})`;
    })
    })
}
randColSmallBox();