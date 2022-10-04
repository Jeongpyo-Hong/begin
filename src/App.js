import React, {useRef, useState} from "react"; // useState, useRef 사용하면 꼭 import 시켜야 함
import CreateUser from './CreateUser';
import UserList from "./UserList";

const App = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value 
    });
  }

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "aaa",
      email: "aaa@gmail.com",
      active: true
    },
    {
      id: 2,
      username: "bbb",
      email: "bbb@gmail.com",
      active: false
    },
    {
      id: 3,
      username: "ccc",
      email: "ccc@gmail.com",
      active: false
    },
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      username,
      email
    };
    setUsers([...users, user]);
    
    setInputs({
      username: '',
      email: ''
    })

    nextId.current += 1;
  }

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  const onToggle = id => {
    setUsers(
      users.map(user => 
        user.id === id ? {...user, active: !user.active} : user
      )
    )
  }

  return(
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  )
};

export default App;
