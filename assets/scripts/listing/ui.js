const store = require('./../store')

const createReviewSuccess = (response) => {
  store.listing = response.listing
  $('#message').text('Success! You have created a review!')
  $('form').trigger('reset')
}

const createReviewFailure = () => {
  $('#message').text('Unsuccessful listing review, try again')
}

const getReviewsSuccess = (response) => {
  store.listings = response.listings

  console.log(store.listings)

  $('listing-display').html('')
  $('#listing-display').show('')
  $('#message').text('Success, See Reviews Below!')
  $('#change-password-user-form').hide()
  // $('#listing-index-button').hide()
  $('#listing-delete-form').show()

  store.listings.forEach((listing) => {
    if (store.user._id !== listing.owner) {
      const listingHTML = (`
        <h3>Address: ${listing.address}</h3>
        <p>Review: ${listing.review}</p>
        <p>ID: ${listing._id}</p>

        <br>
        `)
      $('#listing-display').append(listingHTML)
    }
  })
}

const getReviewsFailure = () => {
  $('#message').text('Unsuccessful review search, try again')
}

const showReviewSuccess = (response) => {
  store.listing = response.listing
  // set variable
  $('#listing-display').html('')
  $('#message').text('Review: ')

  console.log(store.listings)

  // restricting show to only user
  // if (store.user._id !== listing.owner) {
  const listingHTML = (`
        <h3>Address: ${response.listing.address}</h3>
        <p>Review: ${response.listing.review}</p>
        <p>Listing ID: ${response.listing._id}</p>
        <p>UserID: ${response.listing.owner}</p>
        <br>
        `)
  $('#listing-display').html(listingHTML)
  $('form').trigger('reset')
  $('#listing-update-form').show()
}

const showReviewFailure = () => {
  $('#message').text('Unsuccessful review search, try again')
}

const updateReviewSuccess = (response) => {
  $('#message').text('Success, Review updated')
}

const updateReviewFailure = () => {
  $('#message').text('Unable to update review, try again')
}

const deleteReviewSuccess = (response) => {
  $('#message').text('Success, Review deleted')
  $('form').trigger('reset')
}

const deleteReviewFailure = () => {
  $('#message').text('Unable to delete review, try again')
}

module.exports = {
  createReviewSuccess,
  createReviewFailure,
  getReviewsSuccess,
  getReviewsFailure,
  showReviewSuccess,
  showReviewFailure,
  updateReviewSuccess,
  updateReviewFailure,
  deleteReviewSuccess,
  deleteReviewFailure
}
