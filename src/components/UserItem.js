import React, {useState, useEffect} from 'react';
import { Card } from 'react-bootstrap';
import Axios from 'axios';


const UserItem = ({ name, email, username }) => {
  const [userImage, setUserImae] = useState();

  useEffect(async () => {
    let photo = await Axios.get(`https://avatars.dicebear.com/api/human/${name}.svg`)
    console.log(photo)
    setUserImae(photo);
    
  }, [name]);

  return (
    <Card className="user">
      <Card.Img variant="top" src={userImage} className="user__image" alt={name} />
      <Card.Body>
        <Card.Title className="user__name">{name}</Card.Title>
        <Card.Text className="user__details">
          <span>
            <strong>Username:</strong> {username}
          </span>
          <span>
            <strong>Email:</strong> {email}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserItem;
