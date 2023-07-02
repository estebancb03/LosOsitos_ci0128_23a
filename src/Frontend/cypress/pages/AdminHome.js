import Userlist from './Userlist'
import SideBarMenu from './SideBarMenu';
import Reports from './Reports'
import Settings from './Settings'

class AdminHome {
  constructor() {
    this.sideBarMenu = new SideBarMenu();
    this.userList = new Userlist();
    this.reports = new Reports();
    this.settings = new Settings();
  }

}``

export default AdminHome;