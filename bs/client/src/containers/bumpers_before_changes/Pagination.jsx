import React from '../containers/bumpers/react';
// import {OneBumper} from './OneBumper';

export class Pagination extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPageNum: {
                page: 1,
                className: "page-number current-bumper-page-loaded"
            },
            className: "page-number",
            pageNums: [0,1,2,3,4,5,6]
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
            console.log('  .page: ', this.state.currentPageNum.page);
            console.log('curr id: ', e.target.id);
            console.log(this.state)
    }
    click(){
        this.setState(
            ({
                className: "page-number current-bumper-page-loaded"
            })
        )
    }
    unClick() {
        console.log(this.state.pageNums);
        /* return this.state.pageNums.indexOf(); */
    }
    render() {
        return (
            <div id="simple-pagination">
            <ul id='bumper-ul'>
            <Pages pageNums = {this.state.pageNums} key={this.props.key} id={this.props.id} className = {this.state.className} onClick = {this.clickCheck} />
            </ul>
            </div>
        )
    }
}
function Pages({pageNums, className, onClick}) {
    return (
        pageNums.map(
            (item, i = 0) => {  
                return <li id={i} key={i++} className={className} onClick = {onClick}>{item}</li>
            }
        )
    )
}



export default Pagination;