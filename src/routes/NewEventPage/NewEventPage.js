import React, {Component} from 'react';
import NewEventForm from '../../components/Forms/NewEventForm/NewEventForm';

export default class NewEventPage extends Component {
  render() {
    return (
      <div>
        <h1>Add New Events Here</h1>
        <NewEventForm
          {...this.props}
        />
      </div>     
    )
  }
}