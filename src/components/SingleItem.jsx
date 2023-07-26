import React, { useState } from 'react';

const SingleItem = ({ name, completed, id, removeItem, editItem }) => {
  // const [isChecked, setIsChecked] = useState(completed);

  // const onCheckHandler = () => {
  //   setIsChecked(!isChecked);
  //   editItem(id);
  // };
  
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => editItem(id)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: completed && 'line-through',
        }}
      >
        {name}
      </p>
      <button
        type="button"
        className="btn remove-btn"
        onClick={() => removeItem(id)}
      >
        delete
      </button>
    </div>
  );
};

export default SingleItem;
