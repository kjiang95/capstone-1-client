import React, {Component} from 'react';
import { MyContext } from '../../../contexts/context';
import EventApiService from '../../../services/event-api-service';
import { Link } from 'react-router-dom';
import SidebarEvent from '../Sidebar-Event/Sidebar-Event';
import EventsApiService from '../../../services/event-api-service';

export default class SidebarGiftee extends Component {
  static contextType = MyContext;

  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  };


  componentDidMount() {
    this.getEvents()
  };

  getEvents() {
    const { giftee } = this.props;
    const gifteeId = giftee.id;
    EventApiService.getEventByGifteeId(gifteeId)
      .then(events => {
        this.setState({
          events: events
        });
      });
  }

  renderWhenPosted(gifteeId) {
    if (this.context.posted === 1) {
      EventsApiService.getEventByGifteeId(gifteeId)
        .then(events => {
          this.setState({
            events: events
          })
        })
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
    const events = this.state.events
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
    EventApiService.deleteEventById(id)
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
          <button className='giftee-name' onClick={e => handleDeleteButtonClicked(e, giftee.id)}>Delete Giftee</button>
        </div>
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