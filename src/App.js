import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import AddProduct from "./componentes/AddProduct";
import Footer from "./componentes/Footer";
import Headers from "./componentes/Headers";
import Home from "./componentes/Home";
import Products from "./componentes/Products";
import Signin from "./componentes/Signin";
import { store } from "./redux/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <div className="grid-container">
          <header>
            <Headers />
          </header>
          <main>
            <Switch>
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/" component={Home} />
              <Route exact path="/addProduct" component={AddProduct}/>
              <Route exact path="/products" component={Products}/>
            </Switch>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Provider>
    </>
  );
};

export default App;
