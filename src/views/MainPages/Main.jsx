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

import MainHeader from "../../components/headers/mainHeader.jsx";
import Footer from "../../components/footers/footer.jsx";

export default function Main() {

    return (
        <div>
            <MainHeader />



            <header className="header-main_area header-main_area-2">
                <div className="offcanvas-minicart_wrapper" id="miniCart">
                    <div className="offcanvas-menu-inner">
                        <a href="#" className="btn-close"><i className="ion-android-close"></i></a>
                        <div className="minicart-content">
                            <div className="minicart-heading">
                                <h4>Shopping Cart</h4>
                            </div>
                            <ul className="minicart-list">
                                <li className="minicart-product">
                                    <a className="product-item_remove" href="javascript:void(0)"><i
                                        className="ion-android-close"></i></a>
                                    <div className="product-item_img">
                                        <img src="assets/images/product/small-size/2-1.jpg" alt="Hiraola's Product Image" />
                                    </div>
                                    <div className="product-item_content">
                                        <a className="product-item_title" href="shop-left-sidebar.html">Pendant, Made of White
                                            Pl...</a>
                                        <span className="product-item_quantity">1 x $120.80</span>
                                    </div>
                                </li>
                                <li className="minicart-product">
                                    <a className="product-item_remove" href="javascript:void(0)"><i
                                        className="ion-android-close"></i></a>
                                    <div className="product-item_img">
                                        <img src="assets/images/product/small-size/2-2.jpg" alt="Hiraola's Product Image" />
                                    </div>
                                    <div className="product-item_content">
                                        <a className="product-item_title" href="shop-left-sidebar.html">Pendant, Made of White
                                            Pl...</a>
                                        <span className="product-item_quantity">1 x $120.80</span>
                                    </div>
                                </li>
                                <li className="minicart-product">
                                    <a className="product-item_remove" href="javascript:void(0)"><i
                                        className="ion-android-close"></i></a>
                                    <div className="product-item_img">
                                        <img src="assets/images/product/small-size/2-3.jpg" alt="Hiraola's Product Image" />
                                    </div>
                                    <div className="product-item_content">
                                        <a className="product-item_title" href="shop-left-sidebar.html">Pendant, Made of White
                                            Pl...</a>
                                        <span className="product-item_quantity">1 x $120.80</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="minicart-item_total">
                            <span>Subtotal</span>
                            <span className="ammount">$360.00</span>
                        </div>
                        <div className="minicart-btn_area">
                            <a href="cart.html" className="hiraola-btn hiraola-btn_dark hiraola-btn_fullwidth">Minicart</a>
                        </div>
                        <div className="minicart-btn_area">
                            <a href="checkout.html" className="hiraola-btn hiraola-btn_dark hiraola-btn_fullwidth">Checkout</a>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu_wrapper" id="mobileMenu">
                    <div className="offcanvas-menu-inner">
                        <div className="container">
                            <a href="#" className="btn-close"><i className="ion-android-close"></i></a>
                            <div className="offcanvas-inner_search">
                                <form action="#" className="hm-searchbox">
                                    <input type="text" placeholder="Search for item..." />
                                    <button className="search_btn" type="submit"><i className="ion-ios-search-strong"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="hiraola-slider_area-2 col-lg-12">
                <div className="main-slider ">
                    <div className="single-slide animation-style-01 bg-4 col-lg-6 posLeft">
                        <div className="container">
                            <div className="slider-content">
                                <div className="hiraola-btn-ps_center slide-btn">
                                    <a className="hiraola-btn" href="/homeFemme">Femme</a>
                                </div>
                            </div>
                            <div className="slider-progress"></div>
                        </div>
                    </div>

                    <div className="single-slide animation-style-01 bg-44 col-lg-6 posRight">
                        <div className="container">
                            <div className="slider-content">
                                <div className="hiraola-btn-ps_center slide-btn">
                                    <a className="hiraola-btn" href="/homeHomme">Homme</a>
                                </div>
                            </div>
                            <div className="slider-progress"></div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    );
};