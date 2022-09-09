import React from "react";

export function Details({ name, currency, profitLoss, accountType }) {
  return (
    <tr>
      <td>{name}</td>
      <td>
        {currency} {profitLoss}
      </td>
      <td>{accountType}</td>
    </tr>
  );
}
