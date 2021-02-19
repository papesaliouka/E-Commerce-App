import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100; 
  const publishablekey = 'pk_test_51IMapwI3wu9f5RAUZdsf5PPhVjkUafeQNKL47boIIVarRBAW4Lgt1Bz4oB36S63mKDbzN0VVPCQZh941sCifLT0O00dBYmE4ZI';

const onToken = token => {
  console.log(token);
  alert('Payment Successful');
}

  return (
    <StripeCheckout
      label='Pay Now'
      name= 'E-commerce Ltd.'
      billingAddress
      shippingAddress
      image='htps://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishablekey}
    />
  );
}

export default StripeCheckoutButton;