import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    if (!newItemName || newItemName.trim() === '') {
      toast.error('Please enter a valid name');
      return;
    }
    addItem(newItemName);
    setNewItemName('');
  };

  return (
    <form onSubmit={submitHandler}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
