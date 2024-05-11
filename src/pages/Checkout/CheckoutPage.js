import { useState } from "react";
import OrderSummary from "../cart/OrderSummary";
import Address from "./Address";
import checkout from "../../styles/checkout.css"

const CheckoutPage =()=>{
    const [selectedAddress, setSelectedAddress] = useState(null);

const handleAddressSelect = (selectedValue) => {
  setSelectedAddress(selectedValue); 
};

  
return(
    <div className="checkout-page">
    <h1>Checkout</h1>
  <div className="checkout">
<div className="address-checkout"><Address onSelectAddress={handleAddressSelect} selectedAddress={selectedAddress} />
</div>   
 <div className="order-summary-checkout"> <OrderSummary selectedAddress={selectedAddress} />  </div>  
  </div>
  </div>
)
}
export default CheckoutPage;