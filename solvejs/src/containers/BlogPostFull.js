import React, { Component, Fragment } from 'react';
import {posts} from '../db/posts';

export default class Card extends Component {
    constructor(props) {
        super(props);
            this.state = {
                active: false,
            }
            this.handleClick = this.handleClick.bind(this);
        }
    handleClick() {
        this.setState({
            active: !false
        })
    }
    componentDidMount() {
        let blogText = document.querySelectorAll('div.blog-text');
        for(let item of blogText) {
            let bold = document.createElement('div');
            bold.append('future ad placeholder')
            bold.setAttribute('style', 'display: block; width: 200px; height: 20px; background-color: red');
            item.children[2] ? item.children[2].append(bold): null;
            // console.log(item.childNodes.item(2));
        }
    }
    render() {
        
        return (
                posts.map((item, index) => 
                <div key={index}>
                    <h1 className='title'><a href={item.title.replace(/ /g, '-')}>{item.title}</a></h1>
                    <a href={item.title.replace(/ /g, '-')}><img className='featured-image' src={item.image} width='60px' alt='image did not load' /></a>
                    <div className='blog-text'>{item.text}</div>
                    <span className='author-bio'>{this.props.writer}</span>
                </div>)
        )
    }
} 