import React from "react";

const User = ({user, onRemove, onToggle}) => {
  return(
  <div>
    <b
      style = {{
        cursor: 'pointer',
        color: user.active ? 'green' : 'black'
      }}
      onClick={() => onToggle(user.id)}
    >
    {user.username}
    </b>
    <span>({user.email})</span>
    <button onClick={() => onRemove(user.id)}>삭제</button>
  </div>
  )
};

const UserList = ({users, onRemove, onToggle}) => {
  return (
    <div>
      {users.map(people => ( // map으로 users에서 요소를 하나씩 꺼내고
        // User에 user가 users의 각 요소를 받을 수 있도록 함
        <User user={people} key={people.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default UserList;
