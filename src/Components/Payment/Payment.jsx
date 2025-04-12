import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import CheckoutForm from './CheckoutForm'
const stripePromise = loadStripe('pk_test_51QezvXHJ5p1yGLHokkFqj2OSGbTUzxPEGGOrr9REb3RQtxRN12VE1SVlaSry1vSkjTVsVJ4hIxcOKVPIWiqEz0UZ00yqs5lVbU')
export default function Payment({mobile}) {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm mobile={mobile}></CheckoutForm>
      </Elements>
    </div>
  )
}
