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
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/login" component={Login} />
          <Route path="/shipping" component={Shipping} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/product/:id" component={SingleProduct} />
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/" component={Home} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
