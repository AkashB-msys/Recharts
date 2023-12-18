import React from "react";
import tabledata from "../Mockdata/tabledata.json";

const SprintTable = () => {
  return (
    <div>
      <h3 className="taskname">Table List</h3>
      <div className="tableContent">
      <table>
        <tr>
          <th>Sprint Name</th>
          <th>Status</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Completed Date</th>
        </tr>
        {tabledata.map((data) => {
          return (
            <tr>
              <td>{data.SprintName}</td>
              <td>{data.Status}</td>
              <td>{data.StartDate}</td>
              <td>{data.EndDate}</td>
              <td>{data.CompletedDate}</td>
            </tr>
          );
        })}
      </table>
      </div>
    </div>
  );
};

export default SprintTable;
