import React from "react";
import { Details } from "./Details";

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
            <Details
              key={data.id}
              name={data.name}
              currency={data.currency}
              profitLoss={data.profitLoss}
              accountType={data.accountType}
            />
          );
        })}
      </tbody>
    </table>
  );
}
