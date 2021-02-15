import React from 'react';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import SingleProduct from './containers/SingleProduct';
import Home from './containers/Home';
import Cart from './containers/Cart';
import Login from './containers/Login';
import Register from './containers/Register';
import Profile from './containers/Profile';
import Shipping from './containers/Shipping';
import PlaceOrder from './containers/PlaceOrder';
import PaymentMethod from './containers/PaymentMethod';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/product/:id" component={SingleProduct} />
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/payment" component={PaymentMethod} />
          <Route path="/shipping" component={Shipping} />
          <Route path="/placeorder" component={PlaceOrder} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
