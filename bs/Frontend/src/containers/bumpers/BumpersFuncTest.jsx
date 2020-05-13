import React, { createContext, Children, Component, Fragment } from 'react';
import { bumperStickers } from '../bumpers/bumpersTesting';
//import { SoloBumper } from './SoloBumper';

const BumpersContext = createContext();

export class BumperContextProvider extends Component {
    constructor() {
        super();
        this.state = {
            // will need to provide control here for admin logged-in page
            // prevBumpers: {}, may not need this
            currBumpers: createPages().pages[0],
            currBumpersPages: createPages().pages[0].pageNumbersArr,
            sidebarPrevBumpers: '',
            sidebarCurrBumpers: createPages(10).pages[0],
            sidebarCurrBumpersPages: pageNumbersArr,
            //handlePageChange: this.handlePageChange,
            currBumpersPages: pages,
            sidebarPages: pages,
            bumGenLoad: createPages,
            radioCatSelected: 'family',
            radioPagesFiltered: createPages(10, 'family').pages // need function to call this
        }
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handlePageChangeCat = this.handlePageChangeCat.bind(this);
        this.handleRadioCatChange = this.handleRadioCatChange.bind(this);
    }
    handlePageChange(e) {
        this.setState({
            sidebarCurrBumpers: (pages[e.target.innerText])
        })
    }
    handlePageChangeCat(e) {
        console.log('test worked', e.currentTarget)
        // console.log(e.target.innerText)
        // this.setState({
        //     currBumpers: (pages[e.target.innerText])
        // })
    }
    handleRadioCatChange(event) {
        event.stopPropagation();
        console.log('handleRadioCatChange: selected before =', this.state.radioCatSelected);
        console.log('handleRadioCatChange: ', event.currentTarget.value);
        this.setState({
            radioCatSelected: event.target.value,
            radioPagesFiltered: createPages(10, event.currentTarget.value)
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
            radioPagesFiltered: this.state.radioPagesFiltered,
            handlePageChange: this.handlePageChange,
            handleRadioCatChange: this.handleRadioCatChange
        }}>
            {this.props.children}
        </BumpersContext.Provider>
    )
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

let pageNumbersArr = [];
let pageNumbersArrTemp = [0,1];
let pages = [];
export function createPages(perPage = 16, itemCat = undefined) {
    pages = []; // pushing pages from pageNumGen()
    let holder = [];
    // function init() {

        const catFilter = (itemCat) => {
            // filtering based on category string passed
            return itemCat === undefined
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

        // figuring number of pages
        let bLength = catFilter(itemCat).bumpSelectedLength;
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
                    console.log('page array : ', pageNumbersArrTemp);
                    // let tempObj = {};
                    // Object.defineProperties(tempObj, i, objBumpersTempLoader())
                    // pages.push(tempObj);
                    temp = [];
                    // objTemp = {};
                }
                pageNumbersArr = pageNumbersArrTemp.slice(0);
                pageNumbersArrTemp = [];
        }
        pageNumGen()
        return {
            numberOfPages,
            pageNumsAndBumpers: [],
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
    .map(item => <button key={item.id}>{item.title}</button>)
    // return bumperStickers.map((bumper) => <button>{bumper.title}</button>)
}

export default BumpersContext;