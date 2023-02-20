import React from "react";

export const TableRow = ({ Details }) => {
  return (
    <tr>
        <td colSpan = {6} style = {{textAlign: 'justify', padding: '10px 15px'}}><b>Details: </b>: {Details.Desc}</td>
    </tr>
  );
};