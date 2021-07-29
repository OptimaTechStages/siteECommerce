
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

export default function Details() {

    return (
        <div className="hiraola-cart-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form action="#">
                            <div className="table-content table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="hiraola-product-remove">remove</th>
                                            <th className="hiraola-product-thumbnail">images</th>
                                            <th className="cart-product-name">Product</th>
                                            <th className="hiraola-product-price">Unit Price</th>
                                            <th className="hiraola-product-quantity">Quantity</th>
                                            <th className="hiraola-product-subtotal">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="hiraola-product-remove"><a href="#"><i className="fa fa-trash"
                                                title="Remove"></i></a></td>
                                            <td className="hiraola-product-thumbnail"><a href="#"><img src="assets/images/product/small-size/2-1.jpg" alt="Hiraola's Cart Thumbnail" /></a></td>
                                            <td className="hiraola-product-name"><a href="#">Juma rema pola</a></td>
                                            <td className="hiraola-product-price"><span className="amount">$46.80</span></td>
                                            <td className="quantity">
                                                <label>Quantity</label>
                                                <div className="cart-plus-minus">
                                                    <input className="cart-plus-minus-box" value="1" type="text" />
                                                    <div className="dec qtybutton"><i className="fa fa-angle-down"></i></div>
                                                    <div className="inc qtybutton"><i className="fa fa-angle-up"></i></div>
                                                </div>
                                            </td>
                                            <td className="product-subtotal"><span className="amount">$46.80</span></td>
                                        </tr>
                                        <tr>
                                            <td className="hiraola-product-remove"><a href="#"><i className="fa fa-trash"
                                                title="Remove"></i></a></td>
                                            <td className="hiraola-product-thumbnail"><a href="#"><img src="assets/images/product/small-size/2-2.jpg" alt="Hiraola's Cart Thumbnail" /></a></td>
                                            <td className="hiraola-product-name"><a href="#">Bag Goodscol model</a></td>
                                            <td className="hiraola-product-price"><span className="amount">$71.80</span></td>
                                            <td className="quantity">
                                                <label>Quantity</label>
                                                <div className="cart-plus-minus">
                                                    <input className="cart-plus-minus-box" value="1" type="text" />
                                                    <div className="dec qtybutton"><i className="fa fa-angle-down"></i></div>
                                                    <div className="inc qtybutton"><i className="fa fa-angle-up"></i></div>
                                                </div>
                                            </td>
                                            <td className="product-subtotal"><span className="amount">$71.80</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="coupon-all">
                                        <div className="coupon">
                                            <input id="coupon_code" className="input-text" name="coupon_code" value="" placeholder="Coupon code" type="text" />
                                            <input className="button" name="apply_coupon" value="Apply coupon" type="submit" />
                                        </div>
                                        <div className="coupon2">
                                            <input className="button" name="update_cart" value="Update cart" type="submit" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5 ml-auto">
                                    <div className="cart-page-total">
                                        <h2>Cart totals</h2>
                                        <ul>
                                            <li>Subtotal <span>$118.60</span></li>
                                            <li>Total <span>$118.60</span></li>
                                        </ul>
                                        <a href="#">Proceed to checkout</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

