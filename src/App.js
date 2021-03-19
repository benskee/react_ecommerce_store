import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Header from './components/Header';
import Cart from './views/Cart';
import ShopSingle from './views/ShopSingle';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    }
  }

  addItem = item => {
    this.setState({
      cart: this.state.cart.concat(item)
    })
  }

  removeItem = (item) => {
    let cart = [...this.state.cart];

    let index = cart.indexOf(item);

    if (index !== -1) {
      cart.splice(index, 1);

      this.setState({
        cart: cart
      })
    }
  }

  render() {
    return (
      <div>
        <header>
          <Header cart={this.state.cart}/>
        </header>
        <main className="container">
          <Switch>
            <Route exact path="/" render={() => <Home cart={this.state.cart} addItem={this.addItem}/>} />
            <Route exact path='/store/:id' render={({ match }) => <ShopSingle match={match} cart={this.state.cart} addItem={this.addItem} />} />
            <Route exact path='/cart' render={() => <Cart cart={this.state.cart} addItem={this.addItem} removeItem={this.removeItem} />} />
          </Switch>
        </main>
      </div>
    );
  }
}