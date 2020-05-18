import React from 'react';
//import {OneBumper} from './OneBumper';

export class Pagination extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPageNum: {
                page: 1,
                className: "page-number current-bumper-page-loaded"
            },
            className: "page-number",
        }
        this.click = this.click.bind(this);
        this.clickCheck = this.clickCheck.bind(this);
        this.unClick = this.unClick.bind(this);
    }
    clicker = (e) => {
        this.setState((e) => ({
            className: "page-number current-bumper-page-loaded",
            currentPageNum: this.props.item.id
        }))
    }
    clickCheck(e) {
        this.state.currentPageNum.page.valueOf() === e.target.id ? this.setState((e.target.value) = {
            className: this.state.currentPageNum.className }) : this.setState({ className: this.state.className});
    }
    click(){
        let pageLiNums = document.querySelectorAll("li.page-number");
        pageLiNums.addEventListener('click', (e) => {
            this.setState(
                ({
                    className: 'this.props.pageNumClass.select'
                })
            )
        })
    }
    unClick() {
        console.log(this.state.pageNums);
        /* return this.state.pageNums.indexOf(); */
    }
    render() {
        // const pageNumClass = {
        //     basic: "page-number",
        //     select: "page-number current-bumper-page-loaded"
        // }
        // const { basic, select } = pageNumClass
        return (
            <div id="simple-pagination">
            <ul id='bumper-ul'>
            {
                this.props.pages.map(
                    item => {
                        return <li className={item.pageClass} key={item.page} onClick={this.props.pageFlip}>{item.page}</li>
                    }
                )
            }
            {/* <li className={'test'} key={777} onClick={this.props.pageFlip}>'00000'</li> */}
            {/* this.state.pages.map((item) => <li className={this.props.className} key={item.toString()} onClick={this.props.pageFlip}>{item}</li>) */}
            {/* <Pages pages={this.props.pages} /> */}
            {/* <Pages pageNums = {this.state.pageNums} key={this.props.key} id={this.props.id} className = {this.state.className} onClick = {this.clickCheck} /> */}
            </ul>
            </div>
        )
    }
}
// function Pages({pages, className, onClick}) {
//     return (
//         () => pages.map(
//             item => <li>{item}</li>
//         )
        // pages.map(
        //     (item, i = 0) => {  
        //         return <li>id={i} key={i++} className={className} onClick = {onClick}>{item}</li>
        //         /* return <li id={i} key={i++} className={className} onClick = {onClick}>{item}</li> */
        //     }
        // )
//     )
// }



export default Pagination;