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

export default function FemmeMain() {

    return (
        <div>

            <MainHeader />

            <header className="header-main_area header-main_area-2">

                <div className="offcanvas-search_wrapper" id="searchBar">
                    <div className="offcanvas-menu-inner">
                        <div className="container">
                            <a href="#" className="btn-close"><i className="ion-android-close"></i></a>

                            <div className="offcanvas-search">
                                <form action="#" className="hm-searchbox">
                                    <input type="text" placeholder="Search for item..." />
                                    <button className="search_btn" type="submit"><i className="ion-ios-search-strong"></i></button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="offcanvas-minicart_wrapper" id="miniCart">
                    <div className="offcanvas-menu-inner">
                        <a href="#" className="btn-close"><i className="ion-android-close"></i></a>
                        <div className="minicart-content">
                            <div className="minicart-heading">
                                <h4>Shopping Cart</h4>
                            </div>
                            <ul className="minicart-list">
                                <li className="minicart-product">
                                    <a className="product-item_remove" href="#"><i
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
                                    <a className="product-item_remove" href="#"><i
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
                                    <a className="product-item_remove" href="#"><i
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
            <div className="hiraola-slider_area-2">
                <div className="main-slider">

                    <div className="single-slide animation-style-01 bgfemme">
                        <div className="container">
                            <div className="slider-content">
                                <h5><span>Black Friday</span> This Week</h5>
                                <h2>Work Desk</h2>
                                <h3>Surface Studio 2019</h3>
                                <h4>Starting at <span>£1599.00</span></h4>
                                <div className="hiraola-btn-ps_center slide-btn">
                                    <a className="hiraola-btn" href="shop-left-sidebar.html">Shopping Now</a>
                                </div>
                            </div>
                            <div className="slider-progress"></div>
                        </div>
                    </div>

                </div>
            </div>
            {/* *********************************************************************************************************** */}
            <div className="hiraola-product_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="hiraola-section_title">
                                <h4>New Arrival</h4>
                            </div>
                        </div>
                        <div className="col-lg-12 ">
                            <div className="hiraola-product_slider d-flex p-2 ">

                                <div className="slide-item">
                                    <div className="single_product">
                                        <div className="product-img">
                                            <a href="/article">
                                                <img className="primary-img" style={{ width: "500px", height: "300px", margin: "5px" }}
                                                    src="https://i.pinimg.com/originals/00/e1/f2/00e1f2d6346740d98e74383533d16dfe.jpg"
                                                    alt="Hiraola's Product Image" />
                                                <img className="secondary-img" style={{ width: "500px", height: "300px", margin: "5px" }}
                                                    src="https://i.pinimg.com/originals/30/74/95/3074954a5fae3b4a94ae7ef1e6e2fb1c.jpg"
                                                    alt="Hiraola's Product Image" />
                                            </a>
                                            <span className="sticker">New</span>
                                            <div className="add-actions">
                                                <ul>
                                                    <li><a className="hiraola-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></a></li>
                                                    <li><a className="hiraola-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i className="ion-ios-shuffle-strong"></i></a></li>
                                                    <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i className="ion-eye"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="hiraola-product_content">
                                            <div className="product-desc_info">
                                                <h6><a className="product-name" href="/article">Pendant, Made of White Pl...</a></h6>
                                                <div className="price-box">
                                                    <span className="new-price">£120.80</span>
                                                </div>
                                                <div className="additional-add_action">
                                                    <ul>
                                                        <li><a className="hiraola-add_compare" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i className="ion-android-favorite-outline"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="rating-box">
                                                    <ul>
                                                        <li><i className="fa fa-star-of-david"></i></li>
                                                        <li><i className="fa fa-star-of-david"></i></li>
                                                        <li><i className="fa fa-star-of-david"></i></li>
                                                        <li><i className="fa fa-star-of-david"></i></li>
                                                        <li className="silver-color"><i className="fa fa-star-of-david"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="slide-item">
                                    <div className="single_product">
                                        <div className="product-img">
                                            <a href="/article">
                                                <img className="primary-img" style={{ width: "500px", height: "300px", margin: "5px" }}
                                                    src="https://i.pinimg.com/736x/c5/79/2d/c5792de1a3a3c0fe7f3cd9807e837c41.jpg" alt="Hiraola's Product Image" />
                                                <img className="secondary-img" style={{ width: "500px", height: "300px", margin: "5px" }}
                                                    src="https://i.pinimg.com/564x/38/1c/10/381c10a9878a10e4a3808f86b9cfdbdc.jpg" alt="Hiraola's Product Image" />
                                            </a>
                                            <span className="sticker">New</span>
                                            <div className="add-actions">
                                                <ul>
                                                    <li><a className="hiraola-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></a></li>
                                                    <li><a className="hiraola-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i className="ion-ios-shuffle-strong"></i></a></li>
                                                    <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i className="ion-eye"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="hiraola-product_content">
                                            <div className="product-desc_info">
                                                <h6><a className="product-name" href="/article">Swirl 1 Medium Pendant La...</a></h6>
                                                <div className="price-box">
                                                    <span className="new-price">£120.80</span>
                                                </div>
                                                <div className="additional-add_action">
                                                    <ul>
                                                        <li><a className="hiraola-add_compare" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i className="ion-android-favorite-outline"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="rating-box">
                                                    <ul>
                                                        <li><i className="fa fa-star-of-david"></i></li>
                                                        <li><i className="fa fa-star-of-david"></i></li>
                                                        <li><i className="fa fa-star-of-david"></i></li>
                                                        <li className="silver-color"><i className="fa fa-star-of-david"></i></li>
                                                        <li className="silver-color"><i className="fa fa-star-of-david"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="slide-item">
                                    <div className="single_product">
                                        <div className="product-img">
                                            <a href="/article">
                                                <img className="primary-img" style={{ width: "500px", height: "300px", margin: "5px" }}
                                                    src="https://www.grossiste-en-ligne.com/52020-large_default/jolie-veste-blazer-en-suedine-beige-avec-col-revers-mode-femme-fashion.jpg" alt="Hiraola's Product Image" />
                                                <img className="secondary-img" style={{ width: "500px", height: "300px", margin: "5px" }}
                                                    src="https://www.grossiste-en-ligne.com/69034-large_default/camel-blazer-jacket-in-suede-with-lapel-collar.jpg" alt="Hiraola's Product Image" />
                                            </a>
                                            <span className="sticker-2">Sale</span>
                                            <div className="add-actions">
                                                <ul>
                                                    <li><a className="hiraola-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></a></li>
                                                    <li><a className="hiraola-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i className="ion-ios-shuffle-strong"></i></a></li>
                                                    <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i className="ion-eye"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="hiraola-product_content">
                                            <div className="product-desc_info">
                                                <h6><a className="product-name" href="/article">Work Lamp Silver Proin he...</a></h6>
                                                <div className="price-box">
                                                    <span className="new-price">£135.20</span>
                                                </div>
                                                <div className="additional-add_action">
                                                    <ul>
                                                        <li><a className="hiraola-add_compare" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i className="ion-android-favorite-outline"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="rating-box">
                                                    <ul>
                                                        <li><i className="fa fa-star-of-david"></i></li>
                                                        <li><i className="fa fa-star-of-david"></i></li>
                                                        <li className="silver-color"><i className="fa fa-star-of-david"></i></li>
                                                        <li className="silver-color"><i className="fa fa-star-of-david"></i></li>
                                                        <li className="silver-color"><i className="fa fa-star-of-david"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="slide-item">
                                    <div className="single_product">
                                        <div className="product-img">
                                            <a href="/article">
                                                <img className="primary-img" style={{ width: "500px", height: "300px", margin: "5px" }}
                                                    src="https://s8.favim.com/orig/141229/fashion-femme-fille-hippie-Favim.com-2344388.jpg" alt="Hiraola's Product Image" />
                                                <img className="secondary-img" style={{ width: "500px", height: "300px", margin: "5px" }}
                                                    src="https://cdn.pixabay.com/photo/2017/04/04/10/37/girl-2200984_1280.jpg" alt="Hiraola's Product Image" />
                                            </a>
                                            <span className="sticker">New</span>
                                            <div className="add-actions">
                                                <ul>
                                                    <li><a className="hiraola-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></a></li>
                                                    <li><a className="hiraola-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i className="ion-ios-shuffle-strong"></i></a></li>
                                                    <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i className="ion-eye"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="hiraola-product_content">
                                            <div className="product-desc_info">
                                                <h6><a className="product-name" href="/article">Work Lamp Silver Proin he...</a></h6>
                                                <div className="price-box">
                                                    <span className="new-price">£135.20</span>
                                                </div>
                                                <div className="additional-add_action">
                                                    <ul>
                                                        <li><a className="hiraola-add_compare" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i className="ion-android-favorite-outline"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="rating-box">
                                                    <ul>
                                                        <li><i className="fa fa-star-of-david"></i></li>
                                                        <li><i className="fa fa-star-of-david"></i></li>
                                                        <li><i className="fa fa-star-of-david"></i></li>
                                                        <li><i className="fa fa-star-of-david"></i></li>
                                                        <li><i className="fa fa-star-of-david"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="slide-item">
                                    <div className="single_product">
                                        <div className="product-img">
                                            <a href="/article">
                                                <img className="primary-img" src="https://i.pinimg.com/originals/51/86/08/518608121619de431973f4720e43aa53.jpg"
                                                    style={{ width: "500px", height: "300px", margin: "5px" }}
                                                    alt="Hiraola's Product Image"></img>
                                                <img className="secondary-img"
                                                    style={{ width: "500px", height: "300px", margin: "5px" }}
                                                    src="https://i.pinimg.com/236x/ce/59/50/ce59501cd1eb4b178bab9b68f9994420.jpg" alt="Hiraola's Product Image" />
                                            </a>
                                            <span className="sticker-2">Sale</span>
                                            <div className="add-actions">
                                                <ul>
                                                    <li><a className="hiraola-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="ion-bag"></i></a></li>
                                                    <li><a className="hiraola-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i className="ion-ios-shuffle-strong"></i></a></li>
                                                    <li className="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i className="ion-eye"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="hiraola-product_content">
                                            <div className="product-desc_info">
                                                <h6><a className="product-name" href="/article">Vitra Sunburst Clock pret...</a></h6>
                                                <div className="price-box">
                                                    <span className="new-price">£1199.60</span>
                                                </div>
                                                <div className="additional-add_action">
                                                    <ul>
                                                        <li><a className="hiraola-add_compare" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i className="ion-android-favorite-outline"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="rating-box">
                                                    <ul>
                                                        <li><i className="fa fa-star-of-david"></i></li>
                                                        <li><i className="fa fa-star-of-david"></i></li>
                                                        <li><i className="fa fa-star-of-david"></i></li>
                                                        <li><i className="fa fa-star-of-david"></i></li>
                                                        <li className="silver-color"><i className="fa fa-star-of-david"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
         
        </div>

    );
};