import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Table } from "react-bootstrap";
import "./Cart.css";

const Cart = ({ cart }) => {
  const { image, title } = cart;
  console.log(cart);
  return (
    <div className="cart-info">
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>
              <img src={image} alt="" />
            </td>
            <td>{title}</td>
            <td><Button><FontAwesomeIcon icon={faTrash}/></Button></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
