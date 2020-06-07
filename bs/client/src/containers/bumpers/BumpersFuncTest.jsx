import React, { createContext, Component } from 'react';
import { bumperStickers } from '../bumpers/bumpersTesting';
//import { SoloBumper } from './SoloBumper';
import { catsRadioArrForForm } from '../../components/Categories'

// console.log(DataFromAPI, 'd from a', new Date());
// setTimeout(() => (console.log(DataFromAPI, 'd from a 4000'), new Date()), 4000);
// document.addEventListener('DOMContentLoaded', (event) => {

    const pagesForCats = {}; // placeholder for bumperCatMapToPages generation of pages
const BumpersContext = createContext();
export class BumperContextProvider extends Component {
    constructor() {
        super();
        this.state = {
            // will need to provide control here for admin logged-in page
            // prevBumpers: {}, may not need this
            // will need to clean up state
            // currBumpers: [createPages().pages[0]],
            // currBumpersPages: pageNumbersArr,
            sidebarPrevBumpers: '',
            sidebarCurrBumpers: [{title: "test", id: 1}, {title: "test", id: 2}],
            sidebarCurrBumpersPages: pageNumbersArr,
            //handlePageChange: this.handlePageChange,
            currBumpersPages: pages,
            sidebarPages: pages,
            bumGenLoad: this.createPages,
            // manually setting start page due to page build in componentdidmount > pulling from pageforcats after mount
            radioCatSelectedPageNums:this.createPages(20, 'all').pageNumbersArr,
            radioCatSelected: 'all',
            radioPagesFiltered:this.createPages(20, 'all').pages[0], // need function to call this,
            inCartTotal: 0,
            inCartItems: [],
            textStyle: {}
        }
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handlePageChangeCat = this.handlePageChangeCat.bind(this);
        this.handleRadioCatChange = this.handleRadioCatChange.bind(this);
        this.handleAddCartClick = this.handleAddCartClick.bind(this);
        this.dataPullFromAPI = this.dataPullFromAPI.bind(this);
        this.bumperCatMapToPages = this.bumperCatMapToPages.bind(this);
        this.loopThroughBumperCatMapToPages = this.loopThroughBumperCatMapToPages.bind(this);
        this.testNewstate = this.testNewstate.bind(this);
        // this.createPages = this.createPages.bind(this);
    }
    testNewstate() {
        let tester = {...this.state}
        this.setState({
            pagesTester: this.state.apiData,
            pagesTester2: 'test worked'
        })
    }
    async dataPullFromAPI() {
            let storageLoc = window.localStorage;
            let batch = await fetch('/api/bumpers', {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'localStore': JSON.stringify(storageLoc)
                }
            })
            .then(resp => resp.json())
            .then(data => {
                // let dataFromAPI = [];
                console.log(storageLoc, 'storageloc')
                console.log(data, 'data inside async dataPullFromAPI')
                // console.log(dataFromAPI, '[apibumpers inside] datafromapi');
                // console.log(bumperStickers, '[bumpersfunctest] bumperstickers');
                this.setState({
                    apiData: data
                })
            })
            .then(setTimeout(() => this.testNewstate(),1000))
        }

    handleAddCartClick(e) {
        console.log(e.target.parentNode.previousSibling, '[bumpersfunctest.jsx] event click add to cart'); // returns div with bumper id#
        console.log('[bumpersfunctest.jsx] before before : incartset incartset')
        // this.setState({
            // text: 'Item In Cart',
            // textStyle: {color: 'red', fontWeight: 'bold', fontSize: 'medium'}
        // })
        let tempInCartState = this.state.inCartItems;
        // need to fix cart update items
        console.log(localStorage, '[bumpersfunctest.jsx] localstorage')
        tempInCartState.push(e.target.parentNode.previousSibling, e.target.parentNode.parentNode);
        this.setState({
            inCartTotal: this.state.inCartTotal + 1,
            inCartItems: tempInCartState,
        });
        console.log('[bumpersfunctest.jsx] after after : incartset incartset')
        console.log(this.state.inCartItems, this.state.inCartTotal, '[bumpersfunctest.jsx] state: incart')
        tempInCartState = [];
    }
    handlePageChange(e) {
        this.setState({
            sidebarCurrBumpers: [{title: "test", id: 1}, {title: "test", id: 2}]
            // this is not fixed
        })
    }
    handlePageChangeCat(event) {
        // console.log('test click worked', event.currentTarget.attributes)
        this.setState({
            radioPagesFiltered: pagesForCats[event.target.getAttribute('customcattag')].pages[event.currentTarget.value-1]
            // -1 to match +1 of push from temp num array in loop
        })
    }
    handleRadioCatChange(event) {
        event.stopPropagation();
        this.setState({
            radioCatSelected: event.target.value,
            radioCatSelectedPageNums: pagesForCats[event.currentTarget.value].pageNumbersArr,
            radioPagesFiltered: pagesForCats[event.currentTarget.value].pages[0]
        })
    }
    loopThroughBumperCatMapToPages() {
        // callToCreatePages: add createPages scope for switchGenCreate
        const callToCreatePages = () => this.createPages();
        console.log(this, '999999999999988888')
        for(let item of catsRadioArrForForm) {
                this.bumperCatMapToPages(item.value);
            }
            this.setState({
                pagesForCats: pagesForCats
            })
            console.log(pagesForCats, '+++++++ p for cats')
            return pagesForCats;
        }
    
    switchGenCreate(passedFromSwitch) {
        let data;
        data = this.createPages(20, passedFromSwitch);
        console.log(passedFromSwitch, 'mmmmmmmmmmmmmmpassed')
        console.log(data, 'data *&*&*&*#$#$#$#$!@!@!@')
        pagesForCats[passedFromSwitch] = data;
        // pagesForCats.push(data);
        console.log(pagesForCats, '^^^^^______&*&*&*&*&*&*&*&')
    }
    bumperCatMapToPages = (catPassed) => {
        // generate bumpers categories pages
            switch (catPassed) {
            // need to automate this for cat changes > forEach or while
                case 'all':
                    this.switchGenCreate(catPassed);
                    break;
                case 'inappropriate':
                    this.switchGenCreate(catPassed);
                    break;
                case 'drive-traffic':
                    this.switchGenCreate(catPassed);
                    break;
                case 'political':
                    this.switchGenCreate(catPassed);
                    break;
                case 'family':
                    this.switchGenCreate(catPassed);
                    break;
                case 'thoughtful':
                    this.switchGenCreate(catPassed);
                    break;
                case 'thought-provoking':
                    this.switchGenCreate(catPassed);
                    break;
                default:
                    break;
                }
        }
        // issue with this context <<<< 
        createPages(perPage = 16, itemCat) {
            pages = []; // pushing pages from pageNumGen()
            // pagesForCats = []; // reset to ensure not duplicated
            
            // function init() {
                function catFilter() {
                    // filtering based on category string passed
                    return itemCat === ('all')
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
                let bLength = catFilter().bumpSelectedLength;
                console.log('length>>', bLength, 'cat>>>', itemCat, 'blength filtered test', bumperStickers.filter(item => item.category === 'inappropriate').length, '[after catfilter] blength')
                let numberOfPages = (Number.isInteger(bLength / perPage)) ? bLength / perPage : (parseInt(bLength / perPage) + 1);
        
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
                            console.log('[pagenumgen in createpages] itemcat', itemCat, '[pagenumgen in createpages] itemcat')
                            j++; z++;
                            // }
                        }
                        z=0;
                        return temp;
                    }
                    function pushPage(i) {
                        pageNumbersArrTemp.push(i)
                    }
                    for(let i = 0; i < numberOfPages; i++) {
                            // load number + bumpers to temp then push to pages
                            let objTemp = {};
                            objTemp = objBumpersTempLoader();
                            pages[i] = objTemp;
                            pushPage(i);
                            temp = [];
                            // objTemp = {};
                        }
                        pageNumbersArr = pageNumbersArrTemp.map(item => item+1);
                        pageNumbersArrTemp = [];
                }
                pageNumGen();
                return {
                    numberOfPages,
                    pages,
                    pageNumbersArr
                    }
        }
render() {
    return (
        <BumpersContext.Provider value={{
            prevBumpers: this.state.prevBumpers,
            // currBumpers: this.state.currBumpers,
            // currBumpersPages: this.state.currBumpersPages, 
            sidebarPrevBumpers: this.state.sidebarPrevBumpers,
            sidebarCurrBumpers: this.state.sidebarCurrBumpers,
            sidebarCurrBumpersPages: this.state.sidebarCurrBumpersPages,
            radioCatSelected: this.state.radioCatSelected,
            radioCatSelectedPageNums: this.state.radioCatSelectedPageNums,
            radioPagesFiltered: this.state.radioPagesFiltered,
            handlePageChange: this.handlePageChange,
            handlePageChangeCat: this.handlePageChangeCat,
            handleRadioCatChange: this.handleRadioCatChange,
            handleAddCartClick: this.handleAddCartClick,
            inCartTotal: 0,
            inCartItems: this.state.inCartItems,
            textStyle: this.state.textStyle
        }}>
            {this.props.children}
        </BumpersContext.Provider>
    )
    }
    componentDidMount() {
        this.loopThroughBumperCatMapToPages(); // add category pages after load
        this.setState({
            sidebarCurrBumpers: [`pagesForCats['all'].pages[1]`, 'test']
        });
        this.dataPullFromAPI();
    }
}
// <<< End of BumperContextProvider >>>

export const BumpersCreator = () => {
    return (
       {/* <CreateBumpers /> */} 
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
bumperIDAdd();

console.log(pagesForCats, '[pagesForCats after const = []]')


let pageNumbersArr = [];
let pageNumbersArrTemp = [];
let pages = [];


export default BumpersContext;