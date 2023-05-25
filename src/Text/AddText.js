import React from 'react'
import Button from 'react-bootstrap/Button';
import  { useState } from 'react';

function AddText ({ onTextChange })  {
   
      const [text, setText] = useState('');
    
      const handleInputChange = (e) => {
        setText(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onTextChange(text);
        setText('');
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <input type="text" value={text} onChange={handleInputChange} />
          <Button variant="success" type="submit">ADD Text</Button>
        </form>
      );
    };
    
   

export default AddText