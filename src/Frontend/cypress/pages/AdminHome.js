import Userlist from './Userlist'
import SideBarMenu from './SideBarMenu';
import Reports from './Reports'

class AdminHome {
  constructor() {
    this.sideBarMenu = new SideBarMenu();
    this.userList = new Userlist();
    this.reports = new Reports();
  }

}``

export default AdminHome;