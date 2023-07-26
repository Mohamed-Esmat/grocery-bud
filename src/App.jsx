import { useState } from 'react';
import Form from './components/Form';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import Items from './components/Items';

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (!list || !JSON.parse(list)) {
    return [];
  } else {
    return JSON.parse(localStorage.getItem('list'));
  }
  // if (list) {
  //   list = JSON.parse(localStorage.getItem('list'))
  // } else {
  //   list = []
  // }
  // return list;
};

const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

const App = () => {
  const [items, setItems] = useState(defaultList);

  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    // setItems((prevItems) => [...prevItems, newItem]);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Item added successfully 😁')
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Item removed successfully 😁')
    
  };

  const editItem = (itemId) => {
    if (items.length > 0) {
      const newItems = items.map((item) => {
        if (item.id === itemId) {
          // item.completed = isItemChecked; A Huge error don't do it.
          const newItem = { ...item, completed: !item.completed };
          return newItem;
        }
        return item;
      });
      setItems(newItems);
      setLocalStorage(newItems);
    }
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
};

export default App;
