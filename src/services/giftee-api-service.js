import config from '../config';
import TokenService from './token-service';

const GifteeApiService = {
  getGifteesByUserId() {
    return fetch(`${config.API_ENDPOINT}/users/giftees`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
        ? res.json().catch(e => e)
        : res.json()
    )
  },

  deleteGifteeById(id) {
    return fetch(`${config.API_ENDPOINT}/giftees/${id}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
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
        'authorization': `bearer ${TokenService.getAuthToken()}`
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