import './scss/project1.scss';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { FormControl, Input, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';



function Project1() {

  const [users, setUsers] = useState([])
  const [currentuser, setCurrentuser] = useState("")
  const [selectedvalue, setSelectedValue] = useState(4)

  const cardObject = (selectedvalue) => {
    const cardsObject = {};
    for (let i = 1; i <= selectedvalue; i++) {
      cardsObject[`card${i}`] = false;
    }
    return cardsObject;
  }

  const [showcards, setShowcards] = useState(cardObject(selectedvalue))

  const addRow = () => {
    const newUsers = [...users, { name: "", cards: cardObject(selectedvalue) }]
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
          <FormControl>
            <InputLabel sx={{margin:"7px"}} >Select User</InputLabel>
            <Select id='my-drop-down' value={currentuser} onChange={handleUserChange} sx={{ width: "200px" ,padding:"10px"}} >
              <MenuItem value="Select User">
              </MenuItem>
              {users.map((user, index) => (
                <MenuItem key={index} value={user.name}>{user.name}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField id='my-drop-down' type='number' value={selectedvalue} onChange={handleSelectedValueChange} style={{ fontSize: '16px', padding: '10px', width: '100px', marginRight: '20px' }} />
        </div>

        <div className='table'>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Users</TableCell>
                {Array.from({ length: selectedvalue }, (_, index) => (
                  <TableCell key={index}>Card {index + 1}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Input className='user' type='text' value={user.name} onChange={(event) => {
                      const newUsers = [...users]
                      newUsers[index].name = event.target.value
                      setUsers(newUsers)
                    }} />
                  </TableCell>
                  {Array.from({ length: selectedvalue }, (_, cardIndex) => (
                    <TableCell key={cardIndex}>
                      <input type='checkbox' checked={user.cards[cardIndex]} onChange={(event) => handleCardChange(event, index, `card${cardIndex + 1}`)}
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
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
export default Project1;