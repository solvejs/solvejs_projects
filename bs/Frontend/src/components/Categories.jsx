import React, { Children, Fragment, Component } from 'react';
import BumpersContext from '../containers/bumpers/BumpersFuncTest';

class Categories extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <BumpersContext.Consumer>
            {
                context => (
                    <CatList contextList={context.currBumpersPages} handlePageChangeCat={context.handlePageChangeCat} selected={context.radioCatSelected} handleRadioCatChange={context.handleRadioCatChange}>
                    {Children}
                    </CatList>      
                )
            }
            </BumpersContext.Consumer>
            // need to place these in array and set component to pull
            
    
            // temp hide to test state difference between this component and admin
            /* <div className="categories" id="categories" style={{display: "grid", backgroundColor: "white"}}>
                <h2>Please select a category</h2>
                <form>
                <input type="radio" name="bumpers-cat-radio" id="all" />
                <label className="bumpers-label-radio" htmlFor="all">All Bumpers</label>
                <input type="radio" name="bumpers-cat-radio" id="inappropriate" />
                <label className="bumpers-label-radio" htmlFor="inappropriate">Inappropriate</label>
                <input type="radio" name="bumpers-cat-radio" id="drive-traffic" />
                <label className="bumpers-label-radio" htmlFor="drive-traffic">Driving & Traffic</label>
                <input type="radio" name="bumpers-cat-radio" id="political" />
                <label className="bumpers-label-radio" htmlFor="political">Political</label>
                <input type="radio" name="bumpers-cat-radio" id="family" />
                <label className="bumpers-label-radio" htmlFor="family">Family</label>
                <input type="radio" name="bumpers-cat-radio" id="thoughtful" />
                <label className="bumpers-label-radio" htmlFor="thoughtful">Thoughtful</label>
                <input type="radio" name="bumpers-cat-radio" id="thought-provoking" />
                <label className="bumpers-label-radio" htmlFor="thought-provoking">Thought-provoking</label>
                </form>
            </div> */
        )
    }
}

const FormItems = (props) => {
    return (
        <Fragment>
        {props.contextForm.map(item => <button key={item.id}>{item.title}</button>)}
        </Fragment>
    )
}
const CatList = (props) => {
    return (
        <div className="categories" id="categories" style={{display: "grid", backgroundColor: "white"}}>
                <h2>Please select a category</h2>
                <form>
                <input type="radio" name="bumpers-cat-radio" value="all" id="all" checked={props.selected === 'all'} onChange={props.handleRadioCatChange} />
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
                <label className="bumpers-label-radio" htmlFor="thought-provoking">Thought-provoking</label>
                </form>
                    <BumpersContext.Consumer>
                    {
                        context2 => (
                            <FormItems contextForm={context2.radioPagesFiltered}>
                            {Children}
                            </FormItems>
                        )
                    }
                    </BumpersContext.Consumer>
            </div>
    )
}
export default Categories;