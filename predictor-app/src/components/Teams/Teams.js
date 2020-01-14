import React, { useState, useEffect } from "react";
import { Table, Button } from "reactstrap";

import TeamRow from "./TeamRow";
import AddTeamModal from "./Modals/AddTeamModal";

const Teams = () => {
  const [addTeamModal, setAddTeamModal] = useState(false);
  const toggleAddTeamModal = () => setAddTeamModal(!addTeamModal);

  const [teams, setTeams] = useState([]);

  async function fetchTeams() {
    const res = await fetch("https://localhost:5001/Team/teams");
    res
      .json()
      .then(res => setTeams(res))
      .catch(() => alert("error")); //setErrors(err));
  }

  useEffect(() => {
    fetchTeams();
  }, []);

  let tableRows = teams.map(team => (
    <TeamRow key={team.id} team={team} fetchTeams={fetchTeams} />
  ));

  return (
    <>
      <Button color="danger" className="mr-2" onClick={toggleAddTeamModal}>
        Създай нов отбор
      </Button>
      <AddTeamModal
        addTeamModal={addTeamModal}
        toggleAddTeamModal={toggleAddTeamModal}
        fetchTeams={fetchTeams}
      />
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Име</th>
            <th>Презентационно име</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </Table>
    </>
  );
};

export default Teams;
