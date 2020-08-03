import React, {Component} from 'react';
import { MyContext } from '../../contexts/context';

export default class GiftCard extends Component {
  static contextType = MyContext;

  render() {
    const { gift } = this.props

    return (
      <div>
        <h4>{gift.idea}</h4>
        <p>{gift.notes}</p>
        <button onClick={() => {this.context.handleGiftDelete(gift.id)}}>Delete</button>
      </div>
    )
  }
}