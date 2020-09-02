import React, { Component } from 'react';
import Card from './Card';

export default class Blog extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="content-wrapper">
                <div id="web-projects">
                <ul className="projects skills">
                    <li className="single-project">
                    <a href="https://bumpers.solvejs.com">Bumper Stickers - e-commerce</a>
                    </li>
                    <li className="technologies">JavaScript</li>
                    <li className="technologies">ReactJS</li>
                    <li className="technologies">React Router</li>
                    <li className="technologies">Express</li>
                    <li className="technologies">Git - version control</li>
                    <li className="technologies">Webpack [Development]</li>
                    <li className="technologies">Nodemon [Development]</li>
                </ul>
            </div>
            <div id='card-posts'>
                <h1>**blog componenent will show as cards until clicked; others will remain as cards and reposition &gt;&gt; challenge may be if user selects post in the middle; on click, card will open to post &gt;&gt; 'collapse post'
                </h1>
                <Card writer='James C Hardy, JavaScript | ReactJS | Express | PostgreSQL Web Developer' />
                <span> &gt; will go in blog post later</span>
            </div>
            </div>
        )
    }
}