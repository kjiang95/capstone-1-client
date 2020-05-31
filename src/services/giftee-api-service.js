import config from '../config';
import TokenService from './token-service';

const GifteeApiService = {
  getGifteesByUserId(user_id) {
    return fetch(`${config.API_ENDPOINT}/users/giftees`, {
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },

  deleteGifteeById(id) {
    return fetch(`${config.API_ENDPOINT}/giftees/${id}`, {
      method: 'DELETE',
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>{
        if (!res.ok) {
          res.json().then(e => Promise.reject(e))
        }
      })
  },

  postGiftee(giftee) {
    return fetch(`${config.API_ENDPOINT}/giftees`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `basic ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(giftee)
    })
      .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  }
}

export default GifteeApiService