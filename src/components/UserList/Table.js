import React from "react";

export function Table({ renderData, typeAccount }) {
  for (let i = 0; i < renderData.length; i++) {
    for (let j = 0; j < typeAccount.length; j++) {
      if (renderData[i].accountType === typeAccount[j].id) {
        renderData[i].accountType = typeAccount[j].title;
      }
    }
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Profit & Loss</th>
          <th>Account Type</th>
        </tr>
      </thead>
      <tbody>
        {renderData.map((data) => {
          return (
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>
                {data.currency} {data.profitLoss}
              </td>
              <td>{data.accountType}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
