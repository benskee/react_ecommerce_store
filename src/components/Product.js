import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Product extends Component {
    render() {
        const product = this.props.product;
        const image = product.image.replace("fakestoreapi.com", "fakestoreapi.herokuapp.com");

        return (
            <div className="col-md-3 col-sm-6">
                <div className="product-grid2">
                    <div className="container mt-3" style={{ height: '300px' }}>
                        <div className="product-image2">
                            <Link to={`store/${product.id}`}>
                                <img alt={product.title} className="img-fluid pic-1" style={{ height: '300px' }} src={image} />
                            </Link>
                        </div>
                    </div>
                    <span className="price"><b>${product.price ? product.price.toFixed(2) : null}</b></span>
                    <div style={{ margin: '5px 0' }}>
                        <button className="add-to-cart btn btn-success btn-block w-100" onClick={() => this.props.addItem(product)}>Add to cart</button>
                    </div>
                    <div className="product-content">
                        <h5 className="title" style={{ textAlign: 'center' }}><Link to={`store/${product.id}`}>{product.title}</Link></h5>
                    </div>
                </div>
            </div>
        )
    }
}
