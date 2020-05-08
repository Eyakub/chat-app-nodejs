import React, {useState, useEffect} from 'react'
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

// location comes from 'react-router'
const Chat = ({location}) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const ENDPOINT = 'localhost:5000';

  useEffect( ()=> {
    const { name, room } = queryString.parse(location.search);

    // pass end point
    socket = io(ENDPOINT);


    setName(name);
    setRoom(room);

    socket.emit('join', {name, room});

    // console.log(socket)
    // console.log(location.search);
  }, [ENDPOINT, location.search])
  return (
    <div>
      Chat
    </div>
  )
}

export default Chat;