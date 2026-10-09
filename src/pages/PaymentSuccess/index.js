import React from 'react'
import Button from '../../components/Button'
import { Icon } from '@iconify/react'
const PaymentSuccess = () => {
  return (
    <div className="payment-success">
      <div className="payment-success__img">
        <img src="/PaymentSuccessImg.png" alt="" className="img-fluid" />
        <h1>
          Your payment was successful{' '}
          <Icon icon="ep:success-filled" style={{ color: '#1bde17' }} />, thank
          for your payment.
        </h1>
        <div className="payment-success__button">
          <Button htmlType="link" type="primary" to="/">
            <span>
              <Icon icon="typcn:arrow-back" />
            </span>
            Go Back Home
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PaymentSuccess
