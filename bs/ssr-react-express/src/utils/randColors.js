;
let colors = ['red', 'blue', 'purple', 'navy', 'black', 'coral', 'green', 'pink', 'crimson', 'salmon', 'orange', 'tomato', 'darkred', 'grey', 'darkgrey', 'olive', 'deeppink','firebrick', 'palegreen'] // later add to database for style of each bumpers
    let colorsArrLength = colors.length;
function randCol() {
    return colors[Math.floor(Math.random()*colorsArrLength-1)+1]
}

export {randCol};