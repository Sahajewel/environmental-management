import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-router-dom';
import UseAxiosSecure from '../../HOOKS/UseAxiosSecure/UseAxiosSecure';
import UseMobile from '../../HOOKS/UseMobile/UseMobile';

export default  function CheckoutForm({mobile}) {
    const axiosSecure = UseAxiosSecure();
    const [mobileData] = UseMobile()
    console.log(mobileData)
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState("");
    const [clientSecret, setClientSecret]= useState("")
    const totalPrice = mobile?.price || 0;
   useEffect(()=>{
   const paymentIntent = async()=>{
    const res =await  axiosSecure.post("/create-payment-intent",{price: totalPrice})
    console.log(res.data?.clientSecret)
    setClientSecret(res.data?.clientSecret)
   }
   if(totalPrice>0){
    paymentIntent()
   }

   },[axiosSecure,totalPrice])

 
   const handleSubmit = async(event)=>{
    event.preventDefault();
    if(!stripe || !elements){
        return;
    }
    const card = elements.getElement(CardElement);
    if(card===null){
        return;
    }
    const {error:paymentMethodError, paymentMethod} = await stripe.createPaymentMethod({
        type: "card",
        card,
    })
    if(paymentMethodError){
        setMessage(paymentMethodError.message)
        console.log("[error]", paymentMethodError)
        return
    }
    
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret,{
        payment_method: {
            card,
        
        }
       });
       if(confirmError){
        setMessage("payment intent error", confirmError.message)
        console.log( confirmError.message)
       }
       else{
        console.log("payment successfully", paymentIntent)
        setMessage("payment successfully")
       }
   }
  return (
    <div style={{display:"flex", justifyContent:"center",}}>
      <Form style={{width:"400px", background:"red", padding:"40px",margin:"20px"}} onSubmit={handleSubmit}>
        <CardElement  options={{
            style:{
                base:{
                    fontSize: "16px",
                    color: "white",
                    "::placeholder":{
                        color:  "black"
                    }
                },
                invalid: {
                    color: "#9e2146",
                }
            }
        }}>
            
        </CardElement>
            <button className='bg-green-500 text-black cursor-pointer my-5' type='submit' disabled={!stripe || !clientSecret}>Pay</button>
            <p>{message}</p>
      </Form>
    </div>
  )
}
