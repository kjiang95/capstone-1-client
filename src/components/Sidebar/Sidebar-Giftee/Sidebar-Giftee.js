import React, {Component} from 'react';
import { MyContext } from '../../../contexts/context';
import SidebarEvent from '../Sidebar-Event/Sidebar-Event';
import EventsApiService from '../../../services/event-api-service';

export default class SidebarGiftee extends Component {
  static contextType = MyContext;

  constructor(props) {
    super(props);
  };


  componentDidMount() {
    this.getEvents()
  };

  getEvents() {
    const { giftee } = this.props;
    const gifteeId = giftee.id;
    this.context.getEvents(gifteeId)
  }

  renderWhenPosted(gifteeId) {
    if (this.context.posted === 1) {
        this.context.getEvents(gifteeId)
        .then(() => {
          this.context.setPostedToZero()
        })
    }
  }

  hideEvents(eventId) {
    return (
      (this.context.expandedGiftee === eventId)
        ? 'show'
        : 'hidden'
    )

  }

  renderSidebarEvents() {
    const events = this.context.events
    return events.map(event => 
      <SidebarEvent
        key={event.id}
        event={event}
        handleDeleteEventButton={this.handleDeleteEventButton}
        {...this.props}
      />
    )
  }

  handleDeleteEventButton = (id) => {
    EventsApiService.deleteEventById(id)
      .then(() => {
        this.getEvents()
      })
  }

  render() {
    const { giftee, handleDeleteButtonClicked } = this.props;

    this.renderWhenPosted(giftee.id)
    
    return (
      <li className='giftee-element'>
        <div>
          <h3 className='giftee-name' onClick={() => this.context.toggleExpandedGiftee(giftee.id)}>{giftee.full_name}</h3>
          <button className='giftee-name' onClick={e => handleDeleteButtonClicked(e, giftee.id)}>
            Delete Giftee
          </button>
        </div>
        {/* eslint-disable-next-line */}
        <ul className='sidebar-events' className={this.hideEvents(giftee.id)}>
          {this.renderSidebarEvents()}        
          <li>
            <button className='add-event-button' onClick={() => {
              this.props.history.push('/events')
            }}>
              Add New Event
            </button>
          </li>  
        </ul>
      </li>
    );
  };
};