import Userlist from './Userlist'
import SideBarMenu from './SideBarMenu';
import Reports from './Reports';
import Settings from './Settings';
import TestimonialsList from './TestimonialsList';
import ParkStatus from './parkStatus';

class AdminHome {
  constructor() {
    this.sideBarMenu = new SideBarMenu();
    this.userList = new Userlist();
    this.reports = new Reports();
    this.settings = new Settings();
    this.testimonialsList = new TestimonialsList();
    this.parkStatus = new ParkStatus();
  }
};

export default AdminHome;