import React, {Component} from 'react';
import NewGifteeForm from '../../components/Forms/NewGifteeForm/NewGifteeForm';


export default class NewGifteePage extends Component {
  render() {
    return (
      <div>
        <h1>Add a New Giftee Here</h1>
        <NewGifteeForm
          {...this.props}
        />
      </div>      
    )
  }
}