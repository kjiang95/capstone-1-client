import React, {Component} from 'react';
import { MyContext } from '../../../contexts/context';
import GifteeApiService from '../../../services/giftee-api-service';
import SidebarGiftee from '../Sidebar-Giftee/Sidebar-Giftee';
import SidebarIcon from '../SidebarIcon/SidebarIcon';
import TokenService from '../../../services/token-service';
import "../Sidebar.css";

export default class Sidebar extends Component {
  static contextType = MyContext;

  constructor(props) {
    super(props);
    this.state = {
      giftees: [],
      isOpen: true
    }
  }

  componentDidMount() {
    this.context.getGiftees();
  }

  handleDeleteButtonClicked = (e, id) => {
    e.preventDefault();
    GifteeApiService.deleteGifteeById(id)
      .then(() => {
        this.context.getGiftees();
      })
  }

  renderSidebarGiftees() {
    const giftees = this.context.giftees;
    return giftees.map(giftee => 
      <SidebarGiftee
        key={giftee.id}
        giftee={giftee}
        handleDeleteButtonClicked={this.handleDeleteButtonClicked}
        {...this.props}
      />
    )
  }

  renderLogin() {
    if (!TokenService.hasAuthToken()) {
      return (
        <div>
          <button onClick={() => {this.props.history.push('/register')}}>Register</button>
          <button onClick={() => {this.props.history.push('/login')}}>Login</button>
        </div>
      )
    } else {
      return (
        <div>
          <ul>
            {this.renderSidebarGiftees()}
          </ul>
          <button onClick={() => {this.props.history.push('/giftees')}}>Add new giftee</button>
          <button onClick={() => {
            this.props.history.push('/');
            TokenService.clearAuthToken()
          }}>
            Logout
          </button>
        </div>
      )
    }      
  }

  renderSidebar() {
    if (!this.state.isOpen) {
      return null
    }
    return (
      <div className='sidebar'>
        <h3 className='sidebar-header' onClick={() => {this.props.history.push('/')}}>Gift App</h3>
        <div className="sidebar-icon">
          {/* <SidebarIcon
            isOpen={this.state.isOpen}
            handleClick={this.toggleSidebar}
          /> */}
        </div>
        {this.renderLogin()}
      </div>
    )
  }

  toggleSidebar = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  render() {
    return (
      <div className='sidebar-container'>
        {this.renderSidebar()}
      </div>
    )
  }

}