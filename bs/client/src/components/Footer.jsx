import React from 'react';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    footerEls = [
        {
            linkAddr: '#',
            linkName: <span>&copy; 2020 SolveJS</span>
        },
        {
            linkAddr: '#',
            linkName: 'Terms'
        },
        {
            linkAddr: '#',
            linkName: 'Cookies'
        },
        {
            linkAddr: '#',
            linkName: 'FAQs'
        }
    ]
    render() {
        return (
            <footer className="footer">
            <div className="footer footer-flex">
            <PrintFooter footerEls = {this.footerEls} />
            </div>
            </footer>
            )
    }
}

function PrintFooter(props) {
    return (
        props.footerEls.map((item, index) => {
            return <li key = {index} className="footer-item" style={{listStyle: "none", marginRight: "5px"}}>
            <a href ={item.linkAddr}>{item.linkName}</a>
            </li>
        })
    )
}
