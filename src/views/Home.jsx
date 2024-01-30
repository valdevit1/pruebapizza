import CardContainer from "../components/CardContainer";

const Home = () => {
  return (
    <div>
      <div className="header">
        <div className="img-text">
          <h1>¡Pizzería Mamma Mia!</h1>
          <h3>¡Tenemos las mejores pizzas que podras encontrar!</h3>
          <hr />
        </div>
        <img className="header-img" src="/backgroundpizza.jpg" alt="background image pizza" />
      </div>
      <div className="d-flex justify-content-center card-container-container">
        <CardContainer />
      </div>
    </div>
  );
};

export default Home;
