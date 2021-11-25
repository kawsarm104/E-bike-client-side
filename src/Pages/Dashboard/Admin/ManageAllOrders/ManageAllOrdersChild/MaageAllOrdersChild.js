import React from "react";

const ManageAllOrdersChild = (props) => {
  const { name, email, ordereditemname, address, phone } = props.order;
  //   console.log(props.index+1);
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>

      <td>{name}</td>
      <td>{email}</td>
      <td>{ordereditemname}</td>
      <td>{address}</td>
      <td>{phone}</td>
      <td>
        <div className="d-inline-flex">
          <button className="btn btn-outline-success  border-0">Approve</button>
          <button className="btn btn-outline-danger border-0">
            <i className="fas fa-times"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ManageAllOrdersChild;
