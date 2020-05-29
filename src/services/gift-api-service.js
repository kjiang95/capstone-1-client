import config from '../config';

const GiftApiService = {
  getGiftsByEventId(event_id) {
    return fetch(`${config.API_ENDPOINT}/events/${event_id}/gifts`)
      .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },

  deleteGiftById(id) {
    return fetch(`${config.API_ENDPOINT}/gifts/${id}`, {
      method: 'DELETE'
    })
      .then(res =>{
        if (!res.ok) {
          res.json().then(e => Promise.reject(e))
        }
      })
  },

  postGift(newGift) {
    return fetch(`${config.API_ENDPOINT}/gifts`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newGift)
    })
      .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  }
}

export default GiftApiService