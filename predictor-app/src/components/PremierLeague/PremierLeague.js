import React from "react";
import { Table, Input } from "reactstrap";

const PremierLeague = () => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Otbor</th>
            <th>prognoza1</th>
            <th>Prognoza2</th>
            <th>otbor2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Manchester United</td>
            <td>
              <form class="form-inline">
                <Input className="form-control w-25" />
                <span class="input-group-text">-</span>
                <Input className="form-control w-25" />
              </form>
            </td>
            <td>Noric</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default PremierLeague;
