import React, { Fragment, Children } from 'react';
import BumpersContext from '../bumpers/BumpersFuncTest';
import {SoloBumperShort} from '../bumpers/SoloBumperShort';
import requireAuthentication from '../Authentication/requireAuthentication';

export function Aside() {
    return (
        <BumpersContext.Consumer>
            {
                context => (
                    <BumpersAside bumps={context.sidebarCurrBumpers}>
                        {Children}
                    </BumpersAside>
                )
            }
        </BumpersContext.Consumer>
    )
}

function BumpersAside(props) {
    return (
        <aside className="sidebar">
            <div key={4} id="bumper-right" className="content-right bumper-flex">
            <div className="popular-bumpers">
            <span style={{display: "inline-block", textAlign: "center"}}>Popular Bumpers</span>
            <ul>
        <Fragment>
        {props.bumps.map(item => <SoloBumperShort key={item.id}><div style={{border: "1px solid black", height: "75px", verticalAlign: "middle"}}>{item.title}</div></SoloBumperShort>)}
        </Fragment>
        </ul>
            </div>
            </div>
            </aside>
    )
}
export default Aside;