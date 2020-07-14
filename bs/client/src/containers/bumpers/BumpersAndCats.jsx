import React, { createContext, Component } from 'react';
// import { bumperStickers } from '../bumpers/bumpersTesting';
//import { SoloBumper } from './SoloBumper';
import { catsRadioArrForForm } from '../../components/Categories'

// console.log(DataFromAPI, 'd from a', new Date());
// setTimeout(() => (console.log(DataFromAPI, 'd from a 4000'), new Date()), 4000);
// document.addEventListener('DOMContentLoaded', (event) => {

const pagesForCats = {}; // placeholder for bumperCatMapToPages generation of pages
const BumpersContext = createContext();
export class BumperContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // will need to provide control here for admin logged-in page
            // prevBumpers: {}, may not need this
            // will need to clean up state
            // currBumpers: [createPages().pages[0]],
            // currBumpersPages: pageNumbersArr,
            apiData: [],
            locallyStoredCart: window.localStorage,
            testerLocStor: window.localStorage.tester,
            cartLoggedinStatus: document.cookie.split(';').find( (item) => item.includes('bsLoggedIn')) ? 'Complete Order' : 'Log in to complete order',
            sidebarPrevBumpers: '',
            sidebarCurrBumpers: [{title: "test", id: 1}, {title: "test", id: 2}],
            sidebarCurrBumpersPages: pageNumbersArr,
            //handlePageChange: this.handlePageChange,
            currBumpersPages: pages,
            sidebarPages: pages,
            bumGenLoad: this.createPages,
            // manually setting start page due to page build in componentdidmount > pulling from pageforcats after mount
            radioCatSelectedPageNums:this.createPages(this, 20, 'all').pageNumbersArr,
            radioCatSelected: 'all',
            radioPagesFiltered: [{title: 'PAGE LOADING...', id: 1}],// this.createPages(20, 'all').pages[0], // need function to call this,
            bumperTextSize: '300%', 
            inCartTotal: JSON.parse(localStorage.getItem("inCartLocStoreCount")),
            inCartItems: [],
            textStyleInCart: {
                text: {color: 'blue', fontWeight: 'bold', fontSize: 'medium'}
            },
            textStyleOutCart: {
                text: {color: 'red', fontWeight: 'bold', fontSize: 'medium'}
            }
        }
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handlePageChangeCat = this.handlePageChangeCat.bind(this);
        this.handleRadioCatChange = this.handleRadioCatChange.bind(this);
        this.handleAddCartClick = this.handleAddCartClick.bind(this);
        this.dataPullFromAPI = this.dataPullFromAPI.bind(this);
        this.bumperCatMapToPages = this.bumperCatMapToPages.bind(this);
        this.loopThroughBumperCatMapToPages = this.loopThroughBumperCatMapToPages.bind(this);
        // this.testNewstate = this.testNewstate.bind(this);
        this.createPages = this.createPages.bind(this);
        this.itemsAPIConnect = this.itemsAPIConnect.bind(this);
        this.switchGenCreate = this.switchGenCreate.bind(this);
    }
    // testNewstate() {
    //     let tester = {...this.state}
    //     this.setState({
    //         pagesTester: this.state.apiData,
    //         pagesTester2: 'test worked'
    //     })
    // }
    UNSAFE_componentWillMount() {
        this.dataPullFromAPI();
    }
    componentDidMount() {
        //load 'all' page 1 after 1 sec
        // const regex = /cartItemLocal-[0-9]/;
        // const intermediateLoc = {window.localStorage};
        // for(let item of intermediateLoc) {
        //     if(item.contains('cartItemLocal-')) {
        //         intermediateLoc.push(item)
        //     }
        // }
        // window.localStorage.clear()
        // if(!window.localStorage.getItem('inCartLocStoreArr')) {
        //     window.localStorage.setItem('contextTextStyle', ['test', 'teste'])
        // }
            setTimeout(() => this.setState({
                radioCatSelectedPageNums: pagesForCats['all'].pageNumbersArr,
                radioCatSelected: 'all',
                radioPagesFiltered: pagesForCats['all'].pages[0],
        }), 1000) 
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
                console.log(data, 'data inside async dataPullFromAPI')
                this.setState({
                    apiData: data,
                    localStor: window.localStorage
                })
            })
            .then(() => this.loopThroughBumperCatMapToPages())
        }
    
    handleAddCartClick(e) {
        // console.log(e.target.parentNode.previousSibling, '[bumpersfunctest.jsx] event click add to cart'); // returns div with bumper id#
        // this.setState({
            // text: 'Item In Cart',
            // textStyle: {color: 'red', fontWeight: 'bold', fontSize: 'medium'}
        // })
        let tempInCartState = this.state.inCartItems;
        // need to fix cart update items
        // console.log(localStorage, '[bumpersfunctest.jsx] localstorage')
        tempInCartState.push(e.target.parentNode.previousSibling, e.target.parentNode.parentNode);
        this.setState(prevState => ({
            inCartTotal: JSON.parse(localStorage.getItem("inCartLocStoreCount")),
            inCartItems: tempInCartState,
        }));
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
        //const callToCreatePages = () => this.createPages();
        // const stateBumpersApi = this.state.apiData.slice(0)
        // console.log(stateBumpersApi, '[stateBumpersApi] infodata')
        for(let item of catsRadioArrForForm) {
                this.bumperCatMapToPages(item.value);
            }
            this.setState({
                pagesForCats: pagesForCats
            })
            // console.log(this.state.pagesForCats, '+++++++ p for cats')
            // return pagesForCats;
        }
    
    switchGenCreate(passedFromSwitch) {
        let data;
        // const dataFromStateAPI = JSON.parse(JSON.stringify(this.state.apiData)) // all
        data = this.createPages(20, passedFromSwitch, this.state.apiData); // passing apidata state to createpages func
        pagesForCats[passedFromSwitch] = data;
        // pagesForCats.push(data);
    }
    bumperCatMapToPages = (catPassed) => {
        // generate bumpers categories pages
            switch (catPassed) {
            // need to automate this for cat changes > forEach or while
                case 'all':
                    this.switchGenCreate(catPassed);
                    break;
                case 'drive-traffic':
                    this.switchGenCreate(catPassed);
                    break;
                case 'logos':
                    this.switchGenCreate(catPassed);
                    break;
                case 'diy':
                    this.switchGenCreate(catPassed);
                    break;
                case 'thoughtful':
                    this.switchGenCreate(catPassed);
                    break;
                case 'health':
                    this.switchGenCreate(catPassed);
                    break;
                case 'inappropriate':
                    this.switchGenCreate(catPassed);
                    break;
                default:
                    break;
                }
        }
        // issue with this context <<<< 
        itemsAPIConnect = ({apiData}) => {
            return [...apiData]; // used for state.apidata to createpages func
        }
        transferAPITo = () => this.itemsAPIConnect(this.state)
        createPages = (perPage = 20, itemCategory, transferAPIInfo) => {
            let destrAPIState = JSON.parse(JSON.stringify([...transferAPIInfo]));
            let bumperObj = {};
            pages = [];
            // filtering based on category string passed
            return itemCategory === 'all' ? (
                    bumperObj.bumpersFiltered = destrAPIState,
                    bumperObj.bumpSelectedLength = destrAPIState.length,
                    bumperObj.numberOfPages = Number.isInteger(bumperObj.bumpSelectedLength / perPage) ? bumperObj.bumpSelectedLength / perPage : (parseInt(bumperObj.bumpSelectedLength / perPage) + 1),
                    bumperObj.testing = 'testing obj loading',
                    bumperObj.pageNumbersArr = pageNumbersArr,
                    bumperObj.pageNumGen = (() => {
                        let temp = [];
                        let j = 0, z = 0;
                        function objBumpersTempLoader() {
                            // need while loop for having bumpers and return if not
                            while(j < bumperObj.bumpSelectedLength && z < perPage) {
                                // need a check for bumper exists in loop &&
                                // pushing object to while loop below
                                temp.push(bumperObj.bumpersFiltered[j]);
                                j++; z++;
                                // }
                                // console.log('temp temp temp', temp, 'temp')
                            }
                            z=0;
                            return temp;
                        }
                        pageNumbersArrTemp = [];
                        bumperObj.pages = [];
                        function pushPage(i) {
                            pageNumbersArrTemp.push(i)
                        }
                        for(let i = 0; i < bumperObj.numberOfPages; i++) {
                                // load number + bumpers to temp then push to pages
                                let objTemp = {};
                                objTemp = objBumpersTempLoader();
                                bumperObj.pages[i] = objTemp;
                                pushPage(i);
                                temp = [];
                                // objTemp = {};
                            }
                            bumperObj.pageNumbersArr = pageNumbersArrTemp.map(item => item+1);
                            
                            // using objTempLoader to push > move to key/value in bumpersObj
                            // return {
                            //     numberOfPages,
                            //     pages,
                            //     pageNumbersArr
                            // }
                            return bumperObj;
                        })()
                        // pageNumGen();
             ) : (
                bumperObj.bumpersFiltered = destrAPIState.filter(item => item.category === itemCategory),
                bumperObj.bumpSelectedLength = destrAPIState.filter(item => item.category === itemCategory).length,
                bumperObj.numberOfPages = (Number.isInteger(bumperObj.bumpSelectedLength / perPage) ? bumperObj.bumpSelectedLength / perPage : (parseInt(bumperObj.bumpSelectedLength / perPage) + 1)),
                bumperObj.pageNumbersArr = pageNumbersArr,
                bumperObj.testing = 'testing obj loading',
                bumperObj.pageNumGen = (() => {
                        let temp = [];
                        let j = 0, z = 0;
                        function objBumpersTempLoader() {
                            // need while loop for having bumpers and return if not
                            while(j < bumperObj.bumpSelectedLength && z < perPage) {
                                // need a check for bumper exists in loop &&
                                // pushing object to while loop below
                                temp.push(bumperObj.bumpersFiltered[j]);
                                j++; z++;
                                // }
                            }
                            z=0;
                            return temp;
                        }
                        pageNumbersArrTemp = [];
                        bumperObj.pages = [];
                        function pushPage(i) {
                            pageNumbersArrTemp.push(i)
                        }
                        for(let i = 0; i < bumperObj.numberOfPages; i++) {
                                // load number + bumpers to temp then push to pages
                                let objTemp = {};
                                objTemp = objBumpersTempLoader();
                                bumperObj.pages[i] = objTemp;
                                pushPage(i);
                                temp = [];
                                // objTemp = {};
                            }
                            bumperObj.pageNumbersArr = pageNumbersArrTemp.map(item => item+1);
                            pageNumbersArrTemp = [];
                    // pageNumGen();
                    // using objTempLoader to push > move to key/value in bumpersObj
                            // return {
                            //     numberOfPages,
                            //     pages,
                            //     pageNumbersArr
                            // }
                            return bumperObj;
                    })()
             )
            // return itemCat === ('all')
            // ? {
            //     bumpersFiltered: bumperStickers,
            //     bumpSelectedLength: bumperStickers.length,
            //     pageNumbersArr: pageNumbersArr
            // }
            // : {
            //     bumpersFiltered: bumperStickers.filter(item => item.category === itemCat),
            //     bumpSelectedLength: bumperStickers.filter(item => item.category === itemCat).length,
            //     pageNumbersArr: pageNumbersArr
            //     }
            }
            // TEMP NAME CHANGE CREATEPAGES FOR TESTING ABOVE
fontGrow = () => {
    const divClassBumperLong = document.querySelectorAll('div.bumper-long');
    let styles;
    let k = 0;
    divClassBumperLong.forEach(item => {
        let font = 10;
        let iDiv=Number(item.firstElementChild.clientWidth.toString().replace(/D/g, ''))
        let iSpan = Number(item.firstElementChild.firstChild.clientWidth.toString().replace(/D/g, ''));
        while( (iDiv-iSpan)>=60) { // WHY DOES NUMBER 60 WORK BEST?????
            font+=2;
            iDiv=Number(item.firstElementChild.clientWidth.toString().replace(/D/g, ''))
            iSpan = Number(item.firstElementChild.firstChild.clientWidth.toString().replace(/D/g, ''));
            item.firstElementChild.firstChild.style.fontSize = font +'px';
            // let tmpSpanFontPercent = Number(spanItem.clientWidth.toString().replace(/\D/g, ''));
            // let tmpDivFont = Number(divItem.clientWidth.toString().replace(/D/g, ''));
            // iSpan.style.fontSize = ((font += 2) + 'px').toString() //(font += 5)
            console.log(iDiv-iSpan)
        }
        // if(item.clientWidth > spanItem.clientWidth) {
        //     spanItem.style.fontSize = '200%';
        //     console.log('loaded ... width', item.clientWidth, divItem.clientWidth, spanItem.clientWidth)
        // } else {
        //     spanItem.style.fontSize = '50%'
        //     console.log('loaded ... width', item.clientWidth, divItem.clientWidth, spanItem.clientWidth)
        // }
        // styles.style.border = '3px solid purple',
    }
    )
}
componentDidUpdate() {
    // if(document.querySelectorAll('div.bumper-long')) {
        this.fontGrow()
    // }
}
render() {
    if(!this.state.apiData) {
        return <div>Loading...please wait</div>
    }
    return (
        <BumpersContext.Provider value={{
            prevBumpers: this.state.prevBumpers,
            // currBumpers: this.state.currBumpers,
            // currBumpersPages: this.state.currBumpersPages, 
            apiData: this.state.apiData,
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
            inCartTotal: JSON.parse(localStorage.getItem("inCartLocStoreCount")),
            inCartItems: this.state.inCartItems,
            cartLoggedinStatus: this.state.cartLoggedinStatus,
            textStyle: this.state.textStyle,
            textSize: this.state.bumperTextSize,
        }}>
            {this.props.children}
        </BumpersContext.Provider>
    )
    }
    
}
// <<< End of BumperContextProvider >>>

export const BumpersCreator = () => {
    return (
       {/* <CreateBumpers /> */} 
    )
}
// const bumperIDAdd = () => {
//     // ensure runs at app start for unique id that follows for keys use
//     let i=0;
//     for(let bumper of bumperStickers) {
//         bumper.id = i;
//         i++;
//     }
// }
// bumperIDAdd(); now using bumpers from API vs import

let pageNumbersArr = [];
let pageNumbersArrTemp = [];
let pages = [];


export default BumpersContext;