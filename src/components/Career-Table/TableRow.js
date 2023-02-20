import React from "react";

export const TableRow = ({ Details }) => {
  return (
    <tr>
        <td colSpan = {5} style = {{textAlign: 'justify', padding: '10px 15px'}}><b>{Details.Role}</b>: {Details.Role_desc}</td>
    </tr>
  );
};