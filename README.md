# Gift App

live: https://gift-app.now.sh/

## API Docs:
/users
  * /register
    * post -> create a new user, requires unique username and password with at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character
  * /:user_id/giftees
    * get -> get all giftees registered under the user

/giftees
  * /
    * post -> create a new giftee, requires as newGiftee object in the body that contains the userId, the name of the Giftee, and the relationship
  * /:giftee_id
    * delete -> delete giftees by id
  * /:giftee_id/events
    * get -> gets all events associated with a 
/events
  * / 
    * post -> post new events, requires the event type, event date, and optionally, budget
    * delete -> delete events
  * /:event_id/gifts
    * get -> get all gifts
/gifts
  * /
    * post -> post new gifts
    * delete -> delete gifts


## Summary
This app allows you to create Giftees for which you assign giftable dates and and gifts for those dates

## Tech used
Javascript
React
Node
Express
PostgreSQL
