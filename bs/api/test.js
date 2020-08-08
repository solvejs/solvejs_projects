const path = require('path');

const goFront = path.join(__dirname, '../', 'Frontend');
console.log('path resolve frontend ', path.resolve('./' + 'Frontend'))
console.log('path dirname frontend ', path.dirname('./' + 'Frontend'))
console.log('path join dirname frontend ../ ', path.join(__dirname, '../', 'Frontend'))
console.log(goFront)