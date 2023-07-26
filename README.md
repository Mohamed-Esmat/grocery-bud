# Grocery Bud

![Project Logo](https://res.cloudinary.com/tawfeer/image/upload/v1690335235/grocery-project_hrbgzj.png)

> A simple frontend demo project built with React that allows users to manage their grocery list. Users can add items to the list, mark them as completed, and remove items as needed. The list is persisted using local storage, so users can access their grocery list even after refreshing the page.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [State Variable](#state-variable)
  - [Form Component](#form-component)
  - [Add Item](#add-item)
  - [Render List](#render-list)
  - [SingleItem](#singleitem)
  - [Remove Item](#remove-item)
  - [Local Storage](#local-storage)
  - [Global Edit](#global-edit)
  - [React-Toastify](#react-toastify)
- [Local Storage](#local-storage-explanation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Introduction

This repository contains the Grocery Bud project, a simple and efficient way to manage your grocery list using React. Users can add items, mark them as completed, and remove items with ease. The project also incorporates local storage functionality, ensuring that the grocery list persists across page reloads.

## Getting Started

Follow the steps below to set up the Grocery Bud project.

### State Variable

In App.jsx, set up a state variable called `items` using the useState hook.

### Form Component

Create a Form component that contains an input field and a submit button. When the user submits the form, the `handleSubmit` function is called.

In the `handleSubmit` function, prevent the default form submission behavior using `event.preventDefault()`. If the form is submitted with an empty value, log a message and return.

### Add Item

If the form is submitted with a value, create a new `item` object that includes a name (taken from the form input), a `completed` property (default value `false`), and a unique `id` (generated using a library like `uuid` or `nanoid`).

Add the new `item` to the `items` state variable using the `setItems` function.

### Render List

Create two new components: `Items` and `SingleItem`. In `Items`, iterate over the list of `items` and render each one in a `SingleItem` component. For now, only render the name of the item.

### SingleItem

In `SingleItem`, set up a state variable called `isChecked` with a default value of the item's `completed` property. Render a checkbox and add inline styles to add or remove the `text-decoration: line-through` property based on the `isChecked` value. Set up functionality to toggle the `isChecked` state variable when the checkbox is clicked.

### Remove Item

In App.jsx, create a `removeItem` function and pass it down to the `SingleItem` component. In `SingleItem`, add a button that, when clicked, removes the item from the list.

### Local Storage

Set up local storage functionality to persist the list of items across page reloads. More info below.

### Global Edit

Instead of 'local' value, set `completed` 'globally' (in the list) and save the result in the local storage.

### React-Toastify

Implement the `react-toastify` library to handle alerts when a new item is added to the list, when the user tries to submit an empty form, and when an item is removed from the list.

Overall, the flow of the application should look something like this:

- In App.jsx, set up a state variable called `items` using the useState hook.
- Create a Form component that contains an input field and a submit button, and set up the `handleSubmit` function to add new items to the list.
- Create two new components: `Items` and `SingleItem`, and use them to render the list of items.
- Set up local storage functionality to persist the list of items across page reloads.
- Implement the `react-toastify` library to handle alerts when a new item is added to the list, when the user tries to submit an empty form, and when an item is removed from the list.

## Local Storage Explanation

`localStorage` is a built-in object in web browsers that allows web applications to store key-value pairs locally within the user's browser.

To store data in `localStorage`, you can use the `localStorage.setItem(key, value)` method, where `key` is a unique identifier for the data being stored, and `value` is the data you want to store. Note that the `value` parameter needs to be a string.

Here's an example of how to use `localStorage.setItem()`:

```js
localStorage.setItem('username', 'John');
```

This code stores the string 'John' with the key 'username' in `localStorage`.

To retrieve data from `localStorage`, you can use the `localStorage.getItem(key)` method, where `key` is the unique identifier for the data you want to retrieve. This method returns the value associated with the key you pass in as a string.

Here's an example of how to use `localStorage.getItem()` to retrieve the value of the 'username' key we set earlier:

```js
const username = localStorage.getItem('username');
console.log(username); // outputs 'John'
```

Note that `localStorage` can only store strings, so if you need to store objects or other data types, you'll need to convert them to strings first. One way to do this is to use `JSON.stringify()` to convert your data to a JSON string before storing it in `localStorage`, and then use `JSON.parse()` to convert it back to an object when you retrieve it.

For example:

```js
const user = {
  name: 'John',
  age: 30,
  email: 'john@example.com',
};

localStorage.setItem('user', JSON.stringify(user));

const storedUser = JSON.parse(localStorage.getItem('user'));

console.log(storedUser.name); // outputs 'John'
console.log(storedUser.age); // outputs 30
console.log(storedUser.email); // outputs 'john@example.com'
```

In summary, `localStorage` allows you to store key-value pairs locally in the user's browser using `localStorage.setItem()` and retrieve those values using `localStorage.getItem()`. However, note that `localStorage` can only store strings, so you'll need to convert other data types to strings before storing them.

## Usage

To use the Grocery Bud project, follow the steps below:

1. Clone the repository to your local machine using the following command:

```sh
git clone <repository-url>
```

2. Navigate to the project directory:

```sh
cd grocery-bud
```

3. Install the required dependencies using npm or yarn:

```sh
npm install
```
or
```sh
yarn install
```

4. Run the development server:

```sh
npm run dev
```
or
```sh
yarn run dev
```

5. The project will open in your default web browser at `http://localhost:3000`. You can now start managing your grocery list!

## Demo

To see the live demo of the Grocery Bud project, click on the link below:

[Grocery Bud Live Demo](https://grocery-bud-esmat.netlify.app/)

Feel free to add, edit, and remove items from your grocery list. The list will persist even after refreshing the page, thanks to local storage functionality.

## Contributing

If you want to contribute to the Grocery Bud project, follow the steps below:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name for your feature or bug fix.
3. Make your changes and commit them with a clear commit message.
4. Push your changes to your forked repository.
5. Submit a pull request to the original repository, explaining the changes you made.

## License

The Grocery Bud project is open-source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Figma](https://www.figma.com/file/8rXGl68NoEmAhHpcV7aB5o/Grocery-bud?node-id=0%3A1&t=IMjjwDExGWpXdpQL-1) for providing the design inspiration for the project.
- [React](https://reactjs.org/) for the powerful and efficient JavaScript library used to build the project.
- [nanoid](https://www.npmjs.com/package/nanoid) for generating unique IDs for each grocery item.
- [React-Toastify](https://fkhadra.github.io/react-toastify/introduction) for handling toast notifications in the application.

## Contact

If you have any questions or suggestions regarding the Grocery Bud project, feel free to contact me:

- Email: msmt0452@gmail.com
- GitHub: [Mohamed-Esmat](https://github.com/Mohamed-Esmat)
