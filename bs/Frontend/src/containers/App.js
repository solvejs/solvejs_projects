import React, { Component } from 'react';
import './reset.css';
import './grid-flex.css';
import './style.css';
import Title from '../components/Title';
import Menu from './menu/Menu';
import Footer from '../components/Footer';
import BumpersDiv from './bumpers/BumpersGenerator';
// import BumpersDiv from './bumpers/BumpersGenerator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
   return (
     <div>
     <Menu />
     <Title />
     <BumpersDiv />
    <Footer />
    </div>
    )
  }
}

export default App;
