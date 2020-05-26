// add bumpers here until move to database

// later will be added to database
/* const bumperStickerObj = [
    {
        // will have categories, color, etc. then be generated via admin portal page
    }
] */
export const bumperStickers = [
    'Almost ready to explode',
    'Looking for a reason...keep tailing',
    'Lost everything today. Come closer',
    'Texting and driving',
    'How is my driving?',
    'I love your wife',
    'Looking at your wife',
    'I had your wife, too. LOL.',
    'Brake check. 3, 2, 1...',
    'Get closer. I like insurance',
    'Almost sane. Come to me.',
    'i\'m following you',
    'kidnapper onboard',
    'eat my [BLANK]',
    'suck my $*@#, man',
    'How are the fumes??',
    'Want me to plug your wife\'s nose?',
    'Can i smoke your passenger\'s BUTT??',
    'Got a hole? May I?',
    'Bumper Sticker',
    'C U N T.he Mirror',
    'Caution!! Taking an online test.',
    'Please don\'t read this...',
    'Adults onboard',
    'Reading. Please stay back.',
    'Bumper cars. Expect heavy braking. :-)',
    'Watch out for loose screws.',
    'Let\'s switch places. Pass me.',
    'Call Me. 305-555-0000',
    'I &hearts; &#10085; &hearts; &#10085; U. Follow U home??',
    'Nice Sunday drive behind me, right?',
    'Microwave onboard',
    'Careful of Ingrates in Your Life',
    'anIndex > 33',
    'anIndex > 34',
    'anIndex > 35',
    'anIndex > 36',
    'anIndex > 37',
    'anIndex > 38',
    'anIndex > 39',
    'anIndex > 40',
    'anIndex > 41',
    'anIndex > 42',
    'anIndex > 43',
    'anIndex > 44',
    'anIndex > 45',
    'anIndex > 46',
    'anIndex > 47',
    'anIndex > 48',
    'anIndex > 49',
    'anIndex > 50',
    'anIndex > 51',
    'anIndex > 52',
    'anIndex > 53',
    'anIndex > 54',
    'anIndex > 55',
    'anIndex > 56',
    'anIndex > 57',
    'anIndex > 58',
    'anIndex > 59',
    'anIndex > 60',
    'anIndex > 61',
    'anIndex > 62',
    'anIndex > 63',
    'anIndex > 64',
    'anIndex > 65',
    'anIndex > 66',
]
// attempting to get auto-generated div for each of the bumper stickers
//let bumperText = bumperDiv.textContent = `<div class="bumper bumper-long">${item}</div>`;

//let bumperBackflow = []; // holding for more stateful solution
// let bumperOverflow = []; // holding for more stateful solution
let simpPagination = document.getElementById('simple-pagination');

// function bumperLoad32() {
    // move logic loop here for holding and sending 32 to page
    // simple pagination >> loop to hold 32 in each page number > auto-gen numbers based on how many groups of 32

    // load this for each 32
    // this array name will need to match array being passed and changed to some higher order function to pass in array
    // could increment array name with page number this auto-pass to function when called
    /* bumperStickers.forEach(item => { old version for posterity
        let newBumperDiv = document.createElement('div');
        newBumperDiv.setAttribute('class', 'bumper bumper-long') */
// function bumperGenerator(array) {
//     array.forEach(item => {
//         let newBumperDiv = document.createElement('div');
//         newBumperDiv.setAttribute('class', 'bumper bumper-long')
//         let pushBumper = bumperDiv.appendChild(newBumperDiv);
      //  newBumperDiv = document.createElement('div');
       // let test = document.createTextNode(`<div class="bumper bumper-long">${item}</div>`);
        // pushBumper.innerHTML = item;
    //    newBumperDiv.innerHTML = `<div class="bumper bumper-long">${item}</div>`;
    //    bumperDiv.innerHTML = bump;
        // bumperDiv.innerHTML append(bumperText);
    
    // })
// }
// }

export function paging() {
    // function will be set to hold previous bumpers and next 32 bumpers
    // temp using for simple-pagination
    
        let count = 1;
        let holding32TempArray =[];
        let bumper32EachArray = [];
        
        let tempBumptoDiv = document.getElementById('bumper-left');
        for(let i=0; i<32; i++) {
            // tempDiv = document.createElement('div');
            const tempDiv = document.createElement('div')
            tempDiv.setAttribute('class', 'bumper bumper-long');
            tempDiv.innerText = bumperStickers[i];
            tempBumptoDiv.appendChild(tempDiv);
            // console.log(tempBumptoDiv.nodeType)
            // connectAddToCart();
        }
        
        // moving all bumperstickers to other array for pagination
        for(let i=0;i<bumperStickers.length;i++) {
            // needed to keep i condition here to prevent loop
            // need count to 32 then feed to generator
            // generate number on base page
            // need recursive function here and new arrays
            do {
                    // let defaultBumpers = document.getElementById('bumper-left').appendChild(tempDiv);

                while(count <= 32) {
                    // object for each 32 and could use index to load pages in another loop
                    holding32TempArray.push(bumperStickers[i])
                    i++; // placed incrementer here to prevent multiples of each [i] and to not skip index 0
                    count++;
                }
                bumper32EachArray.push(Object(holding32TempArray)).valueOf();
                holding32TempArray = [];
                count = 1;
                // console.log('count', count);
                // console.log('bump32 --> ', bumper32EachArray, (bumper32EachArray instanceof Object));
                // return (arrayPosition = bumperStickers.lastIndexOf(arrayPositionIndex));
            } while(i<bumperStickers.length);
            // console.log(bumper32EachArray)
            // have to add filter or similar to remove undefined items
        }
        
        loadBumpersPage();
        function loadBumpersPage() {
            // LIST PAGE Numbers
            let liPageNum;
            let liPageNumUL = document.createElement('ul');
            liPageNumUL.id = 'bumper-ul';
            simpPagination.append(liPageNumUL);

            bumper32EachArray.forEach(item => {
                let pageNumber = `${bumper32EachArray.indexOf(item) + 1}`;
                let liText = document.createTextNode(`${pageNumber}`);
                liPageNum = document.createElement('li');
                liPageNum.value = `${pageNumber}`; // adding value to
                liPageNum.appendChild(liText);
                liPageNum.classList.add('page-number');
                liPageNumUL.append(liPageNum);
                // const bumperUl = document.getElementById('register-li');
                // console.log('bumperul: ', bumperUl)
                // set page link to highlight
                
                /* e.target.setAttribute('style', 'background-color: var(--secondary-highlight-color); color: #000; font-weight: bolder; font-size: x-large; text-decoration: underline;'); */
                
                // EVENT Listeners for Page Numbers
                // loop to change classlist for pagination
                
                console.log('loop i: ');
                // need to write 1 hop loop for items looping multiple times
                let loopLiEvents = document.getElementById('bumper-ul').children;
                loopLiEvents[0].click();
                // used click at load instead of classlist
                
                liPageNum.addEventListener('click', (e) => {
                    // console.log('right after loop click: ', )
                    // console.log('e target value', e.target.value);
                    let prevPage = document.getElementById('previous-page');
                    // let prevPageNumber;
                    let nextPage = document.getElementById('next-page');
                    // let nextPageNumber;
                    let pageLiItems = document.querySelectorAll('li.page-number');
                    if(e.target.value === loopLiEvents.length) {
                        // nextPageNumber = e.target.value;
                        // prevPageNumber = e.target.value - 1;
                        prevPage.onclick = () => pageLiItems[e.target.value -2].click();
                        nextPage.onclick = () => pageLiItems[e.target.value -1].click();   
                    } else if(e.target.value === 1) {
                        // prevPageNumber = e.target.value;
                        // nextPageNumber = e.target.value + 1;
                        prevPage.onclick = () => pageLiItems[e.target.value - 1].click();
                        nextPage.onclick = () => pageLiItems[e.target.value].click();
                    } else {
                        // nextPageNumber = e.target.value + 1;
                        // prevPageNumber = e.target.value - 1;
                        prevPage.onclick = () => pageLiItems[e.target.value - 2].click();
                        nextPage.onclick = () => pageLiItems[e.target.value].click();
                    }
                    console.log('e.target: ', e.target.value)
                    
                    // console.log('prevpagenum loop: ', prevPageNumber)
                    // console.log('nextpagenum loop: ', nextPageNumber)
                for(item of loopLiEvents) {
                    if(item === e.target) {
                        item.classList.add('current-bumper-page-loaded');
                    } else {
                        item.classList.remove('current-bumper-page-loaded')
                    }
                }
                // console.log('if nextpage: ', nextPageNumber)
                // console.log('if prevpage: ', prevPageNumber)
                // console.log('else nextpage: ', nextPageNumber)
                // console.log('else prevpage: ', prevPageNumber)

                    let bumperDiv = document.getElementById('bumper-left');
                    let bumpersArrIndex = e.target.value -1;
                    bumperDiv.innerHTML = ''; // remove current children;
                    // add functionality to highlight e.target.value
                    // -1 b/c of 0-based indexing
                    // console.log('e.target.value: ', e.target.value); // not -1 to get value
                    // console.log(bumper32EachArray[bumpersArrIndex][0]);
                    // console.log(bumper32EachArray[e.target.value])
                    function bumperGenerator() {
                        for(let i=0; i<bumper32EachArray[bumpersArrIndex].length; i++) {
                            let newBumperDiv = document.createElement('div');
                            newBumperDiv.setAttribute('class', 'bumper bumper-long');
                            newBumperDiv.innerText = bumper32EachArray[bumpersArrIndex][i];
                            bumperDiv.appendChild(newBumperDiv);
                            // tempBumptoDiv.replaceWith(newBumperDiv);
                            // seems to only replace 1 item
                            // connectAddToCart();
                        }
                    }
                    bumperGenerator();
                })
            });
            // need call to bumperdiv generate
        }
        // bumperLoad32();
        // bumperoverflow seems to have good functionality with slice but only from 49 to end
        // bumperOverflow.push(bumperStickers.slice(([49]), bumperStickers.length-1));
        // console.log(bumperOverflow.length);
        // console.log('bumpover', bumperOverflow);
        // console.log('bump32', bumper32EachArray.length)
        // need to increment counter and decrement count to go forward and backwards in total bumbers > add categories later
        // push 32 into new variable
        // run foreach on the 32 to load to page
        // need logic connected to prev and next pages
    }
    // export { bumperStickers }; will add later; currently syntax error
    
    // Observables Pattern for bumpers
    
    /* class BumperObserver {
        constructor() {
            this.observers = []; // will hold observers in array
    }
} */
