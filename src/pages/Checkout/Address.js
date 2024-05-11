import address from "../../styles/Address.css";
import React, { useState } from 'react';
import Divider from "../../components/Divider";
const Address = ({ onSelectAddress, selectedAddress = '' }) => {
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [newAddress, setNewAddress] = useState('');
  const [addresses, setAddresses] = useState([
    {
      name: 'Huzefa Bagwala',
      value: 'huzefa',
      subAddresses: [
        { name: 'Home', contactNumber: '123-456-7890' },
        { name: 'Office', contactNumber: '987-654-3210' },
      ],
    },
    { name: 'IndiaTech', value: 'indiatech', subAddresses: [] },
  ]);
  

  const handleAddressChange = (value) => {
    if (value !== selectedAddress) {
      onSelectAddress(value);
    }
  };

  const handleAddNewAddressToggle = () => {
    setShowAddAddress(!showAddAddress);
  };

  const handleNewAddressChange = (event) => {
    setNewAddress(event.target.value);
  };

  const handleSaveNewAddress = () => {
    const updatedAddresses = [...addresses, { name: newAddress, value: newAddress }];
    setAddresses(updatedAddresses);
    setNewAddress('');
    setShowAddAddress(false);
    onSelectAddress(updatedAddresses);
  };

  const handleDeleteAddress = (value) => {
    const updatedAddresses = addresses.filter((address) => address.value !== value);
    setAddresses(updatedAddresses);
    onSelectAddress(updatedAddresses);
  };

  return (
    <div className="address-component">
      <h2>Address</h2>
      <div className="address-options">
        {addresses.map((address) => (
          <div key={address.value} className="address-option">
            <label>
              <input
                type="radio"
                name="address"
                value={address.value}
                checked={selectedAddress === address.value}
                onChange={() => handleAddressChange(address.value)}
              />
              {address.name}
            </label>
            <button onClick={() => handleDeleteAddress(address.value)}>Remove</button>
          </div>
        ))}
        <button  className="add-new-address" onClick={handleAddNewAddressToggle}>
          {showAddAddress ? 'Cancel' : ' +   Add New Address'}
        </button>
      </div>
      <Divider/>
      {showAddAddress && (
        <div className="new-address-form">
          <input
            type="text"
            placeholder="Enter New Address"
            value={newAddress}
            onChange={handleNewAddressChange}
          />
          <button onClick={handleSaveNewAddress}>Save Address</button>
        </div>
      )}
    </div>
  );
};

export default Address;
