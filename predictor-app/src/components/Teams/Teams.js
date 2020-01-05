import React, { useState, useEffect } from "react";
import { Table, Button } from "reactstrap";
import { FaEdit } from "react-icons/fa";

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

  let tableRows = teams.map(team => {
    return (
      <tr key={team.id}>
        <th scope="row">{team.id}</th>
        <td>{team.name}</td>
        <td>{team.displayName}</td>
        <td>
          <Button
            id={"edit_" + team.id}
            outline
            color="primary"
            //onClick={toggle} //.bind(this, user)}
          >
            <FaEdit />
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
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Име</th>
            <th>Презентационно име</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </Table>{" "}
    </>
  );
};

export default Teams;
