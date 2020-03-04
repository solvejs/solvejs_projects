// add bumpers here until move to database

// later will be added to database
let bumperStickers = [
    "Almost ready to explode",
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
    'Got a hole? May I?'
]
// attempting to get auto-generated div for each of the bumper stickers
//let bumperText = bumperDiv.textContent = `<div class="bumper bumper-long">${item}</div>`;

bumperStickers.forEach(item => {
    let bumperDiv = document.getElementById('bumper-left');
    let newBumperDiv = document.createElement('div');
    newBumperDiv.setAttribute('class', 'bumper bumper-long')
    let test = bumperDiv.appendChild(newBumperDiv);
  //  newBumperDiv = document.createElement('div');
   // let test = document.createTextNode(`<div class="bumper bumper-long">${item}</div>`);
    test.innerHTML = item;
//    newBumperDiv.innerHTML = `<div class="bumper bumper-long">${item}</div>`;
//    bumperDiv.innerHTML = bump;
    // bumperDiv.innerHTML append(bumperText);

})