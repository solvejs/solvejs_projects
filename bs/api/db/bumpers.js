/* const bumperStickerObj = [
    {
        // will have categories, color, etc. then be generated via admin portal page
    }
] */
const bumpersArray = [
    { 
        title: 'Almost ready to explode', category: 'drive-traffic', cartButtonStyle: '', cartStatus: 'In Cart'
    },
    { 
        title: 'Looking for a reason...keep tailing', category: 'drive-traffic', cartButtonStyle: '', cartStatus: 'Add to Cart'
    },
    { 
        title: 'Lost everything today. Come closer', category: 'inappropriate', cartButtonStyle: '', cartStatus: 'Add to Cart'
    },
    { 
        title: 'Texting and driving', category: 'drive-traffic', cartButtonStyle: '', cartStatus: 'Add to Cart'
    },
    { 
        title: 'How is my driving?', category: 'drive-traffic', cartButtonStyle: '', cartStatus: 'In Cart'
    },
    { 
        title: 'I love your wife', category: 'inappropriate'
    },
    { 
        title: 'Looking at your wife', category: 'inappropriate'
    },
    { 
        title: 'I had your wife, too. LOL.', category: 'inappropriate'
    },
    { 
        title: 'Brake check. 3, 2, 1...', category: 'drive-traffic'
    },
    { 
        title: 'Get closer. I like insurance', category: 'drive-traffic'
    },
    { 
        title: 'Almost sane. Come to me.', category: 'drive-traffic'
    },
    { 
        title: 'i\'m following you', category: 'drive-traffic'
    },
    { 
        title: 'kidnapper onboard', category: 'inappropriate'
    },
    { 
        title: 'eat my [BLANK]', category: 'inappropriate'
    },
    { 
        title: 'suck my $*@#, man', category: 'inappropriate'
    },
    { 
        title: 'How are the fumes??', category: 'drive-traffic'
    },
    { 
        title: 'Want me to plug your wife\'s nose?', category: 'inappropriate'
    },
    { 
        title: 'Can i smoke your passenger\'s BUTT??', category: 'inappropriate'
    },
    { 
        title: 'Got a hole? May I?', category: 'inappropriate'
    },
    { 
        title: 'Bumper Sticker', category: 'drive-traffic'
    },
    { 
        title: 'C U N T.he Mirror', category: 'inappropriate'
    },
    { 
        title: 'Caution!! Taking an online test.', category: 'drive-traffic'
    },
    { 
        title: 'Please don\'t read this...', category: 'drive-traffic'
    },
    { 
        title: 'Adults onboard', category: 'drive-traffic'
    },
    { 
        title: 'Reading. Please stay back.', category: 'drive-traffic'
    },
    { 
        title: 'Bumper cars. Expect heavy braking. :-)', category: 'drive-traffic'
    },
    { 
        title: 'Watch out for loose screws.', category: 'drive-traffic'
    },
    { 
        title: 'Let\'s switch places. Pass me.', category: 'drive-traffic'
    },
    { 
        title: 'Call Me. 305-555-0000', category: 'health'
    },
    { 
        title: 'I &hearts; &#10085; &hearts; &#10085; U. Follow U home??',category: 'drive-traffic'
    },
    { 
        title: 'Nice Sunday drive behind me, right?', category: 'drive-traffic'
    },
    { 
        title: 'Microwave onboard', category: 'drive-traffic'
    },
    { 
        title: 'Careful of Ingrates in Your Life', category: 'thoughtful'
    },
    { 
        title: 'Soda. Cost: 10 cents. Retail: $2-3.', category: 'health'
    },
    { 
        title: 'As you work, I work your bedroom.', category: 'inappropriate'
    },
    { 
        title: 'She called me last night', category: 'inappropriate'
    },
    { 
        title: 'He called me last night', category: 'inappropriate'
    },
    { 
        title: 'Making contact at your home', category: 'inappropriate'
    },
    { 
        title: 'Exercise for your health', category: 'health'
    },
    { 
        title: 'Waiting for you to leave the house', category: 'inappropriate'
    },
    { 
        title: 'Awful. Just awful. Wow!', category: 'inappropriate'
    },
    { 
        title: 'I ran over your flowers.', category: 'inappropriate'
    },
    { 
        title: 'Your friend did her a favor', category: 'inappropriate'
    },
    { 
        title: 'Your friend did him a favor', category: 'inappropriate'
    },
    { 
        title: 'Your dad is cheating on you', category: 'inappropriate'
    },
    { 
        title: 'Are you hungry or greedy??', category: 'health'
    },
    { 
        title: 'My life. Centered around you.', category: 'thoughtful'
    },
    { 
        title: 'Looking for you. I have pepper spray.', category: 'inappropriate'
    },
    { 
        title: 'Nervous? I really am dangerous.', category: 'inappropriate'
    },
    { 
        title: 'Testing your brakes.', category: 'drive-traffic'
    },
    { 
        title: 'Hit and Run Drive Master', category: 'drive-traffic'
    },
    { 
        title: 'Caution. Difficulty driving.', category: 'inappropriate'
    },
    { 
        title: 'Passed you. Your mom needs me.', category: 'inappropriate'
    },
    { 
        title: 'Someone is watching you', category: 'thought-provoking'
    },
    { 
        title: 'Night. Focus. Your window.', category: 'inappropriate'
    },
    { 
        title: 'D. I. Y. Network', category: 'diy'
    },
    { 
        title: 'Eating for your health??', category: 'health'
    },
    { 
        title: 'Driving super slow. Stolen.', category: 'drive-traffic'
    },
    { 
        title: 'Getting ready to slam brakes', category: 'drive-traffic'
    },
    { 
        title: 'Use your resources.', category: 'thoughtful'
    },
    { 
        title: 'Seeing the world through your window', category: 'inappropriate'
    },
    { 
        title: 'I drive your car while you work', category: 'inappropriate'
    },
    { 
        title: 'I\'m you. You\'re me. Now what?', category: 'thoughtful'
    },
    { 
        title: 'Master of the rapid stop', category: 'drive-traffic'
    },
    { 
        title: 'Would you do me a favor?', category: 'thoughtful'
    },
    { 
        title: 'Logo is missing', category: 'logos'
    },
    { 
        title: 'Your mom is cheating on you', category: 'inappropriate'
    },
    { 
        title: 'Eating too many calories?', category: 'health'
    },
    { 
        title: 'Excuses?? Is that all????', category: 'thoughtful'
    },
    { 
        title: 'Your mom is cheating on your man', category: 'inappropriate'
    },
    { 
        title: 'Your dad is cheating on your girl', category: 'inappropriate'
    },
    { 
        title: 'He knows...', category: 'drive-traffic'
    },
    { 
        title: 'She knows...', category: 'drive-traffic'
    },
    { 
        title: 'Shhh...not watching the road', category: 'drive-traffic'
    },
    { 
        title: 'I did it already', category: 'diy'
    },
    { 
        title: 'Doing it now.', category: 'diy'
    },
    { 
        title: 'You do it.', category: 'diy'
    },
    { 
        title: 'D.  I.  Y.', category: 'diy'
    },
    { 
        title: 'Want me to do it?', category: 'diy'
    },
    { 
        title: 'I did\'t have to do it.', category: 'diy'
    },
    { 
        title: 'It\'s your choice. Decide.', category: 'thoughtful'
    },
    { 
        title: 'Make stronger decisions.', category: 'thoughtful'
    },
    {
        title: 'You really can have it all.', category: 'thoughtful'
    },
    {
        title: 'Are you willing to do??', category: 'thoughtful'
    },
    
]
// attempting to get auto-generated div for each of the bumper stickers
//let bumperText = bumperDiv.textContent = `<div class="bumper bumper-long">${item}</div>`;

//let bumperBackflow = []; // holding for more stateful solution
// let bumperOverflow = []; // holding for more stateful solution
// let simpPagination = document.getElementById('simple-pagination');

// // function bumperLoad32() {
//     // move logic loop here for holding and sending 32 to page
//     // simple pagination >> loop to hold 32 in each page number > auto-gen numbers based on how many groups of 32

//     // load this for each 32
//     // this array name will need to match array being passed and changed to some higher order function to pass in array
//     // could increment array name with page number this auto-pass to function when called
//     /* bumperStickers.forEach(item => { old version for posterity
//         let newBumperDiv = document.createElement('div');
//         newBumperDiv.setAttribute('class', 'bumper bumper-long') */
// // function bumperGenerator(array) {
// //     array.forEach(item => {
// //         let newBumperDiv = document.createElement('div');
// //         newBumperDiv.setAttribute('class', 'bumper bumper-long')
// //         let pushBumper = bumperDiv.appendChild(newBumperDiv);
//       //  newBumperDiv = document.createElement('div');
//        // let test = document.createTextNode(`<div class="bumper bumper-long">${item}</div>`);
//         // pushBumper.innerHTML = item;
//     //    newBumperDiv.innerHTML = `<div class="bumper bumper-long">${item}</div>`;
//     //    bumperDiv.innerHTML = bump;
//         // bumperDiv.innerHTML append(bumperText);
    
//     // })
// // }
// // }

// function paging() {
//     // function will be set to hold previous bumpers and next 32 bumpers
//     // temp using for simple-pagination
    
//         let count = 1;
//         let holding32TempArray =[];
//         let bumper32EachArray = [];
        
//         let tempBumptoDiv = document.getElementById('bumper-left');
//         for(let i=0; i<32; i++) {
//             // tempDiv = document.createElement('div');
//             const tempDiv = document.createElement('div')
//             tempDiv.setAttribute('class', 'bumper bumper-long');
//             tempDiv.innerText = bumperStickers[i];
//             tempBumptoDiv.appendChild(tempDiv);
//             // console.log(tempBumptoDiv.nodeType)
//             // connectAddToCart();
//         }
        
//         // moving all bumperstickers to other array for pagination
//         for(let i=0;i<bumperStickers.length;i++) {
//             // needed to keep i condition here to prevent loop
//             // need count to 32 then feed to generator
//             // generate number on base page
//             // need recursive function here and new arrays
//             do {
//                     // let defaultBumpers = document.getElementById('bumper-left').appendChild(tempDiv);

//                 while(count <= 32) {
//                     // object for each 32 and could use index to load pages in another loop
//                     holding32TempArray.push(bumperStickers[i])
//                     i++; // placed incrementer here to prevent multiples of each [i] and to not skip index 0
//                     count++;
//                 }
//                 bumper32EachArray.push(Object(holding32TempArray)).valueOf();
//                 holding32TempArray = [];
//                 count = 1;
//                 // console.log('count', count);
//                 // console.log('bump32 --> ', bumper32EachArray, (bumper32EachArray instanceof Object));
//                 // return (arrayPosition = bumperStickers.lastIndexOf(arrayPositionIndex));
//             } while(i<bumperStickers.length);
//             // console.log(bumper32EachArray)
//             // have to add filter or similar to remove undefined items
//         }
        
//         loadBumpersPage();
//         function loadBumpersPage() {
//             // LIST PAGE Numbers
//             let liPageNum;
//             let liPageNumUL = document.createElement('ul');
//             liPageNumUL.id = 'bumper-ul';
//             simpPagination.append(liPageNumUL);

//             bumper32EachArray.forEach(item => {
//                 let pageNumber = `${bumper32EachArray.indexOf(item) + 1}`;
//                 let liText = document.createTextNode(`${pageNumber}`);
//                 liPageNum = document.createElement('li');
//                 liPageNum.value = `${pageNumber}`; // adding value to
//                 liPageNum.appendChild(liText);
//                 liPageNum.classList.add('page-number');
//                 liPageNumUL.append(liPageNum);
//                 // const bumperUl = document.getElementById('register-li');
//                 // console.log('bumperul: ', bumperUl)
//                 // set page link to highlight
                
//                 /* e.target.setAttribute('style', 'background-color: var(--secondary-highlight-color); color: #000; font-weight: bolder; font-size: x-large; text-decoration: underline;'); */
                
//                 // EVENT Listeners for Page Numbers
//                 // loop to change classlist for pagination
                
//                 console.log('loop i: ');
//                 // need to write 1 hop loop for items looping multiple times
//                 let loopLiEvents = document.getElementById('bumper-ul').children;
//                 loopLiEvents[0].click();
//                 // used click at load instead of classlist
                
//                 liPageNum.addEventListener('click', (e) => {
//                     // console.log('right after loop click: ', )
//                     // console.log('e target value', e.target.value);
//                     let prevPage = document.getElementById('previous-page');
//                     // let prevPageNumber;
//                     let nextPage = document.getElementById('next-page');
//                     // let nextPageNumber;
//                     let pageLiItems = document.querySelectorAll('li.page-number');
//                     if(e.target.value === loopLiEvents.length) {
//                         // nextPageNumber = e.target.value;
//                         // prevPageNumber = e.target.value - 1;
//                         prevPage.onclick = () => pageLiItems[e.target.value -2].click();
//                         nextPage.onclick = () => pageLiItems[e.target.value -1].click();   
//                     } else if(e.target.value === 1) {
//                         // prevPageNumber = e.target.value;
//                         // nextPageNumber = e.target.value + 1;
//                         prevPage.onclick = () => pageLiItems[e.target.value - 1].click();
//                         nextPage.onclick = () => pageLiItems[e.target.value].click();
//                     } else {
//                         // nextPageNumber = e.target.value + 1;
//                         // prevPageNumber = e.target.value - 1;
//                         prevPage.onclick = () => pageLiItems[e.target.value - 2].click();
//                         nextPage.onclick = () => pageLiItems[e.target.value].click();
//                     }
//                     console.log('e.target: ', e.target.value)
                    
//                     // console.log('prevpagenum loop: ', prevPageNumber)
//                     // console.log('nextpagenum loop: ', nextPageNumber)
//                 for(item of loopLiEvents) {
//                     if(item === e.target) {
//                         item.classList.add('current-bumper-page-loaded');
//                     } else {
//                         item.classList.remove('current-bumper-page-loaded')
//                     }
//                 }
//                 // console.log('if nextpage: ', nextPageNumber)
//                 // console.log('if prevpage: ', prevPageNumber)
//                 // console.log('else nextpage: ', nextPageNumber)
//                 // console.log('else prevpage: ', prevPageNumber)

//                     let bumperDiv = document.getElementById('bumper-left');
//                     let bumpersArrIndex = e.target.value -1;
//                     bumperDiv.innerHTML = ''; // remove current children;
//                     // add functionality to highlight e.target.value
//                     // -1 b/c of 0-based indexing
//                     // console.log('e.target.value: ', e.target.value); // not -1 to get value
//                     // console.log(bumper32EachArray[bumpersArrIndex][0]);
//                     // console.log(bumper32EachArray[e.target.value])
//                     function bumperGenerator() {
//                         for(let i=0; i<bumper32EachArray[bumpersArrIndex].length; i++) {
//                             let newBumperDiv = document.createElement('div');
//                             newBumperDiv.setAttribute('class', 'bumper bumper-long');
//                             newBumperDiv.innerText = bumper32EachArray[bumpersArrIndex][i];
//                             bumperDiv.appendChild(newBumperDiv);
//                             // tempBumptoDiv.replaceWith(newBumperDiv);
//                             // seems to only replace 1 item
//                             // connectAddToCart();
//                         }
//                     }
//                     bumperGenerator();
//                 })
//             });
//             // need call to bumperdiv generate
//         }
//         // bumperLoad32();
//         // bumperoverflow seems to have good functionality with slice but only from 49 to end
//         // bumperOverflow.push(bumperStickers.slice(([49]), bumperStickers.length-1));
//         // console.log(bumperOverflow.length);
//         // console.log('bumpover', bumperOverflow);
//         // console.log('bump32', bumper32EachArray.length)
//         // need to increment counter and decrement count to go forward and backwards in total bumbers > add categories later
//         // push 32 into new variable
//         // run foreach on the 32 to load to page
//         // need logic connected to prev and next pages
//     }
//     // export { bumperStickers }; will add later; currently syntax error
    
//     // Observables Pattern for bumpers
    
//     /* class BumperObserver {
//         constructor() {
//             this.observers = []; // will hold observers in array
//     }
// } */

module.exports = bumpersArray;