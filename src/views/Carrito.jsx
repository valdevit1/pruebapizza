import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { formatToChileanPesos } from "../helpers/helpers";
import { Link } from "react-router-dom";

function Carrito() {
  const { cartItems, removeQuantityFromCart, addQuantityToCart, deleteFromCart } = useContext(GlobalContext);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="table-container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th width="20%">Imagen</th>
            <th width="20%">Nombre</th>
            <th width="20%">Precio</th>
            <th width="40%">Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img className="cart-img" src={item.img} alt={item.name} />
              </td>
              <td className="cart-name">{item.name}</td>
              <td className="cart-name">{formatToChileanPesos(item.price)}</td>
              <td>
                <div className="buttons">
                  <Button variant="warning" onClick={() => removeQuantityFromCart(item.id)}>
                    -
                  </Button>
                  <span>{item.quantity}</span>
                  <Button variant="success" onClick={() => addQuantityToCart(item.id)}>
                    +
                  </Button>
                  <Button variant="danger" onClick={() => deleteFromCart(item.id)}>
                    Eliminar
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="total" colSpan="4">
              <div className="d-flex justify-content-between mx-4 ">
                <h3>Total:</h3>
                <h3 className=""> {formatToChileanPesos(calculateTotal())}</h3>
              </div>
            </td>
          </tr>
        </tfoot>
      </Table>
      <Link className="back" to="/">
        Volver &lt;-
      </Link>
    </div>
  );
}

export default Carrito;
