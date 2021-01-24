import React from 'react';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import SingleProduct from './containers/SingleProduct';
import Home from './containers/Home';
import Cart from './containers/Cart';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={Home} exact />
          <Route path="/product/:id" component={SingleProduct} />
          <Route path="/cart/:id?" component={Cart} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
