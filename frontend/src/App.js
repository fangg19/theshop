import React from 'react';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import SingleProduct from './containers/SingleProduct';
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';
import Profile from './containers/Profile';
import Cart from './containers/Cart';
import Shipping from './containers/Shipping';
import PaymentMethod from './containers/PaymentMethod';
import PlaceOrder from './containers/PlaceOrder';
import Order from './containers/Order';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserList from './containers/UserList';
import UserEdit from './containers/UserEdit';
import ProductList from './containers/ProductList';
import ProductEdit from './containers/ProductEdit';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={Home} exact />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/admin/userlist" component={UserList} />
          <Route path="/admin/user/:id/edit" component={UserEdit} />
          <Route path="/admin/product/:id/edit" component={ProductEdit} />
          <Route path="/product/:id" component={SingleProduct} />
          <Route path="/admin/productlist" component={ProductList} />
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/payment" component={PaymentMethod} />
          <Route path="/shipping" component={Shipping} />
          <Route path="/placeorder" component={PlaceOrder} />
          <Route path="/order/:id" component={Order} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
