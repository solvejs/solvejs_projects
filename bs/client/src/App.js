import React, { Component } from 'react';
import { BrowserRouter as Router,
Switch,
Route,
Link } from 'react-router-dom';
import './reset.css';
import './style.css';
import './grid-flex.css';
import Menu from './containers/menu/Menu';
// import MenuTestOnly from './menu/MenuTestOnly';
import Footer from './components/Footer';
import LoginControl from './containers/Authentication/LoginControl';
import Registration from './containers/Authentication/Register';
import Login from './containers/Authentication/Login';
import {users} from './containers/users/users';
import Contact from './containers/Contact';
import About from './components/About';
import Categories from './components/Categories';
import Aside from './containers/aside/Aside';
import Admin from './containers/bumpers/Admin';
import {/* BumpersCreator */ BumperContextProvider} from './containers/bumpers/BumpersFuncTest';
import Cart from './containers/bumpers/Cart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    if(localStorage.getItem("inCartLocStoreCount") === null) {
      localStorage.setItem("inCartLocStoreArr", "[]");
      localStorage.setItem("inCartLocStoreCount", "0"); // initialize if not set 
    }
    // localStorage.clear()
   return (
     <div id="body">
     {<Menu handleRegFormClick={this.handleRegFormClick} handleLogFormClick={this.handleLogFormClick} handleContactFormClick={this.handleContactFormClick} />}
     {/* <MenuTestOnly  handleRegFormClick={this.handleRegFormClick} handleLogFormClick={this.handleLogFormClick} handleContactFormClick={this.handleContactFormClick} /> */}
     {/* <BumpersDiv /> */}
     <Footer style/>
     {/* <Route path='/' component={Home} /> */}
     <Switch>
     <BumperContextProvider>
     <Aside />      
      <Route exact path='/about' component={About} />
      {/* <Route exact path='/categories' component={Categories} /> */}
      <Route exact path='/' component={Categories} />
      <Route exact path='/contact' component={Contact} />
      <Route path='/cart'  component={Cart} />
      {/* <Route path='/created' component={BumpersCreator} /> */}
      </BumperContextProvider>
      </Switch>
      <Switch>
      {/* need to refactor forms to be able to switch properly */}
      <LoginControl component={LoginControl}>
      <Route exact path='/admin' component={Admin} />
      </LoginControl>
      <Route path='#' component={Login} />
      <Route path='#' component={Registration} />
      </Switch>
    </div>
    )
  }
}

export default App;
