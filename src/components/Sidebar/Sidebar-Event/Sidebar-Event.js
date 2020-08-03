import React, {Component} from 'react';
import { MyContext } from '../../../contexts/context';

export default class SidebarEvent extends Component {
  static contextType = MyContext;

  formatDate(utcDate) {
    const date = new Date(utcDate).toLocaleDateString('en-US', {timeZone: 'UTC'});
    return date;
  }

  render() {
    const { event, handleDeleteEventButton } = this.props
    const eventId = event.id
    return (
      <li>
        <div onClick={() => {
          this.context.getGifts(eventId);
          this.props.history.push(`/events/${event.id}/gifts`)
        }}>
          <h5>{event.event_type}</h5>
          <p>{this.formatDate(event.event_date)}</p>
        </div>
        <button onClick={(e) => {handleDeleteEventButton(eventId)}}>Delete Event</button>
      </li>
    )
  }
}