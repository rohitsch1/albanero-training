import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, CardActions, Button, Select, MenuItem ,Box ,Divider ,CardMedia} from '@mui/material';
import './project4.scss'

const initialUsers = [
  { id: 1, name: 'Rohit', age: 24, likes: [], dislikes: [] },
  { id: 2, name: 'rahul', age: 27, likes: [], dislikes: [] },
  { id: 3, name: 'pallavi', age: 23, likes: [], dislikes: [] },
  { id: 4, name: 'chanchal', age: 26, likes: [], dislikes: [] },
  { id: 5, name: 'sonal', age: 25, likes: [], dislikes: [] },
];

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [matchedUsers, setMatchedUsers] = useState([]);
  const [activeUser, setActiveUser] = useState(initialUsers[0]);

  useEffect(() => {
    console.log("done ")
  }, [users])

  const handleLike = (user) => {
    const updatedUsers = users.map((u) => {
      if (u.id === user.id) {
        return { ...u, likes: [...u.likes, activeUser.id] };
      } else {
        return u;
      }
    });
    setUsers(updatedUsers);
    checkMatches(user, updatedUsers);
  };

  const handleDislike = (user) => {
    
    const updatedUsers = users.map((u) => {
      if (u.id === user.id) {
        return { ...u, dislikes: [...u.dislikes, activeUser.id] };
      } else {
        return u;
      }
    });
    setUsers(updatedUsers);
  };

  const checkMatches = (user, updatedUsers) => {
    const updatedMatchedUsers = [];
    updatedUsers.forEach((u) => {
      if (u.id !== user.id && u.likes.includes(activeUser.id) && activeUser.likes.includes(u.id)) {
        updatedMatchedUsers.push({ user1: activeUser, user2: u });
      }
    });
    setMatchedUsers(updatedMatchedUsers);
  };


  const handleUserChange = (event) => {
    setActiveUser(event.target.value);
  };

  const getUsersWhoLiked = (user) => {
    const usersWhoLiked = users.filter((u) => u.likes.includes(user.id));
    return usersWhoLiked;
  };

  return (
    <Container>
      <Typography variant="h4" align="center" >
        LinkedIn
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '16px' }}>
      <Select labelId="user-select-label" label="active user" value={activeUser} onChange={handleUserChange}>
          {users.map((user) => (
            <MenuItem key={user.id} value={user}>
              {user.name}
            </MenuItem>
          ))}
        </Select>
      </div>
      {users.map((user) => (
        <Card key={user.id} sx={{ maxWidth: 500, margin: 'auto', mb: 3 }}>
        <CardMedia
          component="img"
          height="500"
          image="https://picsum.photos/id/1018/1000/600/"
          alt="User profile image"
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Box sx={{ display: 'flex', flexDirection:'column' ,justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5" component="h2">
              {user.name}, {user.age}
            </Typography>
            <Typography color="textSecondary">
              {user.likes.length} likes, {user.dislikes.length} dislikes
            </Typography>
          </Box>
          {user.likes.length > 0 && (
            <Typography variant="caption" gutterBottom sx={{ mt: 1 }}>
              Users who liked {user.name}: {getUsersWhoLiked(user).map((u) => u.name).join(', ')}
            </Typography>
          )}
          <Divider sx={{ my: 1 }} />
          <Typography variant="body2" color="textSecondary">
            {user.bio}
          </Typography>
        </CardContent>
        <CardActions>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Button variant="outlined" size="small" color="primary" onClick={() => handleLike(user)}>
              Like
            </Button>
            <Button variant="outlined" size="small" color="secondary" onClick={() => handleDislike(user)}>
              Dislike
            </Button>
          </Box>
        </CardActions>
      </Card>
      
      
      ))}
      {matchedUsers.length > 0 && (
        <div style={{ marginTop: '16px' }}>
          <Typography variant="h6" align="center" gutterBottom>
            You matched with:
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {matchedUsers.map((match, index) => (
              <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0px 16px' }}>
                <Typography variant="h6" gutterBottom>
                  {match.user1.name} & {match.user2.name}
                </Typography>
                <Typography variant="caption" gutterBottom>
                  Age {match.user1.age} & Age {match.user2.age}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
}

export default App;