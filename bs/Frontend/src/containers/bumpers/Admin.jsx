import React, { Component, Fragment } from 'react';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            isActive: null,
            items: [
                {
                    Title: "Bumpers Creation",
                    submenu: [
                            "Text", "Layout", "Images", "Categories"
                        ]
                },
                {
                    Title: "Categories"
                }
            ]
        }
        this.state = this.initialState;
    }
    render() {
        return (
            <div className="admin" id="admin">
            <h2>Admin Console</h2>
            <p>This will be a form that controls any and all of the follow items.
            <ul>
            <li>Bumper Creation</li>
                <ul>
                <li>Text</li>
                <li>Layout: Color | Font | Images | Size</li>
                <li>Images</li>
                <li>Categories</li>
                </ul>
            <li>Categories</li>
            : should be auto-generated when labeled
            </ul>
            </p>
            <AdminMenuItem />
            </div>
        )
    }
}
const AdminMenuItem = (props) => {
    return (
        <div>empty</div>
    )
}

export default Admin;