/// <reference types='cypress' />

import Login from './Login';
import AdminHome from './AdminHome';
import OperatorHome from './OperatorHome';
import SideBarMenu from './SideBarMenu';
import Testimonials from './Testimonials';

const login = new Login();
const adminHome = new AdminHome();
const operatorHome = new OperatorHome();

class Home {
  constructor() {
    this.url = '/';
    this.title = 'Home';
    this.sideBarMenu = new SideBarMenu();
    this.testimonials = new Testimonials();
  }

  visit() {
    cy.visit(this.url);
  }
  
  login(username, password) {
    login.login(username, password);
    return {
      adminHome,
      operatorHome
    };
  }

};

export default Home;