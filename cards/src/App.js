import './App.scss';
import React, { useState } from 'react';
import { Button } from '@mui/material';


function App() {

  const [users, setUsers] = useState([])
  const [currentuser, setCurrentuser] = useState("")
  const [selectedvalue, setSelectedValue] = useState(4)

  const generateCardsObject = (selectedvalue) => {
    const cardsObject = {};
    for (let i = 1; i <= selectedvalue; i++) {
      cardsObject[`card${i}`] = false;
    }
    return cardsObject;
  }

  const [showcards, setShowcards] = useState(generateCardsObject(selectedvalue))

  const addRow = () => {
    const newUsers = [...users, { name: "", cards: generateCardsObject(selectedvalue) }]
    setUsers(newUsers)
  }

  const handleSelectedValueChange = (event) => {
    setSelectedValue(event.target.value)
  }

  const handleUserChange = (event) => {
    setCurrentuser(event.target.value)
    users.forEach((user => {
      if (user.name === event.target.value) {
        setShowcards(user.cards)
      }
    }))
  }

  const handleCardChange = (event, index, card) => {
    const newUsers = [...users]
    newUsers[index].cards[card] = event.target.checked
    setUsers(newUsers)
    if (currentuser === newUsers[index].name) {
      setShowcards(newUsers[index].cards)
    }
  }
  return (
    <div className="App">
      <div className='table-section'>
        <div className='Button_inputs'>
        <select id='my-drop-down' value={currentuser} onChange={handleUserChange} style={{ fontSize: '16px', padding: '10px', marginRight: '20px' }}>
            <option value="">
              Select User
            </option>
            {users.map((user, index) => (
              <option key={index} value={user.name}>{user.name}</option>
            ))}
          </select>
        
          <input id='my-drop-down' type='number' value={selectedvalue} onChange={handleSelectedValueChange} style={{ fontSize: '16px', padding: '10px', width: '100px', marginRight: '20px' }}></input>
        </div>
        <div className='table'>
          <table>
            <thead>
              <tr>
                <th>Users</th>
                {
                  Array.from({ length: selectedvalue }, (_, index) => (
                    <th key={index}>Card {index + 1}</th>
                  ))
                }
              </tr>
            </thead>
            <tbody >
              {users.map((user, index) => (
                <tr key={index} >
                  <td>
                    <input className='user' type='text' value={user.name} onChange={(event) => {
                      const newUsers = [...users]
                      newUsers[index].name = event.target.value
                      setUsers(newUsers)
                    }} />
                  </td>
                  {
                    Array.from({ length: selectedvalue }, (_, cardIndex) => (
                      <td key={cardIndex}>
                        <input type='checkbox' checked={user.cards[cardIndex]} onChange={(event) => handleCardChange(event, index, `card${cardIndex + 1}`)}
                        />
                      </td>
                    ))
                  }
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='addrow' onClick={addRow} style={{ marginTop: '20px', textAlign: 'center' }}>
            <Button fontSize='medium' >Add row</Button>
          </div>
      </div>
      {
        currentuser &&
        <div className='card-section'>
          <div className='cards'>
            {
              Array.from({ length: selectedvalue }, (_, cardIndex) => (
                showcards[`card${cardIndex + 1}`] && (
                  <div className="card" key={`card${cardIndex + 1}`}>
                    <h3>Card {cardIndex + 1}</h3>
                  </div>
                )
              ))
            }
          </div>
        </div>
      }
    </div>
  );
}
export default App;