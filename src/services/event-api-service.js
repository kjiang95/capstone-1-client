import config from '../config';

const EventsApiService = {
  getEventByGifteeId(giftee_id) {
    return fetch(`${config.API_ENDPOINT}/giftees/${giftee_id}/events`)
      .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },

  deleteEventById(id) {
    return fetch(`${config.API_ENDPOINT}/events/${id}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (!res.ok) {
          res.json().then(e => Promise.reject(e))
        }
      })
  },


  postEvent(event) {
    return fetch(`${config.API_ENDPOINT}/events`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(event)
    })
      .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  }
}

export default EventsApiService