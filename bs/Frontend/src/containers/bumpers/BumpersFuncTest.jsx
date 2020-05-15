import React, { createContext, Component, Fragment } from 'react';
import { bumperStickers } from '../bumpers/bumpersTesting';
//import { SoloBumper } from './SoloBumper';
import { catsRadioArrForForm } from '../../components/Categories'

const BumpersContext = createContext();

export class BumperContextProvider extends Component {
    constructor() {
        super();
        this.state = {
            // will need to provide control here for admin logged-in page
            // prevBumpers: {}, may not need this
            // will need to clean up state
            currBumpers: [createPages().pages[0]],
            currBumpersPages: pageNumbersArr,
            sidebarPrevBumpers: '',
            sidebarCurrBumpers: [{title: 'test'}, {title: 'test'}, {title: 'test'}, {title: 'handleradcatchange'}],
            sidebarCurrBumpersPages: pageNumbersArr,
            //handlePageChange: this.handlePageChange,
            currBumpersPages: pages,
            sidebarPages: pages,
            bumGenLoad: createPages,
            // manually setting start page due to page build in componentdidmount > pulling from pageforcats after mount
            radioCatSelectedPageNums: createPages(20, 'all').pageNumbersArr,
            radioCatSelected: 'all',
            radioPagesFiltered: createPages(20, 'all').pages[0], // need function to call this,
        }
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handlePageChangeCat = this.handlePageChangeCat.bind(this);
        this.handleRadioCatChange = this.handleRadioCatChange.bind(this);
    }

    handlePageChange(e) {
        this.setState({
            sidebarCurrBumpers: pagesForCats['thoughtful'].pages[0]
            // this is not fixed
        })
    }
    handlePageChangeCat(event) {
        console.log('test click worked', event.currentTarget.attributes)
        this.setState({
            radioPagesFiltered: pagesForCats[event.target.getAttribute('customcattag')].pages[event.currentTarget.value-1]
            // -1 to match +1 of push from temp num array in loop
        })
    }
    handleRadioCatChange(event) {
        event.stopPropagation();
        console.log('handleRadioCatChange: selected before =', this.state.radioCatSelected);
        console.log('handleRadioCatChange: ', event.currentTarget.value);
        this.setState({
            radioCatSelected: event.target.value,
            radioCatSelectedPageNums: pagesForCats[event.currentTarget.value].pageNumbersArr,
            radioPagesFiltered: pagesForCats[event.currentTarget.value].pages[0]
        })
    }
render() {
    return (
        <BumpersContext.Provider value={{
            prevBumpers: this.state.prevBumpers,
            currBumpers: this.state.currBumpers,
            currBumpersPages: this.state.currBumpersPages, 
            sidebarPrevBumpers: this.state.sidebarPrevBumpers,
            sidebarCurrBumpers: this.state.sidebarCurrBumpers,
            sidebarCurrBumpersPages: this.state.sidebarCurrBumpersPages,
            radioCatSelected: this.state.radioCatSelected,
            radioCatSelectedPageNums: this.state.radioCatSelectedPageNums,
            radioPagesFiltered: this.state.radioPagesFiltered,
            handlePageChange: this.handlePageChange,
            handlePageChangeCat: this.handlePageChangeCat,
            handleRadioCatChange: this.handleRadioCatChange
        }}>
            {this.props.children}
        </BumpersContext.Provider>
    )
    }
    componentDidMount() {
        loopThroughBumperCatMapToPages() // add category pages after load
    }
}

export const BumpersCreator = () => {
    return (
       <CreateBumpers /> 
    )
}
const bumperIDAdd = () => {
    // ensure runs at app start for unique id that follows for keys use
    let i=0;
    for(let bumper of bumperStickers) {
        bumper.id = i;
        i++;
    }
}
bumperIDAdd()

const pagesForCats = []; // placeholder for bumperCatMapToPages generation of pages

async function loopThroughBumperCatMapToPages() {
    for(let item of catsRadioArrForForm) {
            bumperCatMapToPages(item.value)
        }
        console.log(pagesForCats, 'pagesForCats')
        return pagesForCats;
    }

async function bumperCatMapToPages(catPassed) {
    // generate bumpers categories pages
    let data;
    function switchGenCreate(passedFromSwitch) {
                createPages(20, passedFromSwitch);
                data = createPages(20, passedFromSwitch);
                pagesForCats[passedFromSwitch] = data;
                console.log(data, 'data passed via switch statement to function <<<')
                console.log(pagesForCats[passedFromSwitch], 'data.passedfromswitch ????')
    }
        switch (catPassed) { 
        // need to automate this for cat changes > forEach or while
            case 'all':
                switchGenCreate(catPassed);
                break;
            case 'inappropriate':
                switchGenCreate(catPassed);
                break;
            case 'drive-traffic':
                switchGenCreate(catPassed);
                break;
            case 'political':
                switchGenCreate(catPassed);
                break;
            case 'family':
                switchGenCreate(catPassed);
                break;
            case 'thoughtful':
                switchGenCreate(catPassed);
                break;
            case 'thought-provoking':
                switchGenCreate(catPassed);
                break;
            default:
                break;
            }
    }

let pageNumbersArr = [];
let pageNumbersArrTemp = [];
let pages = [];

// export function holder(category) {
//     let catsPulled = () => {
//         const catsListedArr = [];
//         catsRadioArrForForm.map(item => catsListedArr.push(item));
//         return catsListedArr;
//     }
//     const catFunc = () => {
        // catsRadioArrForForm.filter((item) => {
        //     item.value === 'test';
        // })
//     }
// }

export function createPages(perPage = 16, itemCat) {
    pages = []; // pushing pages from pageNumGen()
    // pagesForCats = []; // reset to ensure not duplicated
    
    // function init() {

        function catFilter() {
            // filtering based on category string passed
            return itemCat === (undefined || 'all')
            ? {
                bumpersFiltered: bumperStickers,
                bumpSelectedLength: bumperStickers.length,
                pageNumbersArr: pageNumbersArr
            }
            : {
                bumpersFiltered: bumperStickers.filter(item => item.category === itemCat),
                bumpSelectedLength: bumperStickers.filter(item => item.category === itemCat).length,
                pageNumbersArr: pageNumbersArr
                }
        }
        // console.log('cat filter family: ', catFilter('family').bumpSelectedLength);
        // console.log('cat filter all bumps: >>>>> filtering not working <<<<< ', catFilter(10).bumpSelectedLength);
        // console.log('cat filter inappropriate: ', catFilter('inappropriate').bumpSelectedLength)
        // figuring number of pages
        let bLength = catFilter().bumpSelectedLength;
        // console.log(bumperStickers.filter(item => item.category === 'family'), '<< blength')
        let numberOfPages = (Number.isInteger(bLength / perPage)) ? bLength / perPage : (parseInt(bLength / perPage) + 1);

        // console.log('totalCatBumpers political: #### ', catFilter('political'));
        // console.log('totalCatBumpers inappropriate: #### ', catFilter('inappropriate')); 
        // console.log('totalCatBumpers: #### ', catFilter()); 
        // logic for bumpers create
        const pageNumGen = () => {
            let temp = [];
            let j = 0, z = 0;
            function objBumpersTempLoader() {
                // need while loop for having bumpers and return if not
                while(j < bLength && z < perPage) {
                    // need a check for bumper exists in loop &&
                    // pushing object to while loop below
                    temp.push(catFilter(itemCat).bumpersFiltered[j]);
                    j++; z++;
                    // }
                }
                // console.log('temp inside while obj loop', temp, 'z: ', z, 'j', j);
                z=0;
                return temp;
            }
            function pushPage(i) {
                pageNumbersArrTemp.push(i)
            }
            for(let i = 0; i < numberOfPages; i++) {
                    // load number + bumpers to temp then push to pages
                    // pages.splice(i, 0, objBumpersTempLoader())
                    // pages.push(Object({i: objBumpersTempLoader()}));
                    let objTemp = {};
                    objTemp = objBumpersTempLoader();
                    pages[i] = objTemp;
                    pushPage(i);
                    // console.log('page array : ', pageNumbersArrTemp);
                    // let tempObj = {};
                    // Object.defineProperties(tempObj, i, objBumpersTempLoader())
                    // pages.push(tempObj);
                    temp = [];
                    // objTemp = {};
                }
                pageNumbersArr = pageNumbersArrTemp.map(item => item+1);
                // pageNumbersArr = pageNumbersArrTemp.slice(0);
                pageNumbersArrTemp = [];
        }
        pageNumGen();
        return {
            numberOfPages,
            //pageNumsAndBumpers: [],
            pages,
            pageNumbersArr
            }
    // }
    // init();
}
const CreateBumpers = (numberPages, obj, cat='political' ) => {
    // console.log('numberPages: ', createPages(32).numberOfPages);
    // console.log('pages: ', createPages(15,).pages);
    numberPages = createPages(32).numberOfPages;
    return bumperStickers.filter(item => item.category === cat)
    .map(item => <button key={item.id}>{item.title}</button>);
    // need to add pages bottom of each current loop cat
    // return bumperStickers.map((bumper) => <button>{bumper.title}</button>)
}

export default BumpersContext;