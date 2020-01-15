import React from "react";
import { Table, Input, FormGroup, Label } from "reactstrap";

const PremierLeague = () => {
  const predictions = [
    {
      id: 1,
      scheduledOn: "20.01.2020 15:00",
      homeTeamName: "Manchester United",
      homePrediction: 3,
      awayPrediction: 2,
      awayTeamName: "Manchester city",
      finalScore: "3-2",
      userPoints: 2
    },
    {
      id: 1,
      scheduledOn: "20.01.2020 15:00",
      homeTeamName: "Manchester United",
      homePrediction: 3,
      awayPrediction: 2,
      awayTeamName: "Manchester city",
      finalScore: "3-2",
      userPoints: 2
    },
    {
      id: 1,
      scheduledOn: "20.01.2020 15:00",
      homeTeamName: "Manchester United",
      homePrediction: 3,
      awayPrediction: 2,
      awayTeamName: "Manchester city",
      finalScore: "3-2",
      userPoints: 2
    }
  ];

  const predictionRows = predictions.map(p => {
    return (
      <tr>
        <td>{p.scheduledOn}</td>
        <td>{p.homeTeamName}</td>
        <td>
          <form class="form-inline">
            <Input className="form-control w-25" />
            <span class="input-group-text">-</span>
            <Input className="form-control w-25" />
          </form>
        </td>
        <td>{p.awayTeamName}</td>
        <td>{p.finalScore}</td>
        <td>{p.userPoints}</td>
      </tr>
    );
  });

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
            <th>Data i chas</th>
            <th>Otbor</th>
            <th>Prognoza</th>
            <th>otbor2</th>
            <th>rezultat</th>
            <th>tochki</th>
          </tr>
        </thead>
        <tbody>{predictionRows}</tbody>
      </Table>
    </>
  );
};

export default PremierLeague;
