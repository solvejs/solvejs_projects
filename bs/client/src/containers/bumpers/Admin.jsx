import React, { Component, Fragment } from 'react';
// import BumpersContext from './BumpersFuncTest';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            isActive: null,
            items: [
                {
                    Title: "Bumpers Creation",
                    submenu: [
                            "Text", "Layout", "Images", "Categories", "Font", "Size"
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
            </p>
            <ul>
            <li>Bumper Creation</li>
            <li>Categories</li>
            : should be auto-generated when labeled
            </ul>
            <AdminMenuItem />
            </div>
        )
    }
}
class AdminMenuItem extends Component {
    render() {
        return (
            <div>
            <p>When enabled, Express attempts to determine the IP address of the client connected through the front-facing proxy, or series of proxies. The `req.ips` property, then contains an array of IP addresses the client is connected through. To enable it, use the values described in
            </p>
            </div>
        )
    }
}

{/* const PagesLoaded = () =>
    (
        <BumpersContext.Consumer>
        {
            context => (
                <Button contextVal={context.sidebarCurrBumpers}>
                {Children}
                </Button>
            )
        }
        </BumpersContext.Consumer>
    )
    const PagesLoaded2 = () => 
    (
        <BumpersContext.Consumer>
        {
            context2 => (
                <Pages contextPagesVal={context2.sidebarCurrBumpersPages} handlePageChange={context2.handlePageChange}>
                {Children}
                </Pages>
            )
        }
        </BumpersContext.Consumer>
    ) */}

    const Button = (props) => {
        return (
            <Fragment>
            {props.contextVal.map(item => <button key={item.id}>{item.title}</button>)}
            </Fragment>
            )
    }

    const Pages = (props) => {
        return (
                <div>
                <Fragment>
                {props.contextPagesVal.map(item => <button key={item} onClick={props.handlePageChange}>{item}</button>)}
                </Fragment>
                </div>
                // <Pages contextPagesVal={context.sidebarCurrBumpersPages}>
                // {Children}
                // </Pages>
            )
        }

export default Admin;