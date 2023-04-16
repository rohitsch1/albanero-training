import React, { useState } from "react";
import Cards from "./Cards";
import '../scss/cards.scss'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@mui/material";

import {Checkbox,Button} from "@mui/material";

function CustomizedTables() {

  const [users, setUsers] = useState([
    {
      name: "user1",
      cards: [
        { name: "card1", access: false },
        { name: "card2", access: false },
        { name: "card3", access: false },
        { name: "card4", access: false }
      ]
    },
    {
      name: "user2",
      cards: [
        { name: "card1", access: false },
        { name: "card2", access: false },
        { name: "card3", access: false },
        { name: "card4", access: false }
      ]
    },
    {
      name: "user3",
      cards: [
        { name: "card1", access: false },
        { name: "card2", access: false },
        { name: "card3", access: false },
        { name: "card4", access: false }
      ]
    }
  ]);
  const [selectedUser, setSelectedUser] = useState("user1");

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  console.log(users)
  const handleCheckboxChange = (card, event) => {
    const newUsers = users.map((user) => {
      if (user.name === selectedUser) {
        const newCards = user.cards.map((c) =>
          c.name === card ? { ...c, access: event.target.checked } : c
        );
        return { ...user, cards: newCards };
      }
      return user;
    });
    setUsers(newUsers);
  };

  const isCardVisible = (card) => {
    const currentUser = users.find((user) => user.name === selectedUser);
    if (currentUser) {
      const currentCard = currentUser.cards.find((c) => c.name === card);
      if (currentCard) {
        return currentCard.access;
      }
    }
    return false;
  };

  const generateCardsObject = () => {
    const cardArr=[]
    const cardsObject = {};
    
    for (let i = 1; i <= 4; i++) {
        // console.log(i)
      cardsObject["name"] = `card${i}`
      cardsObject["access"] = false
      cardArr.push(cardsObject)
    }
    return cardArr
  }

  const handleAddUser = () => {
    const newUsers = [...users, { name: "user", cards: generateCardsObject()}]
    setUsers(newUsers)
  }


  console.log(`user details${users}`);

  return (
    <div className="content">
      <div className="Table"> 
      <h1 className="title">Access Control Page</h1>
      <FormControl>
        <InputLabel></InputLabel>
        <Select value={selectedUser} onChange={handleUserChange}>
          {users.map((user) => (
            <MenuItem key={user.name} value={user.name}>
              {user.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="table_Header">User</TableCell>
            {users[0].cards.map((card) => (
              <TableCell key={card.name} className="table_cell">
                {card.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.name}>
              <TableCell>{user.name}</TableCell>
              {user.cards.map((card) => (
                <TableCell key={card.name}>
                  <Checkbox
                    checked={card.access}
                    onChange={(event) => handleCheckboxChange(card.name, event)}
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant="contained" color="primary" onClick={handleAddUser}>
        Add User
      </Button>
      </div> 
      <div className="cards">
        {isCardVisible("card1") && <Cards value="card1"/>}
        {isCardVisible("card2") && <Cards value="card2"/>}
        {isCardVisible("card3") && <Cards value="card3"/>}
        {isCardVisible("card4") && <Cards value="card4"/>}
      </div>
    </div>
  );
}

export default CustomizedTables;
