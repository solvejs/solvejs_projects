import React from 'react';
// import requireAuthentication from '../containers/Authentication/requireAuthentication';

function Dashboard(props) {
    return (
        <div>
        <h2>Welcome {props.name}</h2>
        <p>On this site, you can add bumper stickers to your shopping cart at the top right.
        </p>
        </div>
    )
}
export default Dashboard;