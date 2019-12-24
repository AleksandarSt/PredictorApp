import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Tooltip,
  Modal,
  ModalHeader,
  ModalBody,
  Form
} from "reactstrap";
import { FaUserEdit } from "react-icons/fa";

const Users = props => {
  const [hasError, setErrors] = useState(false);
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

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [selectedContact, setSelectedContact] = useState({});
  //const [contacts, setContacts] = useState([]);

  const openModal = () => {
    setOpenAddModal(true);
  };
  const closeModal = () => {
    setOpenAddModal(false);
    setOpenEditModal(false);
    getData();
  };
  const cancelAddModal = () => {
    setOpenAddModal(false);
  };
  const editContact = contact => {
    setSelectedContact(contact);
    setOpenEditModal(true);
  };
  const cancelEditModal = () => {
    setOpenEditModal(false);
  };
  const getData = async () => {
    /* const response = await getContacts();
    setContacts(response.data);
    setInitialized(true); */
  };
  /* const deleteSelectedContact = async id => {
    await deleteContact(id);
    getData();
  }; */
  useEffect(() => {
    if (!initialized) {
      getData();
    }
  });

  //const toggle = () => setTooltipOpen(!tooltipOpen);

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

  let addModal = (
    <Modal isOpen={openAddModal}>
      <ModalHeader>Add User</ModalHeader>
      <ModalBody>
        <div>add</div>
      </ModalBody>
    </Modal>
  );

  let editModal = (
    <Modal isOpen={openEditModal}>
      <ModalHeader>Edit User</ModalHeader>
      <ModalBody>
      <Form
            edit={true}
            onSave={closeModal.bind(this)}
            contact={selectedContact}
            onCancelEdit={cancelEditModal}
          />
      </ModalBody>
    </Modal>
  );

  let tableRows = users.map(user => {
    return (
      <tr key={user.id}>
        <th scope="row">{user.id}</th>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <Button
          id={"edit_" + user.id}
          outline
          color="primary"
          onClick={editContact.bind(this, user)}
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
      </tr>
    );
  });

  return (
    <>
      {addModal}
      {editModal}
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
