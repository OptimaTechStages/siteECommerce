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

export default function Navigation() {

    return (
        <div className="header-main_area header-main_area-2">
            <div className="header-bottom_area-2">
                <div className="container-fliud">
                    <center>
                        <div className="row col-lg-8">
                            <div className="col-lg-12 d-none d-lg-block position-static">
                                <div className="main-menu_area">
                                    <nav>
                                        <ul>
                                            <li className="dropdown-holder"><a href="/home">Home</a>
                                            </li>
                                            <li className="megamenu-holder"><a href="/liste">Vetements</a>
                                                <ul className="hm-megamenu">
                                                    <li><span className="megamenu-title">Femme</span>
                                                        <ul>
                                                            <li><a href="shop-3-column.html">Robe</a></li>
                                                            <li><a href="shop-left-sidebar.html">Pantalons</a></li>
                                                            <li><a href="shop-right-sidebar.html">Chemise</a></li>
                                                            <li><a href="shop-list-fullwidth.html">List Fullwidth</a></li>
                                                            <li><a href="shop-list-left-sidebar.html">List Left Sidebar</a></li>
                                                            <li><a href="shop-list-right-sidebar.html">List Right Sidebar</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><span className="megamenu-title">Homme</span>
                                                        <ul>
                                                            <li><a href="single-product-gallery-left.html">Gallery Left</a></li>
                                                            <li><a href="single-product-gallery-right.html">Gallery Right</a>
                                                            </li>
                                                            <li><a href="single-product-tab-style-left.html">Tab Style Left</a>
                                                            </li>
                                                            <li><a href="single-product-tab-style-right.html">Tab Style
                                                                Right</a>
                                                            </li>
                                                            <li><a href="single-product-sticky-left.html">Sticky Left</a></li>
                                                            <li><a href="single-product-sticky-right.html">Sticky Right</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><span className="megamenu-title">Kids</span>
                                                        <ul>
                                                            <li><a href="single-product.html">Single Product</a></li>
                                                            <li><a href="single-product-sale.html">Single Product Sale</a></li>
                                                            <li><a href="single-product-group.html">Single Product Group</a>
                                                            </li>
                                                            <li><a href="single-product-variable.html">Single Product Variable</a>
                                                            </li>
                                                            <li><a href="single-product-affiliate.html">Single Product
                                                                Affiliate</a>
                                                            </li>
                                                            <li><a href="single-product-slider.html">Single Product Slider</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="/instashop">Insta Shop</a></li>
                                            <li><a href="index.html">Marques</a>
                                                <ul className="hm-dropdown">
                                                    <li><a href="my-account.html">Zara</a></li>
                                                    <li><a href="login-register.html">Oisho</a></li>
                                                    <li><a href="wishlist.html">Berchka</a></li>
                                                    <li><a href="cart.html">Oasis</a></li>
                                                    <li><a href="checkout.html">Lefties</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="about-us.html">About Us</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
        </div >
    );
};

