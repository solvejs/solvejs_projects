import React, { Component, Fragment } from 'react';
import {posts} from '../db/posts';

export default class Card extends Component {
    constructor(props) {
        super(props);
            this.state = {
                full: false,
            }
            this.handleClickFullSize = this.handleClickFullSize.bind(this);
            this.handleParagraphAd = this.handleParagraphAd.bind(this);
        }
    handleClickFullSize(state) {
        this.setState({
            full: !this.state.full
        })
    }
    handleParagraphAd() {
        let imageTest = import ('../../public/images/ads/demo_ad.png');
        let divImg = document.createElement('div');
        divImg.append(imageTest);
        document.querySelectorAll(('.blog-text p:nth-child(2)')).forEach(item => item.append(imageTest));
    }
    componentDidMount() {
        this.handleParagraphAd();
    }
    // componentDidMount() {
    //     let blogText = document.querySelectorAll('div.blog-text');
    //     for(let item of blogText) {
    //         let bold = document.createElement('div');
    //         bold.append('future ad placeholder')
    //         bold.setAttribute('style', 'display: block; width: 200px; height: 20px; background-color: red');
    //         item.children[2] ? item.children[2].append(bold): null;
    //         // console.log(item.childNodes.item(2));
    //     }
    // }
    render() {
        let replaceSpace = `#${this.props.title.replace(/\?/gi, '').trim().replace(/ /gi, '-')}`;
        return (
                <div key={this.props.id} id={this.props.id} onClick={this.handleClickFullSize} className={this.state.full ? 'full-size' : 'card-size'}>
                    <h1 className='title'><a href={replaceSpace/* item.title.replace(/ /g, '-') */}>{this.props.title}</a></h1>
                    <a href={replaceSpace/* item.title.replace(/ /g, '-') */}><img className='featured-image' src={this.props.image} width='60px' alt='image did not load' /></a>
                    <div className='blog-text'>{this.props.text}</div>
                    <span className='author-bio'>{this.props.writer}</span>
                </div>)
    }
}