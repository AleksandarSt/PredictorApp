import React, { useState } from "react";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  ModalFooter,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { FaUserEdit } from "react-icons/fa";

const Users = () => {
  const usersDefault = [
    {
      id: 1,
      firstName: "peshko",
      lastName: "petkov",
      email: "test@abv.bg"
    },
    {
      id: 2,
      firstName: "Richi",
      lastName: "petkov",
      email: "test@abv.bg"
    },
    {
      id: 3,
      firstName: "Debeliq",
      lastName: "Prestypnik",
      email: "test@abv.bg"
    }
  ];

  const [modal, setModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [users, setUsers] = useState(usersDefault);

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

  const editUser = user => {
    setSelectedUser(user);
    //setOpenEditModal(true);
    setModal(true);
  };

  const saveEditedUser = (event, editedUserId) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    let editedUser = { id: editedUserId };
    for (var pair of formData.entries()) {
      editedUser[pair[0]] = pair[1];
    }
    const newUsers = [...users];
    const indexOfEditedUser = newUsers.findIndex(u => u.id === editedUserId);
    newUsers[indexOfEditedUser] = editedUser;
    console.log(editedUser);
    console.log(newUsers);
    setUsers(newUsers);
    setModal(false);
  };

  let testmodal = (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        Редактирай потребител № {selectedUser.id}
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={e => saveEditedUser(e, selectedUser.id)}>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              defaultValue={selectedUser.firstName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="firstName">Last Name</Label>
            <Input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              defaultValue={selectedUser.lastName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              defaultValue={selectedUser.email}
            />
          </FormGroup>
          <Button
            type="submit"
            color="primary"
            //onClick={}
          >
            Save
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </Form>
      </ModalBody>
      <ModalFooter></ModalFooter>
    </Modal>
  );

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
            //onClick={toggle} //.bind(this, user)}
            onClick={editUser.bind(this, user)}
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
      {testmodal}
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Име</th>
            <th>Фамилия</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </Table>
    </>
  );
};

export default Users;
