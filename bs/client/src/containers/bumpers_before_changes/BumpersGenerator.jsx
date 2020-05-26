import React, {Component} from '../containers/bumpers/react';
import {bumperStickers} from './bumpers';
// import {Pagination} from './Pagination';
import {OneBumper} from './OneBumper';

class BumpersDiv extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPageNumber: 1,
            totalPages: 1
            };
        }
        render() {
            return (
                <main className="main-content">
                <div className="content-grid" id="main-wrapper">
                <Bumper bumpers = {bumperStickers} />
                </div>
                </main>
                )
        }
}
class Bumper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalPages: 1,
                className: 'bumper bumper-long',
                bumpersPaged: {
                    1: {
                        bumpers: [],
                        page: 1
                    }
                },
                pages: [],
                currentPageNumber: 1
        };
        this.callParentStateUpdate = this.callParentStateUpdate.bind(this);
    }
    callParentStateUpdate = (data, data2) => {
        this.setState(() => ({
            bumpersPaged: data,
            pages: data2
        }))
    }
    render() {
        return (
            <div className="content-grid" id="main-wrapper">
            <div key={3} id="bumper-left" className="content-left bumper-flex">
            <OneBumper bumpers = {this.props.bumpers} id={this.props.id} {...this.state} updateParent={this.callParentStateUpdate} />
            <div key={4} id="bumper-right" className="content-left bumper-flex">test</div>
            </div>
            </div>
        )
    }
}

export default BumpersDiv;
export { bumperStickers };