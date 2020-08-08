import React, { Component } from 'react';
import ReactDom from 'react-dom';



ReactDom.render(
    React.createElement('div', null, 'hello, world!'),
    document.getElementById('root')
);