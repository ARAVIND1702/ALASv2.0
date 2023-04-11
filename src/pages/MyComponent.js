import React from 'react';
import MapContainer from './MapContainer';

const MyComponent = () => {
  const apiKey = 'AIzaSyBFwwG9RlhpktBUWt49jPl8kwJNCOZ59UM';

  return (
    <div>
      <h1>My Component</h1>
      <MapContainer apiKey={'apiKey'} />
    </div>
  );
};

export default MyComponent;