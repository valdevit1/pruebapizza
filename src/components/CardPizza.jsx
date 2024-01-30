import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Toast from "react-bootstrap/Toast";
import { GlobalContext } from "../context/GlobalContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatToChileanPesos } from "../helpers/helpers";
import { Link } from "react-router-dom";

function CardPizza() {
  const [showToast, setShowToast] = useState(false);
  const [selectedPizzaName, setSelectedPizzaName] = useState("");
  const { pizzas, addToCart } = useContext(GlobalContext);
  const navigate = useNavigate();
  const handleInfo = (id) => {
    navigate(`/pizza/${id}`);
  };

  const handleAddToCart = (selectedPizza) => {
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

  return (
    <>
      {pizzas.map((pizza) => (
        <Card key={pizza.id}>
          <Card.Img className="pizza-pic" variant="top" src={pizza.img} />
          <Card.Body className="card-pizza">
            <Card.Title className="pizza-name">
              <strong>{pizza.name}</strong>
            </Card.Title>
            <ListGroup className="pizza-ingredients">
              {pizza.ingredients.map((ingredient, index) => (
                <ListGroup.Item key={index}>🍕{ingredient}</ListGroup.Item>
              ))}
            </ListGroup>
            <div>
              <Button className="pizza-button" variant="info" onClick={() => handleAddToCart(pizza)}>
                Agregar por {formatToChileanPesos(pizza.price)}
              </Button>
              <Button className="pizza-button" variant="danger" onClick={() => handleInfo(pizza.id)}>
                Mas info 👀
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
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
          <strong className="me-auto ">🍕🍕🍕</strong>
        </Toast.Header>
        <Toast.Body>{selectedPizzaName ? `Pizza ${selectedPizzaName} agregada con éxito` : ""}</Toast.Body>
      </Toast>
      <Link className="go" to="/carrito">
        Ir a carrito -&gt;
      </Link>
    </>
  );
}

export default CardPizza;
