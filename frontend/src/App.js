import React from 'react';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import SingleProduct from './containers/SingleProduct';
import { Container } from 'react-bootstrap';
import Home from './containers/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={Home} exact />
          <Route path="/product/:id" component={SingleProduct} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
