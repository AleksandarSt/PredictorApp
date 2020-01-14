import React, { useState, useEffect } from "react";
import { Table, Button } from "reactstrap";
import { FaEdit } from "react-icons/fa";

import TeamRow from "./TeamRow";

const Teams = () => {
  /* const teams = [
      {
        id: 1,
        teamName: "Manchester United"
      },
      {
        id: 2,
        teamName: "Arsenal"
      },
      {
        id: 3,
        teamName: "Manchester City"
      }
    ]; */

  const [teams, setTeams] = useState([]);

  async function fetchTeams() {
    const res = await fetch("https://localhost:5001/Team/teams");
    res
      .json()
      .then(res => setTeams(res))
      .catch(err => alert("error")); //setErrors(err));
  }

  useEffect(() => {
    fetchTeams();
  }, []);

  let tableRows = teams.map(team => (
    <TeamRow key={team.id} team={team} fetchTeams={fetchTeams} />
  ));

  return (
    <>
      <Button color="danger" className="mr-1">
        Създай нов отбор
      </Button>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Име</th>
            <th>Презентационно име</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </Table>
    </>
  );
};

export default Teams;
