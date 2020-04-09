import React from 'react';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <footer className="footer">
            <div className="footer footer-flex">
            <PrintFooter text = '&copy;2020 SolveJS' />
            <PrintFooter code = '#' text = 'Terms' />
            <PrintFooter code = '#' text = 'Cookies' />
            <PrintFooter code = '#' text = 'FAQs' />
            </div>
            </footer>
            )
    }
}

function PrintFooter(props) {
    return (
        <li className="footer-item">
        <a href ={props.code}>{props.text}</a>
        </li>
    )
}
