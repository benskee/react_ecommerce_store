import React, { Component } from 'react'
import CartList from '../components/CartList';
import { Link } from 'react-router-dom';

export default class Cart extends Component {
    render() {
        const shipping = .06;

        let subTotal = 0;
        for (const product of this.props.cart) {
            subTotal += product.price;
        }

        let grandTotal = subTotal + (subTotal * shipping)

        return (
            <div className="container mb-4">
                <div className="row">
                    <div className="col-12">
                        <div className="table-responsive">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col"> </th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Available</th>
                                        <th scope="col" className="text-center">Quantity</th>
                                        <th scope="col" className="text-right">Price</th>
                                        <th> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <CartList cart={this.props.cart} removeItem={this.props.removeItem} addItem={this.props.addItem} />
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Sub-Total</td>
                                        <td className="text-right">${subTotal.toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Shipping</td>
                                        <td className="text-right">${(subTotal * shipping).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><strong>Grand Total</strong></td>
                                        <td className="text-right"><strong>${grandTotal.toFixed(2)}</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col mb-2">
                        <div className="row">
                            <div className="col-sm-12  col-md-6">
                                <Link to="/" className="btn btn-lg btn-block btn-light">Continue Shopping</Link>
                            </div>
                            <div className="col-sm-12 col-md-6 text-right">
                                <button className="btn btn-lg btn-block btn-success text-uppercase">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
