import './App.css';
import contactsData from './contacts.json';
import React, {useState} from 'react';

const visibleList = contactsData.slice(0,5);

function App() {
  const [contacts, setContacts] = useState(visibleList);
  console.log(contacts)

  const addRandom = () => {
    let random = contactsData[Math.floor(Math.random() * contactsData.length)]
    setContacts( [random, ...contacts ] )
  }

  const nameSort = () => {
  let sortedArr = [ ...contacts].sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) { 
        return -1;
      }
    })
    setContacts( sortedArr )
  }

  const popularitySort = () => {
  let sortedArr = [ ...contacts].sort(function (a, b) {
      if (a.popularity < b.popularity) {
        return 1;
      }
      if (a.popularity > b.popularity) {
        return -1;
      }
    })
    setContacts( sortedArr )
  }

  const deleteContact = (contactId) => {
    let newArr = [ ...contacts].filter((contact) => (contact.id !== contactId) )
      setContacts( newArr )
    }

  return (
    <div className="App">
        <h2>IronContacts</h2>
        <div className="buttons">
        <button onClick={addRandom}>Add Random Contact</button>
        <button onClick={nameSort}>Sort by Name</button>
        <button onClick={popularitySort}>Sort by Popularity</button>
        </div>
        <table>
        <thead>
        <th>Image</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Oscar</th>
        <th>Emmy</th>
        <th>Actions</th>
        </thead>

        <tbody>
        { contacts.map((artist) => {
         return (
        <tr key={artist.id}>
        <td><img src={artist.pictureUrl} alt="" /></td>
        <td>{artist.name}</td>
        <td>{artist.popularity.toFixed(2)}</td>
        <td>{ artist.wonOscar && <p>🏆</p> }</td>
        <td>{ artist.wonEmmy && '🏆' }</td>
        <td> <button onClick={ () => deleteContact(artist.id) }>Delete</button> </td>
        </tr>
        )})}
        </tbody>
        </table> 
        
    </div>
  )
}

export default App;
