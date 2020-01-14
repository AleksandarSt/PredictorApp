import React from "react";
import { Table, Input, FormGroup, Label } from "reactstrap";

const PremierLeague = () => {
  return (
    <>
      <FormGroup>
        <Label for="exampleSelect">Кръг</Label>
        <Input className="w-25" type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
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
