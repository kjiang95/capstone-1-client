import config from '../config';

const GifteeApiService = {
  getGifteesByUserId(user_id) {
    return fetch(`${config.API_ENDPOINT}/users/${user_id}/giftees`)
      .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },

  deleteGifteeById(id) {
    return fetch(`${config.API_ENDPOINT}/giftees/${id}`, {
      method: 'DELETE'
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
        'content-type': 'application/json'
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