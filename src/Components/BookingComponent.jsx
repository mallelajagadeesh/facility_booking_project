import React from 'react'
import BookingForm from './BookingForm'

const BookingComponent = () => {
  return (
    <div id="booking" className="section">
      <div className="section-center">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-md-push-5">
              <div className="booking-cta">
                <h1>Book For Facility</h1>
              </div>
            </div>
            <div className="col-md-4 col-md-pull-7">
              <BookingForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingComponent
