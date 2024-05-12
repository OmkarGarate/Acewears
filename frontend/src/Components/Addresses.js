import React from "react";

function Addresses() {
  return (
    <>
      <table className="orderHistory orderAddress">
        <thead>
          <tr className="ohisHeading oaHeading">
            <th>Addresses</th>
            <th>
              <button>ADD ANOTHER ADDRESS</button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="ohisHead1 ohisHead11 oaHead1">
            <td>
              Harsh Agarawal, 2025 M Street, NW, Washington, DC, 20036, Phone
              Number - 99999 99999
            </td>
            <td>
              <button>REMOVE</button>
            </td>
          </tr>
          <tr className="ohisHead1 ohisHead11 oaHead1">
            <td>
              Harsh Agrawal, Morni Road, Near Nada Sahib Gurudwara, Panchkula,
              Chandigarh UT, 134109, Phone Number - 99999 99900
            </td>
            <td>
              <button>REMOVE</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Addresses;
