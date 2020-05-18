import React, { Children, Fragment, Component } from 'react';
import BumpersContext from '../containers/bumpers/BumpersFuncTest';
import {SoloBumper} from '../containers/bumpers/SoloBumper'

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
            <BumpersContext.Consumer>
            {
                context => (
                    <CatFormToggleBumpers contextForm={context.radioPagesFiltered} >
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
    return (
        /* <div className="content-grid" id="main-wrapper" key={5}>
        <div id="cat-items-rendered"> */
        <main className="main-content">
        <div id="main-wrapper" className="content-grid">
        <div id="bumper-left" className="content-left bumper-flex" key={7}>
        <Fragment>
        {props.contextForm.map(item => 
            <SoloBumper> <div key={item.id} style={{border: "1px solid black", height: "75px", verticalAlign: "middle"}}>{item.title}</div></SoloBumper>)
        }
        {/* props.contextForm.map(item => <button key={item.id}>{item.title}</button>) */}
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
            props.contextFormPages.map(item => <li key={item} className={"page-number"} value={item} customCatTag={props.catPassedForPageTurn} onClick={props.pagesClick}>{item}</li>)
        }
        </ul>
        </div>
    )
}
export const catsRadioArrForForm = [
    // form: name: "bumpers-cat-radio" | onChange: "props.handleRadioCatChange" | class: "bumpers-label-radio"
    {value: "all", id: "all", 
    checked: "props.selected === 'all'", onChange: "props.handleRadioCatChange", text: "All Bumpers"},
    {value: "inappropriate", id: "inappropriate", 
    checked: "props.selected === 'inappropriate'", onChange: "props.handleRadioCatChange", text: "Inappropriate"},
    {value: "drive-traffic", id: "drive-traffic", 
    checked: "props.selected === 'drive-traffic'", onChange: "props.handleRadioCatChange", text: "Driving & Traffic"},
    {value: "political", id: "political", 
    checked: "props.selected === 'political'", onChange: "props.handleRadioCatChange", text: "Political"},
    {value: "family", id: "family", 
    checked: "props.selected === 'family'", onChange: "props.handleRadioCatChange", text: "Family"},
    {value: "thoughtful", id: "thoughtful", 
    checked: "props.selected === 'thoughtful'", onChange: "props.handleRadioCatChange", text: "Thoughtful"},
    {value: "thought-provoking", id: "thought-provoking", 
    checked: "props.selected === 'thought-provoking'", onChange: "props.handleRadioCatChange", text: "Thought-provoking"}
]
const CategoryRadioList = (props) => {
    return (
        <div className="categories" id="categories" style={{display: "grid", backgroundColor: "white"}}>
                <h2>Please select a category</h2>
                <form>
                {catsRadioArrForForm.map(item => 
                    <Fragment>
                    <input key={item.id} type="radio" name="bumpers-cat-radio" value={item.value} id={item.id} checked={props.selected === item.value} onChange={props.handleRadioCatChange} />
                    <label htmlFor={item.value} className="bumpers-label-radio">{item.text}</label>
                    </Fragment>
                )
            }
                </form>
            </div>
    )
}
let temp = {/* <input type="radio" name="bumpers-cat-radio" value="all" id="all" checked={props.selected === 'all'} onChange={props.handleRadioCatChange} />
<label className="bumpers-label-radio" htmlFor="all">All Bumpers</label>
<input type="radio" name="bumpers-cat-radio" value="inappropriate" id="inappropriate" checked={props.selected === 'inappropriate'} onChange={props.handleRadioCatChange} />
<label className="bumpers-label-radio" htmlFor="inappropriate">Inappropriate</label>
<input type="radio" name="bumpers-cat-radio" value="drive-traffic" id="drive-traffic" checked={props.selected === 'drive-traffic'} onChange={props.handleRadioCatChange} />
<label className="bumpers-label-radio" htmlFor="drive-traffic">Driving & Traffic</label>
<input type="radio" name="bumpers-cat-radio" value="political" id="political" checked={props.selected === 'political'} onChange={props.handleRadioCatChange} />
<label className="bumpers-label-radio" htmlFor="political">Political</label>
<input type="radio" name="bumpers-cat-radio" value="family" id="family" onChange={props.handleRadioCatChange} checked={props.selected === 'family'} />
<label className="bumpers-label-radio" htmlFor="family">Family</label>
<input type="radio" name="bumpers-cat-radio" value="thoughtful" id="thoughtful" checked={props.selected === 'thoughtful'} onChange={props.handleRadioCatChange} />
<label className="bumpers-label-radio" htmlFor="thoughtful">Thoughtful</label>
<input type="radio" name="bumpers-cat-radio" value="thought-provoking" id="thought-provoking" checked={props.selected === 'thought-provoking'} onChange={props.handleRadioCatChange} />
<label className="bumpers-label-radio" htmlFor="thought-provoking">Thought-provoking</label> */}

export default Categories;