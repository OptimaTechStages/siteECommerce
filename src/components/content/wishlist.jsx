import React from 'react';

import "../../assets/css/vendor/bootstrap.min.css";
import "../../assets/css/vendor/font-awesome.css";
import "../../assets/css/vendor/fontawesome-stars.css";
import "../../assets/css/vendor/ion-fonts.css";
import "../../assets/css/plugins/slick.css";
import "../../assets/css/plugins/animate.css";
import "../../assets/css/plugins/jquery-ui.min.css";
import "../../assets/css/plugins/lightgallery.min.css";
import "../../assets/css/plugins/nice-select.css";

import "../../assets/css/style.css";

export default function Wishlist() {

    return (
        <div className="hiraola-wishlist_area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form action="#">
                            <div className="table-content table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="hiraola-product_remove">remove</th>
                                            <th className="hiraola-product-thumbnail">images</th>
                                            <th className="cart-product-name">Product</th>
                                            <th className="hiraola-product-price">Unit Price</th>
                                            <th className="hiraola-product-stock-status">Stock Status</th>
                                            <th className="hiraola-cart_btn">add to cart</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="hiraola-product_remove"><a href="#"><i className="fa fa-trash"
                                                title="Remove"></i></a></td>
                                            <td className="hiraola-product-thumbnail"><a href="#">
                                                <img src="assets/images/product/small-size/2-1.jpg"
                                                    alt="Hiraola's Wishlist Thumbnail" /></a>
                                            </td>
                                            <td className="hiraola-product-name"><a href="#">Juma rema pola</a></td>
                                            <td className="hiraola-product-price"><span className="amount">£23.39</span></td>
                                            <td className="hiraola-product-stock-status"><span className="in-stock">in stock</span></td>
                                            <td className="hiraola-cart_btn"><a href="#">add to cart</a></td>
                                        </tr>
                                        <tr>
                                            <td className="hiraola-product_remove"><a href="#"><i className="fa fa-trash"
                                                title="Remove"></i></a></td>
                                            <td className="hiraola-product-thumbnail"><a href="#">
                                                <img src="assets/images/product/small-size/2-2.jpg"
                                                    alt="Hiraola's Wishlist Thumbnail" /></a>
                                            </td>
                                            <td className="hiraola-product-name"><a href="#">Suretin mipen ruma</a></td>
                                            <td className="hiraola-product-price"><span className="amount">£30.50</span></td>
                                            <td className="hiraola-product-stock-status"><span className="in-stock">in stock</span></td>
                                            <td className="hiraola-cart_btn"><a href="#">add to cart</a></td>
                                        </tr>
                                        <tr>
                                            <td className="hiraola-product_remove"><a href="#"><i className="fa fa-trash"
                                                title="Remove"></i></a></td>
                                            <td className="hiraola-product-thumbnail"><a href="#">
                                                <img src="assets/images/product/small-size/2-3.jpg"
                                                    alt="Hiraola's Wishlist Thumbnail" /></a>
                                            </td>
                                            <td className="hiraola-product-name"><a href="#">Bag Goodscol model</a></td>
                                            <td className="hiraola-product-price"><span className="amount">£40.19</span></td>
                                            <td className="hiraola-product-stock-status"><span className="out-stock">out stock</span></td>
                                            <td className="hiraola-cart_btn"><a href="#">add to cart</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


