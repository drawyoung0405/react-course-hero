import React from 'react';

/*
Keys should probably not be just the item’s index 
 - if you plan on changing the order of your list, or adding or deleting items, then the indices will change whenever the list changes, and that will throw React off.

Keys should not be random IDs 
  - if an ID is a random number generated during a render, then your items will have all new keys every time the state in your component changes. That being said, if you generate unique IDs when creating the data, that’s different and okay.
*/

const initializeUser = [
  { name: 'tony'},
  { name: 'loc'},
  { name: 'hoa'},
];

const usersFiltered = initializeUser.map((item, index) => {
  return {
    ...item,
    id: item.name + index
  }
})

const apiProducts = [
  { id: 'product1', name: 'Product 1'},
  { id: 'product2', name: 'Product 2'},
  { id: 'product3', name: 'Product 3'},
  { id: 'product4', name: 'Product 4'},
  { id: 'product5', name: 'Product 5'}
]

function List() {
  const [users, setUsers] = React.useState(usersFiltered);
  const [products, setProducts] = React.useState(apiProducts)

  function handleAddUser() {
    const userItem = {
      id: Date.now(),
      name: 'User' + Date.now()
    }
    const newUsers = [userItem, ...users]; // shallow clone
    // newUsers.push(userItem);
    setUsers(newUsers)
  }

  function deleteProduct(name) {
    const productFiltered = products
    .map(item => ({
      ...item,
      id: Math.floor(Math.random() * 1000), // random ID
    }))
    .filter(item => item.name !== name);
    setProducts(productFiltered)
  }

  return (
    <div>
      <h1>List & Key</h1>

      <h3>Keys should probably not be just the item’s index </h3>
      <input type="text" /> <button type="button" onClick={handleAddUser}>Add</button>
      <ul>
        {users.map((item, index) => {
          return (
            <UserItem 
              key={index}
              // key={item.id} // un-comment to fix
              user={item} 
            />
          )
        })}
      </ul>

      <h3>Keys should not be random IDs</h3>
      {products.map((product) => {
        return (
          <button 
            key={product.id}
            onClick={() => deleteProduct(product.name)}
          >
            Delete {product.name}
          </button>
        )
      })}
    </div>
  )
}

export default List;

function UserItem({ user }) {
  const [age, setAge] = React.useState(1)
  return (
    <li>
      {user.name}
      <input 
        type="number" 
        value={age}
        onChange={e => setAge(e.target.value)}
      />
    </li>
  )
}