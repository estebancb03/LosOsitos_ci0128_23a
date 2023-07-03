import Userlist from './Userlist'
import SideBarMenu from './SideBarMenu';
import Reports from './Reports'
import TestimonialsList from './TestimonialsList';

class AdminHome {
  constructor() {
    this.sideBarMenu = new SideBarMenu();
    this.userList = new Userlist();
    this.reports = new Reports();
    this.testimonialsList = new TestimonialsList();
  }
};

export default AdminHome;