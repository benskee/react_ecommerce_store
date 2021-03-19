import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
        const product = this.props.item;
        if (product.image) {
            product.image = product.image.replace("fakestoreapi.com", "fakestoreapi.herokuapp.com")
        };

        return (
            <tr>
                <td><img alt={product.title} src={product.image} className="img-fluid" style={{ maxWidth: '50px' }} /> </td>
                <td>{product.title}</td>
                <td>In stock</td>
                <td style={{ textAlign: 'center' }}>{this.props.numInCart}</td>
                <td className="text-right">${product.price.toFixed(2)}</td>
                <td className="text-right">
                    <button className="btn btn-sm btn-danger" onClick={(e) => this.props.removeItem(product)}>
                        <i className="fa fa-minus"></i>
                    </button>
                    <button className="btn btn-sm btn-success" onClick={(e) => this.props.addItem(product)}>
                        <i className="fa fa-plus"></i>
                    </button>
                </td>
            </tr>
        )
    }
}
