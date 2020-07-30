import React, {Component} from 'react';
import { MyContext } from '../../contexts/context';
import GiftForm from '../../components/Forms/GiftForm/GiftForm';
import GiftCard from '../../components/GiftCard/GiftCard';

export default class GiftsPage extends Component {
  static contextType = MyContext;

  renderGiftCards() {
    const gifts = this.context.gifts;
    return gifts.map(gift => 
      <GiftCard 
        key={gift.id}
        gift={gift}
      />
    )
  }

  render() {
    return (
      <div className='giftsPage'>
        <h1>This is the GiftsPage!</h1>
        <h2>You can view all your gifts here</h2>
          {this.renderGiftCards()}
        <h2>You can add new gifts here</h2>
        <GiftForm/>
      </div>
    )
  }
}