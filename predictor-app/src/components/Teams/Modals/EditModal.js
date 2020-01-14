import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const EditModal = ({ team, editModal, toggleEditModal, fetchTeams }) => {
  /* const [editModal, setEditModal] = useState(false);
  const toggleEditModal = () => setEditModal(!editModal); */
  const [displayName, setDisplayName] = useState(team.displayName);

  const displayNameChangeHandler = event => {
    const newValue = event.target.value;
    setDisplayName(newValue);
  };

  const [teamName, setTeamName] = useState(team.name);
  const teamNameChangeHandler = event => {
    const newValue = event.target.value;
    setTeamName(newValue);
    console.log(newValue);
  };

  async function updateTeam() {
    const res = await fetch("https://localhost:5001/Team", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: team.id,
        name: teamName,
        displayName: displayName
      })
    })
      .then(() => {
        fetchTeams();
        toggleEditModal();
      })
      .catch(err => console.log(err)); //setErrors(err));
  }

  return (
    <Modal isOpen={editModal} toggle={toggleEditModal}>
      <ModalHeader toggle={toggleEditModal}>
        Редактирай {team.displayName}
      </ModalHeader>
      <ModalBody>
        {/* <Field
          type="text"
          data={{}}
          validation={{ validation }}
          name="creditLimit"
          label="Credit Limit"
          placeholder="Credit Limit"
          changeHandler={(value, newValidation) => {
            setField({ field: 'creditLimit', value });
            setValidation(newValidation);
          }}
        /> */}
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
            placeholder="with a placeholder"
            value={displayName}
            onChange={event => displayNameChangeHandler(event)}
          />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={updateTeam}>
          Запази
        </Button>{" "}
        <Button color="secondary" onClick={toggleEditModal}>
          Откажи
        </Button>
      </ModalFooter>
    </Modal>
  );
};

/* const mapStateToProps = state => {
  return {
    token: getToken(state),
  };
}; */

/* const mapDispatchToProps = {
  // loadMenus: loadMenusRequest,
}; */

export default /* connect(mapStateToProps, mapDispatchToProps)( */ EditModal /* ) */;
