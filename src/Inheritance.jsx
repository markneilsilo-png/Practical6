import React from 'react';

const MyScreen = () => {
  const containerStyle = {
    padding: '40px',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9'
  };

  const titleStyle = {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
    borderBottom: '2px solid #007bff',
    paddingBottom: '10px'
  };

  const labelStyle = {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#555'
  };

  const paragraphStyle = {
    lineHeight: '1.6',
    color: '#666'
  };

  return (
    <div style={containerStyle}>
      {/* Title at the top */}
      <h1 style={titleStyle}>Welcome to My Screen</h1>

      {/* Label section */}
      <label style={labelStyle} htmlFor="info-text">
        Section Category: Description
      </label>

      {/* Paragraph section */}
      <p id="info-text" style={paragraphStyle}>
        This is a paragraph where you can provide detailed information about your 
        application or specific screen content. React makes it easy to manage 
        this layout using JSX and modular styling.
      </p>
    </div>
  );
};

export default MyScreen;