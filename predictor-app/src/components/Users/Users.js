import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Tooltip,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  ModalFooter
} from "reactstrap";
import { FaUserEdit } from "react-icons/fa";

const Users = props => {
  const [hasError, setErrors] = useState(false);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  //const [users, setUsers] = useState([]);

  /* async function fetchData() {
    const res = await fetch("https://localhost:5001/User/users");
    res
      .json()
      .then(res => setUsers(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []); */

  const users = [
    {
      id: 1,
      firstName: "peshko",
      lastName: "petkov",
      email: "test@abv.bg"
    },
    {
      id: 2,
      firstName: "peshko",
      lastName: "petkov",
      email: "test@abv.bg"
    }
  ];

  /* let addModal = (
    <Modal isOpen={openAddModal}>
      <ModalHeader>Add User</ModalHeader>
      <ModalBody>
        <div>add</div>
      </ModalBody>
    </Modal>
  ); */

  /* let editModal = user => (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Edit User</ModalHeader>
      <ModalBody>
        <div>{user.firstName}</div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Do Something
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  ); */

  let tableRows = users.map(user => {
    return (
      <tr key={user.id}>
        <th scope="row">{user.id}</th>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>
          <Button
            id={"edit_" + user.id}
            outline
            color="primary"
            onClick={toggle} //.bind(this, user)}
          >
            <FaUserEdit />
          </Button>
          {/* <Tooltip
          placement="top"
          isOpen={tooltipOpen}
          toggle={toggle}
          target={"edit_" + user.id}
        >
          Редактирай {user.firstName} {user.lastName}
        </Tooltip> */}
        </td>
      </tr>
    );
  });

  return (
    <>
      {/* {addModal} */}
      {/* editModal */}
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </Table>
    </>
  );
};

export default Users;
