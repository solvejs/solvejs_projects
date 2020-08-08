import React, { Children, Fragment, Component } from 'react';
import BumpersContext from '../containers/bumpers/BumpersAndCats';
import {SoloBumper} from '../containers/bumpers/SoloBumper';
import Title from './Title';
import { randCol } from '../utils/randColors';

export class Categories extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <Fragment>
            <BumpersContext.Consumer>
            {
                context => (
                    <CategoryRadioList contextList={context.currBumpersPages} handlePageChangeCat={context.handlePageChangeCat} selected={context.radioCatSelected} handleRadioCatChange={context.handleRadioCatChange}>
                    {Children}
                    </CategoryRadioList>      
                )
            }
            </BumpersContext.Consumer>
            <Title />
            <BumpersContext.Consumer>
            {
                context => (
                    <CatFormToggleBumpers contextForm={context.radioPagesFiltered} contextCartItems={context.inCartItems} contextAddCartHandle={context.handleAddCartClick} contextTextStyle={context.textStyle} contextButtonIn={context.textStyleInCartButtonClass1} contextButtonOut={context.textStyleInCartButtonClass2} contextFontSize={context.bumperTextSize} >
                    {Children}
                    </CatFormToggleBumpers>
                )
            }
            </BumpersContext.Consumer>
            <BumpersContext.Consumer>
            {
                context => (
                    <CatPagesArr contextFormPages={context.radioCatSelectedPageNums} pagesClick={context.handlePageChangeCat} catPassedForPageTurn={context.radioCatSelected} >
                    {Children}
                    </CatPagesArr>
                )
            }
            </BumpersContext.Consumer>
            </Fragment>
            )
    }
}

const CatFormToggleBumpers = (props) => {
    let unparsedLocStor = localStorage.getItem('inCartLocStoreArr') || "[]";
    let parsedLocStor = unparsedLocStor !== null || "[]" ? JSON.parse(unparsedLocStor) : undefined;
    const fontSize = props.contextFontSize;
    const fontSz = (item) => {
        document.getElementById(item.id)
    }
    return (
        /* <div className="content-grid" id="main-wrapper" key={5}>
        <div id="cat-items-rendered"> */
        <main className="main-content">
        <div id="main-wrapper" className="content-grid">
        <div id="bumper-left" className="content-left bumper-flex" key={7}>
        <Fragment>
        {props.contextForm.map(item =>
            parsedLocStor !== (null || undefined || "[]") && parsedLocStor.includes(`cartItemLocal-${item.id}`) ?
            <SoloBumper key={item.id} clickCartButtonHandle={props.contextAddCartHandle} text={'In Cart'} buttonClass={'add-to-cart-selected'}> <div id={item.id} style={{display: 'block', width: '100%', height: "75px"}}><span style={{height: '75px', lineHeight: '75px', display: 'inline-grid', color: randCol(), backgroundColor: randCol()}}>{item.title}</span></div></SoloBumper> :
            <SoloBumper key={item.id} clickCartButtonHandle={props.contextAddCartHandle} text={'Add to Cart'} buttonClass={'add-to-cart'}> <div id={item.id} style={{display: 'block', width: '100%', height: "75px"}}><span style={{height: '75px', lineHeight: '75px', display: 'inline-grid', color: randCol(), backgroundColor: randCol()}}>{item.title}</span></div></SoloBumper>
            )
        }
        {/****** 
            later link this to api for updates text={item.cartStatus}   ******/
        /* props.contextForm.map(item => <button key={item.id}>{item.title}</button>) */}
        </Fragment>
        </div>
        </div>
        </main>
        /* </div>
        </div> */
    )
}
const CatPagesArr = (props) => {
    return (
        <div id="simple-pagination">
        <ul id='bumper-ul'>
        {
            props.contextFormPages.map(item => <li key={item} className={"page-number"} value={item} customcattag={props.catPassedForPageTurn} onClick={props.pagesClick}>{item}</li>)
        }
        </ul>
        </div>
    )
}
export const catsRadioArrForForm = [
    // form: name: "bumpers-cat-radio" | onChange: "props.handleRadioCatChange" | class: "bumpers-label-radio"
    {value: "all", id: "all", 
    checked: "props.selected === 'all'", onChange: "props.handleRadioCatChange", text: "All Bumpers"},
    {value: "drive-traffic", id: "drive-traffic", 
    checked: "props.selected === 'drive-traffic'", onChange: "props.handleRadioCatChange", text: "Driving & Traffic"},
    {value: "logos", id: "logos", 
    checked: "props.selected === 'logos'", onChange: "props.handleRadioCatChange", text: "Logos"},
    {value: "diy", id: "diy", 
    checked: "props.selected === 'diy'", onChange: "props.handleRadioCatChange", text: "DIY"},
    {value: "thoughtful", id: "thoughtful", 
    checked: "props.selected === 'thoughtful'", onChange: "props.handleRadioCatChange", text: "Thoughtful"},
    {value: "health", id: "health", 
    checked: "props.selected === 'health'", onChange: "props.handleRadioCatChange", text: "Health"},
    {value: "inappropriate", id: "inappropriate", 
    checked: "props.selected === 'inappropriate'", onChange: "props.handleRadioCatChange", text: "Inappropriate"},
]
const CategoryRadioList = (props) => {
    return (
        <div className="categories" id="categories" style={{display: "grid", backgroundColor: "white"}}>
                <h2>Please select a category</h2>
                <form>
                {catsRadioArrForForm.map(item => 
                    <Fragment key={item.id}>
                    <input type="radio" name="bumpers-cat-radio" value={item.value} id={item.id} checked={props.selected === item.value} onChange={props.handleRadioCatChange} />
                    <label htmlFor={item.value} className="bumpers-label-radio">{item.text}</label>
                    </Fragment>
                )
            }
                </form>
            </div>
    )
}

export default Categories;