import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./App.css";

const DisplayList = (props) => {
  const { onAdd, list } = props;


  return (
    <div className="cardContainer">
      {list && list.length > 0 ? (
        list.map((item) => (
          <Card className="item-card" key={item.id}>
            <Card.Img 
              alt= "picture of wine bottle"
              className="img"
              src={require("./images/" + item.name + ".png") }
            />
            <Card.Body>
              <div>
                <Card.Title className="wine-title">{item.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {item.type}{" "}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  {item.region}{" "}
                </Card.Subtitle>
                <Card.Text>${item.price}.00</Card.Text>
              </div>

              <div className="add-item">
                <Button
                  size="sm"       
                  onClick={() => onAdd(item)}
                >
                  Add to cart
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))
      ) : (
        <div>No Results Found</div>
      )}
    </div>
  );
};

export default DisplayList;