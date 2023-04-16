import React, { useState ,useContext} from 'react';
import './Cards.css'
import FormContext from './context/FormContext';

function Card(props) {
  const [action, setAction] = useState(null);

  function handleLike() {
    setAction('like');
  }

  function handleDislike() {
    setAction('dislike');
  }

  return (
    <div className="card">
      <div className="card-image">
        <img src={props.profilePic} alt={props.name} />
      </div>
      <div className="card-info">
        <h2>{props.name}</h2>
        <div className="card-actions">
          <button onClick={handleLike}>Like</button>
          <button onClick={handleDislike}>Dislike</button>
        </div>
      </div>
    </div>
  );
}

function TasksPage(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userData, setUserData] = useState([]);
  

  console.log(props.value)
  const users = [
    {
      id: 1,
      name: 'John Doe',
      profilePic: 'https://example.com/profile-pic-1.jpg'
    },
    {
      id: 2,
      name: 'Jane Smith',
      profilePic: 'https://example.com/profile-pic-2.jpg'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      profilePic: 'https://example.com/profile-pic-3.jpg'
    }
  ];

  function handleNext() {
    if (currentIndex < users.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function handleAction(action) {
    const user = users[currentIndex];
    const updatedUserData = [...userData, { id: user.id, name: user.name, action }];
    setUserData(updatedUserData);
  }

  return (
    <div className="App">
      {currentIndex < users.length && (
        <Card
          key={users[currentIndex].id}
          profilePic={users[currentIndex].profilePic}
          name={users[currentIndex].name}
          onAction={handleAction}
        />
      )}
      {currentIndex === users.length && (
        <div>
          <h2>Thanks for reviewing all users!</h2>
          <p>Here's the data of your actions:</p>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </div>
      )}
      {currentIndex < users.length && (
        <button onClick={() => { handleNext(); handleAction('pass'); }}>Next</button>
      )}
    </div>
  );
}

export default TasksPage;
