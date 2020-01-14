import React, { useState } from "react";
import { Button } from "reactstrap";
import { FaEdit } from "react-icons/fa";
import EditModal from "./Modals/EditTeamModal";

const TeamRow = ({ team, fetchTeams }) => {
  const [editModal, setEditModal] = useState(false);
  const toggleEditModal = () => setEditModal(!editModal);

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
          onClick={toggleEditModal} //.bind(this, user)}
        >
          <FaEdit />
          <EditModal
            team={team}
            toggleEditModal={toggleEditModal}
            editModal={editModal}
            fetchTeams={fetchTeams}
          />
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
};

export default TeamRow;
