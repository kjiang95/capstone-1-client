import config from '../config';
import TokenService from './token-service';

const EventsApiService = {
  getEventByGifteeId(giftee_id) {
    return fetch(`${config.API_ENDPOINT}/giftees/${giftee_id}/events`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },

  deleteEventById(id) {
    return fetch(`${config.API_ENDPOINT}/events/${id}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
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
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
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