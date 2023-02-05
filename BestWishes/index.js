import React, { useState } from 'react';

// This component represents the entire Best Wishes App
const BestWishesApp = () => {
  // State to store the inputted name
  const [name, setName] = useState('');

  // Event handler to update the name state when input is changed
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // State to store the selected occasion
  const [occasion, setOccasion] = useState('');

  // Event handler to update the occasion state when a dropdown option is selected
  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
  };

  // State to store the generated message
  const [message, setMessage] = useState('');

  // Event handler to generate the message based on the inputted name and selected occasion
  const generateMessage = () => {
    switch (occasion) {
      case 'birthday':
        setMessage(`Happy birthday, ${name}! Wishing you all the best on your special day.`);
        break;
      case 'anniversary':
        setMessage(`Happy anniversary, ${name}! May your love continue to grow stronger with each passing year.`);
        break;
      case 'graduation':
        setMessage(`Congratulations on your graduation, ${name}! All your hard work has paid off. Wishing you the best in all your future endeavors.`);
        break;
      default:
        setMessage('');
        break;
    }
  };

  return (
    <div>
      {/* Input for the name */}
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={handleNameChange}
      />

      {/* Dropdown to select the occasion */}
      <select value={occasion} onChange={handleOccasionChange}>
        <option value="">Select Occasion</option>
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
        <option value="graduation">Graduation</option>
      </select>

      {/* Button to generate the message */}
      <button onClick={generateMessage}>Generate Message</button>

      {/* Display the generated message */}
      <div>{message}</div>
    </div>
  );
};

export default BestWishesApp;
