import React, { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Toast from "react-bootstrap/Toast";
import { GlobalContext } from "../context/GlobalContext";
import { useParams } from "react-router-dom";
import { formatToChileanPesos } from "../helpers/helpers";
import { Link } from "react-router-dom";

function DetailPizza() {
  const { id } = useParams();
  const { pizzas, addToCart } = useContext(GlobalContext);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [selectedPizzaName, setSelectedPizzaName] = useState("");

  useEffect(() => {
    const pizza = pizzas.find((pizza) => pizza.id === id);
    if (pizza) {
      setSelectedPizza(pizza);
    }
  }, [id, pizzas]);

  const handleAddToCart = () => {
    if (selectedPizza) {
      addToCart(selectedPizza);
      setShowToast(true);
      setSelectedPizzaName(selectedPizza.name.charAt(0).toUpperCase() + selectedPizza.name.slice(1));
    }
  };

  const hideToast = () => {
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  if (!selectedPizza) {
    return null;
  }

  return (
    <div className="detail-card">
      <Link className="back" to="/">
        Volver &lt;-
      </Link>
      <Card>
        <Card.Img className="pizza-pic-detail" variant="top" src={selectedPizza.img} />
        <Card.Body className="card-pizza">
          <Card.Title className="pizza-name">
            <strong>{selectedPizza.name}</strong>
          </Card.Title>
          <Card.Text className="pizza-ingredients">
            <Card.Text>
              {selectedPizza.ingredients.map((ingredient, index) => (
                <ListGroup.Item key={index}>🍕{ingredient}</ListGroup.Item>
              ))}
            </Card.Text>
            <Card.Text className="pizza-desc">{selectedPizza.desc}</Card.Text>
          </Card.Text>
          <div>
            <Button className="pizza-button" variant="info" onClick={handleAddToCart}>
              Agregar al carrito por: {formatToChileanPesos(selectedPizza.price)}
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        autohide
        delay={2000}
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999,
          minWidth: "200px",
        }}
        onEntered={hideToast}
      >
        <Toast.Header>
          <strong className="me-auto">🍕🍕🍕</strong>
        </Toast.Header>
        <Toast.Body>{selectedPizzaName ? `Pizza ${selectedPizzaName} agregada con éxito` : ""}</Toast.Body>
      </Toast>
    </div>
  );
}

export default DetailPizza;
