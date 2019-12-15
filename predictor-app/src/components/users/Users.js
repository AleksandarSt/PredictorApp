import React, { useState, useEffect } from 'react';
import { Table, Button } from 'reactstrap';

const Users = (props) => {
  const [hasError, setErrors] = useState(false);
  const [users, setUsers] = useState([]);



  async function fetchData() {
    const res = await fetch("https://localhost:5001/User/users");
    res
      .json()
      .then(res => setUsers(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  },[]);

    let tableRows=users.map(user=>{
    
      return(
      <tr key={user.id}>
          <th scope="row">{user.id}</th>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
          <Button outline color="primary" onClick={()=>{console.log(user.id)}}>Редактирай</Button>
        </tr>
      )
    })

  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
       {tableRows}
      </tbody>
    </Table>
  );
}

export default Users;
