import React from 'react';

const Categories = () => {
    return (
        <div className="categories" id="categories" style={{display: "grid", backgroundColor: "white"}}>
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
        </div>
    )
}

export default Categories;