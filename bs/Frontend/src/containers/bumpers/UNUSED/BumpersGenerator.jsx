import React, {Component } from 'react';
import {bumperStickers} from './bumpers';
import {OneBumper} from './OneBumper';
import {Categories} from '../../components/Categories';
import Pagination from './Pagination';
//import {SoloBumper} from './codeplayground';

function BumpersDiv() {
            return (
                <main className="main-content">
                <div className="content-grid" id="main-wrapper">
                <Bumpers bumpers = {bumperStickers}/>
                </div>
                </main>
                )
        }
class Bumpers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // totalPages: 1,
            // className: 'bumper bumper-long',
            bumpersPaged: {},
            pages: [],
            currentPageNumber: 1,
            currentBumpersOnPage: ''
        };
        this.callParentStateUpdate = this.callParentStateUpdate.bind(this);
        this.pageClickToBumpersPage = this.pageClickToBumpersPage.bind(this);
        this.clickPageClass = this.clickPageClass.bind(this);
        // this.load32Bumpers = this.load32Bumpers.bind(this);
    }
    callParentStateUpdate = (data1, data2, data3) => {
        this.setState(() => ({
            bumpersPaged: data1,
            pages: data2,
            currentBumpersOnPage: data3,
        }))
    }
    pageClickToBumpersPage = (event) => {
        const clicker = () => {
            // need way to change state of current page
            // need to set default state when not current page
            // 
            this.setState({
                currentPageNumber: event.target.innerText,
                currentBumpersOnPage: this.state.bumpersPaged[event.target.innerText].bumpers,
                /* pages: {
                    2: {
                        pageClass: 'page-number current-bumper-page-loaded'
                    }
                } */
            });
            if(Number(event.target.innerText) === 2) {
            }
        }
        clicker();
    }
    clickPageClass(){
            this.setState(
                ({
                    className: 'this.props.pageNumClass.select'
                })
            )
    }
    render() {
        return (
            <div className="content-grid" id="main-wrapper" key={5}>
            <div id="bumper-left" className="content-left bumper-flex" key={7}>
            {/* <Categories /> */}
            {/* <OneBumper bumpers = {this.props.bumpers} updateParent={this.callParentStateUpdate} currBumpers={this.state.currentBumpersOnPage} id={this.props.id} {...this.state}>
            </OneBumper> */}
            </div>
            <aside className="sidebar">
            <div key={4} id="bumper-right" className="content-right bumper-flex">
            <div className="popular-bumpers">
            <ul>
            </ul>
            </div>
            </div>
            </aside>
            {/* <Pagination {...this.state} pageFlip={this.pageClickToBumpersPage} className={this.state.pages} /> */}
            </div>
        )
    }
}

export default BumpersDiv;
export { bumperStickers };