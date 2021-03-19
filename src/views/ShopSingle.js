import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ShopSingle extends Component {
    constructor() {
        super();
        this.state = {
            product: {}
        }
    }

    componentDidMount() {
        axios.get(`https://fakestoreapi.herokuapp.com/products/${this.props.match.params.id}`)
            .then(res => this.setState({ product: res.data }));
    }

    render() {
        const product = this.state.product;
        if (product.image) {
            product.image = product.image.replace("fakestoreapi.com", "fakestoreapi.herokuapp.com")
        };

        return (
            <div className="container-fluid px-sm-1 py-5 mx-auto">
                <div className="row justify-content-center">
                    <div className="d-flex">
                        <div className="card w-25 card-1 p-2 offset-2">
                            <div className="pr-3 row justify-content-end">
                                <div className="fa fa-heart-o like"></div>
                            </div>
                            <div className="product-pic"> <img alt={product.title} className="img-fluid pic1" src={product.image} /> </div>
                            <small className="category">{product.category}</small>
                            <h5 className="product-name">{product.title}</h5>
                            <div className="row px-3 justify-content-between">
                                <p className="price">${product.price ? product.price.toFixed(2) : null}</p>
                                <div className="stars"> <span className="fa fa-star star-active"></span> <span className="fa fa-star star-active"></span> <span className="fa fa-star star-active"></span> <span className="fa fa-star-o"></span> <span className="fa fa-star-o"></span> </div>
                            </div>
                            <div style={{ margin: '5px 0' }}>
                                <button className="add-to-cart btn btn-success btn-block w-100" onClick={() => this.props.addItem(product)}>Add to cart</button>
                            </div>
                        </div>
                        <div className="card w-25 card-1 p-2">
                            <b>Description:</b> {product.description}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
