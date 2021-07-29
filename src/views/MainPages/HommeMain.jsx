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

export default function HommeMain() {

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

                    <div className="single-slide animation-style-01 bghomme">
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
                                                    src="https://shopa.tn/wp-content/uploads/2020/09/106603852_1211363365863850_2146775378560347022_n.jpg"
                                                    alt="Hiraola's Product Image" />
                                                <img className="secondary-img" style={{ width: "500px", height: "300px", margin: "5px" }}
                                                    src="https://blog.bmykey.com/wp-content/uploads/2021/04/dstil-homme-chemise-slim-manches-longues-pour-le-bureau-repassage-facile-500x470.jpg"
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
                                                    src="https://ae01.alicdn.com/kf/H158615ce7e24490ea4380605e90d2c3eY/Chemise-homme-2021-Printemps-t-Nouvelle-Impression-D-contract-R-tro-Floral-Manches-Longues-Chemise-Jeunesse.jpg_q50.jpg" />
                                                <img className="secondary-img" style={{ width: "500px", height: "300px", margin: "5px" }}
                                                    src="https://ae01.alicdn.com/kf/HTB1HSeLSpXXXXXpapXXq6xXFXXXJ/Chemises-pour-hommes-coupe-cintr-e-motif-imprim-floral-en-coton-de-haute-qualit-la.jpg_Q90.jpg_.webp" alt="Hiraola's Product Image" />
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
                                                    src="https://www.mario-milano.com/photos/1000/dsc-0153-jpg-8652.jpg" alt="Hiraola's Product Image" />
                                                <img className="secondary-img" style={{ width: "500px", height: "300px", margin: "5px" }}
                                                    src="https://cdn.shopify.com/s/files/1/0262/6486/2804/products/WhatsApp_Image_2020-01-28_at_19.52.22_7_1024x.jpg?v=1610981438" alt="Hiraola's Product Image" />
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
                                                    src="https://www.jules.com/dw/image/v2/AAHK_PRD/on/demandware.static/-/Sites-core-master-catalog/default/dwecfd7e2a/images/724888_9020_V1.jpg?sw=400&sh=600&sm=cut" alt="Hiraola's Product Image" />
                                                <img className="secondary-img" style={{ width: "500px", height: "300px", margin: "5px" }}
                                                    src="https://cdn.def-shop.com/original/brandit-skjorta-svart-779973.jpg" alt="Hiraola's Product Image" />
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
                                                <img className="primary-img"
                                                    src="https://i.pinimg.com/236x/9d/4f/b7/9d4fb77efc049c0e6f2f2f30263dce6c.jpg"
                                                    style={{ width: "500px", height: "300px", margin: "5px" }}
                                                    alt="Hiraola's Product Image"></img>
                                                <img className="secondary-img"
                                                    style={{ width: "500px", height: "300px", margin: "5px" }}
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Y50gz1l0zKB4t_AMxz4sDgo__0eBYRupDnztjM13hrMYVYTv3UEdphVGpRjJZiz4UGw&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
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