import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

const AddTeamModal = ({ addTeamModal, toggleAddTeamModal, fetchTeams }) => {
  const [displayName, setDisplayName] = useState();
  const displayNameChangeHandler = event => {
    const newValue = event.target.value;
    setDisplayName(newValue);
  };

  const [teamName, setTeamName] = useState();
  const teamNameChangeHandler = event => {
    const newValue = event.target.value;
    setTeamName(newValue);
  };

  const addTeam = async () => {
    await fetch("https://localhost:5001/Team/add-team", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: 0,
        name: teamName,
        displayName: displayName
      })
    })
      .then(() => {
        fetchTeams();
        toggleAddTeamModal();
      })
      .catch(err => console.log(err));
  };

  return (
    <Modal isOpen={addTeamModal} toggle={toggleAddTeamModal}>
      <ModalHeader toggle={toggleAddTeamModal}>Създай отбор</ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label for="teamName">Team Name</Label>
          <Input
            type="text"
            name="teamame"
            id="teamName"
            placeholder="Team Name"
            value={teamName}
            onChange={event => teamNameChangeHandler(event)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="displayName">Display Name</Label>
          <Input
            type="text"
            name="displayName"
            id="displayName"
            placeholder="Display Name"
            value={displayName}
            onChange={event => displayNameChangeHandler(event)}
          />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={() => {
            addTeam();
            toggleAddTeamModal();
          }}
        >
          Запази
        </Button>{" "}
        <Button color="secondary" onClick={toggleAddTeamModal}>
          Откажи
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddTeamModal;
