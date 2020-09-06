import React, { Component } from 'react';
import BlogPostCard from './BlogPostCard';
import BlogPostFull from './BlogPostFull';
import Card from './BlogPostRender';
import Projects from '../components/Projects';
import {posts} from '../db/posts';

export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }
handleClick() {
    this.setState({
        active: false
    })
    }
    render() {
        let tech = ['JavaScript', 'ReactJS', 'React Router', 'Express', 'Git - version control', 'Webpack [Development]', 'Nodemon [Development]']
        return (/* need key for list - move to array */
            <div id="content-wrapper">
                <div id='card-posts' key={1}>
                    <h1>**blog componenent will show as cards until clicked; others will remain as cards and reposition &gt;&gt; challenge may be if user selects post in the middle; on click, card will open to post &gt;&gt; 'collapse post'
                    </h1>
                        {posts.map((item, index) =>
                            item.full ? 
                                <Card id={index} title={item.title} image={item.image} text={item.text} writer='James C Hardy, JavaScript | ReactJS | Express | PostgreSQL Web Developer' /> : 
                                <Card id={index} title={item.title} image={item.image} text={item.text} writer='James C Hardy, JavaScript | ReactJS | Express | PostgreSQL Web Developer' />
                        )}
                </div>
            </div>
        )
    }
}