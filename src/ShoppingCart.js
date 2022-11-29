import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import "./App.css";

const ShoppingCart = (props) => {
  const { cartItems, onRemove } = props;

  const cost = cartItems.reduce(
    (amount, item) => (amount += item.price),
    0
  );


  return (
    <div className="shopping-cart">
      <Card style={{ width: "25rem" }}>
        <div className="container-fluid">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((cartItem, index) => (
              <div className="row mt-1" key={cartItem.id}>
                <div className="col-6">{cartItem.name}</div>
                <div className="col-2">${cartItem.price}</div>
                <div className="col-2 d-flex">
                  <Button
                    variant="danger"
                    onClick={() => onRemove(cartItem.id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div>Nothing in cart</div>
          )}
          <div className="row mt-5 pt-5">
            <div className="col-6">Total Cost:</div>
            <div className="col-4">${cost}.00</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ShoppingCart;