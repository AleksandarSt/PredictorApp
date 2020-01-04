import React, { Component } from "react";
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
import { FaEdit } from "react-icons/fa";

class Teams extends Component {
  render() {
    const teams = [
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
    ];

    let tableRows = teams.map(team => {
      return (
        <tr key={team.id}>
          <th scope="row">{team.id}</th>
          <td>{team.teamName}</td>
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
              <th>Team Name</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </Table>{" "}
      </>
    );
  }
}

export default Teams;
