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
        <div class="hiraola-content_wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 order-2 order-lg-1">
                        <div class="hiraola-sidebar-catagories_area">
                            <div class="hiraola-sidebar_categories">
                                <div class="hiraola-categories_title">
                                    <h5>Price</h5>
                                </div>
                                <div class="price-filter">
                                    <div id="slider-range"></div>
                                    <div class="price-slider-amount">
                                        <div class="label-input">
                                            <label>price : </label>
                                            <input type="text" id="amount" name="price" placeholder="Add Your Price" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="hiraola-sidebar_categories">
                                <div class="hiraola-categories_title">
                                    <h5>Brand</h5>
                                </div>
                                <ul class="sidebar-checkbox_list">
                                    <li>
                                        <a href="#">Brand 1(15)</a>
                                    </li>
                                    <li>
                                        <a href="#">Brand 2(16)</a>
                                    </li>
                                    <li>
                                        <a href="#">Brand 3(16)</a>
                                    </li>
                                    <li>
                                        <a href="#">Brand 4(17)</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="hiraola-sidebar_categories">
                                <div class="hiraola-categories_title">
                                    <h5>Size</h5>
                                </div>
                                <ul class="sidebar-checkbox_list">
                                    <li>
                                        <a href="#">Size 1(17)</a>
                                    </li>
                                    <li>
                                        <a href="#">Size 2(16)</a>
                                    </li>
                                    <li>
                                        <a href="#">Size 3(17)</a>
                                    </li>
                                    <li>
                                        <a href="#">Size 4(17)</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="hiraola-sidebar_categories">
                                <div class="hiraola-categories_title">
                                    <h5>Weight</h5>
                                </div>
                                <ul class="sidebar-checkbox_list">
                                    <li>
                                        <a href="#">Weight 1(16)</a>
                                    </li>
                                    <li>
                                        <a href="#">Weight 2(17)</a>
                                    </li>
                                    <li>
                                        <a href="#">Weight 3(17)</a>
                                    </li>
                                    <li>
                                        <a href="#">Weight 4(17)</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="category-module hiraola-sidebar_categories">
                                <div class="category-module_heading">
                                    <h5>Categories</h5>
                                </div>
                                <div class="module-body">
                                    <ul class="module-list_item">
                                        <li>
                                            <a href="#">Hand Harness (18)</a>
                                            <ul class="module-sub-list_item">
                                                <li>
                                                    <a href="#">Maang Tika (18)</a>
                                                    <a href="#">Toe Rings (18)</a>
                                                    <a href="#">Traditional Earrings (18)</a>
                                                    <a href="#">Kada Cum Bracelet (18)</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Exquisite Rings (18)</a>
                                            <a href="#">Necklaces (18)</a>
                                            <a href="#">Foot Harness (18)</a>
                                            <a href="#">Braid Jewels (18)</a>
                                            <a href="#">Anklet (18)</a>
                                            <a href="#">Graceful Armlet (18)</a>
                                            <a href="#">Magna Pellentesq (18)</a>
                                            <a href="#">Molestie Tortor (18)</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9 order-1 order-lg-2">
                        <div class="shop-toolbar">
                            <div class="product-view-mode">
                                <a class="active grid-3" data-target="gridview-3" data-toggle="tooltip" data-placement="top" title="Grid View"><i class="fa fa-th"></i></a>
                                <a class="list" data-target="listview" data-toggle="tooltip" data-placement="top" title="List View"><i class="fa fa-th-list"></i></a>
                            </div>
                            <div class="product-item-selection_area">
                                <div class="product-short">
                                    <label class="select-label">Short By:</label>
                                    <select class="nice-select">
                                        <option value="1">Relevance</option>
                                        <option value="2">Name, A to Z</option>
                                        <option value="3">Name, Z to A</option>
                                        <option value="4">Price, low to high</option>
                                        <option value="5">Price, high to low</option>
                                        <option value="5">Rating (Highest)</option>
                                        <option value="5">Rating (Lowest)</option>
                                        <option value="5">Model (A - Z)</option>
                                        <option value="5">Model (Z - A)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="shop-product-wrap grid gridview-3 row">
                            <div class="col-lg-4">
                                <div class="slide-item">
                                    <div class="single_product">
                                        <div class="product-img">
                                            <a href="/article">
                                                <img class="primary-img"
                                                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU" 
                                                 alt="Hiraola's Product Image" />
                                                <img class="secondary-img" 
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU" 
                                                alt="Hiraola's Product Image" />
                                            </a>
                                            <div class="add-actions">
                                                <ul>
                                                    <li><a class="hiraola-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i class="ion-bag"></i></a>
                                                    </li>
                                                    <li><a class="hiraola-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                        class="ion-ios-shuffle-strong"></i></a>
                                                    </li>
                                                    <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                        class="ion-eye"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="hiraola-product_content">
                                            <div class="product-desc_info">
                                                <h6><a class="product-name" href="single-product.html">Flash Furniture
                                                    Alonza Se...</a></h6>
                                                <div class="price-box">
                                                    <span class="new-price">£90.36</span>
                                                </div>
                                                <div class="additional-add_action">
                                                    <ul>
                                                        <li><a class="hiraola-add_compare" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                            class="ion-android-favorite-outline"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="rating-box">
                                                    <ul>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li class="silver-color"><i class="fa fa-star-of-david"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-slide_item">
                                    <div class="single_product">
                                        <div class="product-img">
                                            <a href="single-product.html">
                                                <img class="primary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                                <img class="secondary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                            </a>
                                        </div>
                                        <div class="hiraola-product_content">
                                            <div class="product-desc_info">
                                                <h6><a class="product-name" href="single-product.html">Flash Furniture
                                                    Alonza Se...</a></h6>
                                                <div class="rating-box">
                                                    <ul>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li class="silver-color"><i class="fa fa-star-of-david"></i></li>
                                                    </ul>
                                                </div>
                                                <div class="price-box">
                                                    <span class="new-price">£90.36</span>
                                                </div>
                                                <div class="product-short_desc">
                                                    <p>The effects of gold are subtle, but definitely apparent. ... It was considered that gold possessed an energy that brought warm, soothing vibrations to the body to aid healing, for when the body relaxes and the blood vessels in the cells aren't as constricted, blood can move through the tissue spaces more easily.</p>
                                                </div>
                                            </div>
                                            <div class="add-actions">
                                                <ul>
                                                    <li><a class="hiraola-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart">Add To Cart</a></li>
                                                    <li><a class="hiraola-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                        class="ion-ios-shuffle-strong"></i></a></li>
                                                    <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                        class="ion-eye"></i></a></li>
                                                    <li><a class="hiraola-add_compare" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                        class="ion-android-favorite-outline"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="slide-item">
                                    <div class="single_product">
                                        <div class="product-img">
                                            <a href="single-product.html">
                                                <img class="primary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                                <img class="secondary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                            </a>
                                            <span class="sticker-2">Sale</span>
                                            <div class="add-actions">
                                                <ul>
                                                    <li><a class="hiraola-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i class="ion-bag"></i></a>
                                                    </li>
                                                    <li><a class="hiraola-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                        class="ion-ios-shuffle-strong"></i></a>
                                                    </li>
                                                    <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                        class="ion-eye"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="hiraola-product_content">
                                            <div class="product-desc_info">
                                                <h6><a class="product-name" href="single-product.html">Global Knives:
                                                    Profession...</a></h6>
                                                <div class="price-box">
                                                    <span class="new-price">£60.25</span>
                                                </div>
                                                <div class="additional-add_action">
                                                    <ul>
                                                        <li><a class="hiraola-add_compare" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                            class="ion-android-favorite-outline"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="rating-box">
                                                    <ul>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li class="silver-color"><i class="fa fa-star-of-david"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-slide_item">
                                    <div class="single_product">
                                        <div class="product-img">
                                            <a href="single-product.html">
                                                <img class="primary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                                <img class="secondary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                            </a>
                                        </div>
                                        <div class="hiraola-product_content">
                                            <div class="product-desc_info">
                                                <h6><a class="product-name" href="single-product.html">Global Knives:
                                                    Profession...</a></h6>
                                                <div class="rating-box">
                                                    <ul>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li class="silver-color"><i class="fa fa-star-of-david"></i></li>
                                                    </ul>
                                                </div>
                                                <div class="price-box">
                                                    <span class="new-price">£60.25</span>
                                                </div>
                                                <div class="product-short_desc">
                                                    <p>The effects of gold are subtle, but definitely apparent. ... It was considered that gold possessed an energy that brought warm, soothing vibrations to the body to aid healing, for when the body relaxes and the blood vessels in the cells aren't as constricted, blood can move through the tissue spaces more easily.</p>
                                                </div>
                                            </div>
                                            <div class="add-actions">
                                                <ul>
                                                    <li><a class="hiraola-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart">Add To Cart</a></li>
                                                    <li><a class="hiraola-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                        class="ion-ios-shuffle-strong"></i></a></li>
                                                    <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                        class="ion-eye"></i></a></li>
                                                    <li><a class="hiraola-add_compare" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                        class="ion-android-favorite-outline"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="slide-item">
                                    <div class="single_product">
                                        <div class="product-img">
                                            <a href="single-product.html">
                                                <img class="primary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                                <img class="secondary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                            </a>
                                            <div class="add-actions">
                                                <ul>
                                                    <li><a class="hiraola-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i class="ion-bag"></i></a>
                                                    </li>
                                                    <li><a class="hiraola-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                        class="ion-ios-shuffle-strong"></i></a>
                                                    </li>
                                                    <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                        class="ion-eye"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="hiraola-product_content">
                                            <div class="product-desc_info">
                                                <h6><a class="product-name" href="single-product.html">Flash Furniture
                                                    Alonza Se...</a></h6>
                                                <div class="price-box">
                                                    <span class="new-price">£76.44</span>
                                                </div>
                                                <div class="additional-add_action">
                                                    <ul>
                                                        <li><a class="hiraola-add_compare" href="/wishlist" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                            class="ion-android-favorite-outline"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="rating-box">
                                                    <ul>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-slide_item">
                                    <div class="single_product">
                                        <div class="product-img">
                                            <a href="single-product.html">
                                                <img class="primary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                                <img class="secondary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                            </a>
                                        </div>
                                        <div class="hiraola-product_content">
                                            <div class="product-desc_info">
                                                <h6><a class="product-name" href="single-product.html">Ipoly and Bark Eames
                                                    Style...</a></h6>
                                                <div class="rating-box">
                                                    <ul>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li class="silver-color"><i class="fa fa-star-of-david"></i></li>
                                                    </ul>
                                                </div>
                                                <div class="price-box">
                                                    <span class="new-price">£90.36</span>
                                                </div>
                                                <div class="product-short_desc">
                                                    <p>The effects of gold are subtle, but definitely apparent. ... It was considered that gold possessed an energy that brought warm, soothing vibrations to the body to aid healing, for when the body relaxes and the blood vessels in the cells aren't as constricted, blood can move through the tissue spaces more easily.</p>
                                                </div>
                                            </div>
                                            <div class="add-actions">
                                                <ul>
                                                    <li><a class="hiraola-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart">Add To Cart</a></li>
                                                    <li><a class="hiraola-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                        class="ion-ios-shuffle-strong"></i></a></li>
                                                    <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                        class="ion-eye"></i></a></li>
                                                    <li><a class="hiraola-add_compare" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                        class="ion-android-favorite-outline"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="slide-item">
                                    <div class="single_product">
                                        <div class="product-img">
                                            <a href="single-product.html">
                                                <img class="primary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                                <img class="secondary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                            </a>
                                            <span class="sticker-2">Sale</span>
                                            <div class="add-actions">
                                                <ul>
                                                    <li><a class="hiraola-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i class="ion-bag"></i></a>
                                                    </li>
                                                    <li><a class="hiraola-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                        class="ion-ios-shuffle-strong"></i></a>
                                                    </li>
                                                    <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                        class="ion-eye"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="hiraola-product_content">
                                            <div class="product-desc_info">
                                                <h6><a class="product-name" href="single-product.html">Work Lamp Silver
                                                    Proin
                                                    he...</a></h6>
                                                <div class="price-box">
                                                    <span class="new-price">£35.20</span>
                                                </div>
                                                <div class="additional-add_action">
                                                    <ul>
                                                        <li><a class="hiraola-add_compare" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                            class="ion-android-favorite-outline"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="rating-box">
                                                    <ul>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li class="silver-color"><i class="fa fa-star-of-david"></i></li>
                                                        <li class="silver-color"><i class="fa fa-star-of-david"></i></li>
                                                        <li class="silver-color"><i class="fa fa-star-of-david"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-slide_item">
                                    <div class="single_product">
                                        <div class="product-img">
                                            <a href="single-product.html">
                                                <img class="primary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                                <img class="secondary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                            </a>
                                        </div>
                                        <div class="hiraola-product_content">
                                            <div class="product-desc_info">
                                                <h6><a class="product-name" href="single-product.html">Flash Furniture
                                                    Alonza Se...</a></h6>
                                                <div class="rating-box">
                                                    <ul>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li class="silver-color"><i class="fa fa-star-of-david"></i></li>
                                                    </ul>
                                                </div>
                                                <div class="price-box">
                                                    <span class="new-price">£54.36</span>
                                                </div>
                                                <div class="product-short_desc">
                                                    <p>The effects of gold are subtle, but definitely apparent. ... It was considered that gold possessed an energy that brought warm, soothing vibrations to the body to aid healing, for when the body relaxes and the blood vessels in the cells aren't as constricted, blood can move through the tissue spaces more easily.</p>
                                                </div>
                                            </div>
                                            <div class="add-actions">
                                                <ul>
                                                    <li><a class="hiraola-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart">Add To Cart</a></li>
                                                    <li><a class="hiraola-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                        class="ion-ios-shuffle-strong"></i></a></li>
                                                    <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                        class="ion-eye"></i></a></li>
                                                    <li><a class="hiraola-add_compare" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                        class="ion-android-favorite-outline"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="slide-item">
                                    <div class="single_product">
                                        <div class="product-img">
                                            <a href="single-product.html">
                                                <img class="primary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                                <img class="secondary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                            </a>
                                            <span class="sticker">New</span>
                                            <div class="add-actions">
                                                <ul>
                                                    <li><a class="hiraola-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i class="ion-bag"></i></a>
                                                    </li>
                                                    <li><a class="hiraola-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                        class="ion-ios-shuffle-strong"></i></a>
                                                    </li>
                                                    <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                        class="ion-eye"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="hiraola-product_content">
                                            <div class="product-desc_info">
                                                <h6><a class="product-name" href="single-product.html">Global Knives:
                                                    Profession...</a></h6>
                                                <div class="price-box">
                                                    <span class="new-price">£60.25</span>
                                                </div>
                                                <div class="additional-add_action">
                                                    <ul>
                                                        <li><a class="hiraola-add_compare" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                            class="ion-android-favorite-outline"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="rating-box">
                                                    <ul>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li class="silver-color"><i class="fa fa-star-of-david"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-slide_item">
                                    <div class="single_product">
                                        <div class="product-img">
                                            <a href="single-product.html">
                                                <img class="primary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                                <img class="secondary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                            </a>
                                        </div>
                                        <div class="hiraola-product_content">
                                            <div class="product-desc_info">
                                                <h6><a class="product-name" href="single-product.html">Flash Furniture
                                                    Alonza Se...</a></h6>
                                                <div class="rating-box">
                                                    <ul>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li class="silver-color"><i class="fa fa-star-of-david"></i></li>
                                                    </ul>
                                                </div>
                                                <div class="price-box">
                                                    <span class="new-price">£40.36</span>
                                                </div>
                                                <div class="product-short_desc">
                                                    <p>The effects of gold are subtle, but definitely apparent. ... It was considered that gold possessed an energy that brought warm, soothing vibrations to the body to aid healing, for when the body relaxes and the blood vessels in the cells aren't as constricted, blood can move through the tissue spaces more easily.</p>
                                                </div>
                                            </div>
                                            <div class="add-actions">
                                                <ul>
                                                    <li><a class="hiraola-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart">Add To Cart</a></li>
                                                    <li><a class="hiraola-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                        class="ion-ios-shuffle-strong"></i></a></li>
                                                    <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                        class="ion-eye"></i></a></li>
                                                    <li><a class="hiraola-add_compare" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                        class="ion-android-favorite-outline"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="slide-item">
                                    <div class="single_product">
                                        <div class="product-img">
                                            <a href="single-product.html">
                                                <img class="primary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                                <img class="secondary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                            </a>
                                            <div class="add-actions">
                                                <ul>
                                                    <li><a class="hiraola-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i class="ion-bag"></i></a>
                                                    </li>
                                                    <li><a class="hiraola-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                        class="ion-ios-shuffle-strong"></i></a>
                                                    </li>
                                                    <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                        class="ion-eye"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="hiraola-product_content">
                                            <div class="product-desc_info">
                                                <h6><a class="product-name" href="single-product.html">Flash Furniture
                                                    Alonza Se...</a></h6>
                                                <div class="price-box">
                                                    <span class="new-price">£77.44</span>
                                                </div>
                                                <div class="additional-add_action">
                                                    <ul>
                                                        <li><a class="hiraola-add_compare" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                            class="ion-android-favorite-outline"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="rating-box">
                                                    <ul>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li class="silver-color"><i class="fa fa-star-of-david"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-slide_item">
                                    <div class="single_product">
                                        <div class="product-img">
                                            <a href="single-product.html">
                                                <img class="primary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                                <img class="secondary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                            </a>
                                        </div>
                                        <div class="hiraola-product_content">
                                            <div class="product-desc_info">
                                                <h6><a class="product-name" href="single-product.html">Flash Furniture
                                                    Alonza Se...</a></h6>
                                                <div class="rating-box">
                                                    <ul>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li class="silver-color"><i class="fa fa-star-of-david"></i></li>
                                                    </ul>
                                                </div>
                                                <div class="price-box">
                                                    <span class="new-price">£98.36</span>
                                                </div>
                                                <div class="product-short_desc">
                                                    <p>The effects of gold are subtle, but definitely apparent. ... It was considered that gold possessed an energy that brought warm, soothing vibrations to the body to aid healing, for when the body relaxes and the blood vessels in the cells aren't as constricted, blood can move through the tissue spaces more easily.</p>
                                                </div>
                                            </div>
                                            <div class="add-actions">
                                                <ul>
                                                    <li><a class="hiraola-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart">Add To Cart</a></li>
                                                    <li><a class="hiraola-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                        class="ion-ios-shuffle-strong"></i></a></li>
                                                    <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                        class="ion-eye"></i></a></li>
                                                    <li><a class="hiraola-add_compare" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                        class="ion-android-favorite-outline"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="slide-item">
                                    <div class="single_product">
                                        <div class="product-img">
                                            <a href="single-product.html">
                                                <img class="primary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                                <img class="secondary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                            </a>
                                            <div class="add-actions">
                                                <ul>
                                                    <li><a class="hiraola-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i class="ion-bag"></i></a>
                                                    </li>
                                                    <li><a class="hiraola-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                        class="ion-ios-shuffle-strong"></i></a>
                                                    </li>
                                                    <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                        class="ion-eye"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="hiraola-product_content">
                                            <div class="product-desc_info">
                                                <h6><a class="product-name" href="single-product.html">Utensils and Knives
                                                    Block...</a></h6>
                                                <div class="price-box">
                                                    <span class="new-price">£50.43</span>
                                                </div>
                                                <div class="additional-add_action">
                                                    <ul>
                                                        <li><a class="hiraola-add_compare" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                            class="ion-android-favorite-outline"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="rating-box">
                                                    <ul>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li class="silver-color"><i class="fa fa-star-of-david"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-slide_item">
                                    <div class="single_product">
                                        <div class="product-img">
                                            <a href="single-product.html">
                                                <img class="primary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                                <img class="secondary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                            </a>
                                        </div>
                                        <div class="hiraola-product_content">
                                            <div class="product-desc_info">
                                                <h6><a class="product-name" href="single-product.html">Pendant, Made of
                                                    White...</a></h6>
                                                <div class="rating-box">
                                                    <ul>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li class="silver-color"><i class="fa fa-star-of-david"></i></li>
                                                    </ul>
                                                </div>
                                                <div class="price-box">
                                                    <span class="new-price">£90.36</span>
                                                </div>
                                                <div class="product-short_desc">
                                                    <p>The effects of gold are subtle, but definitely apparent. ... It was considered that gold possessed an energy that brought warm, soothing vibrations to the body to aid healing, for when the body relaxes and the blood vessels in the cells aren't as constricted, blood can move through the tissue spaces more easily.</p>
                                                </div>
                                            </div>
                                            <div class="add-actions">
                                                <ul>
                                                    <li><a class="hiraola-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart">Add To Cart</a></li>
                                                    <li><a class="hiraola-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                        class="ion-ios-shuffle-strong"></i></a></li>
                                                    <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                        class="ion-eye"></i></a></li>
                                                    <li><a class="hiraola-add_compare" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                        class="ion-android-favorite-outline"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="slide-item">
                                    <div class="single_product">
                                        <div class="product-img">
                                            <a href="single-product.html">
                                                <img class="primary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                                <img class="secondary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                            </a>
                                            <span class="sticker">New</span>
                                            <div class="add-actions">
                                                <ul>
                                                    <li><a class="hiraola-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i class="ion-bag"></i></a>
                                                    </li>
                                                    <li><a class="hiraola-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                        class="ion-ios-shuffle-strong"></i></a></li>
                                                    <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                        class="ion-eye"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="hiraola-product_content">
                                            <div class="product-desc_info">
                                                <h6><a class="product-name" href="single-product.html">JWDA Penant Lamp Brshed
                                                    S...</a></h6>
                                                <div class="price-box">
                                                    <span class="new-price">£602.00</span>
                                                </div>
                                                <div class="additional-add_action">
                                                    <ul>
                                                        <li><a class="hiraola-add_compare" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                            class="ion-android-favorite-outline"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="rating-box">
                                                    <ul>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li class="silver-color"><i class="fa fa-star-of-david"></i></li>
                                                        <li class="silver-color"><i class="fa fa-star-of-david"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-slide_item">
                                    <div class="single_product">
                                        <div class="product-img">
                                            <a href="single-product.html">
                                                <img class="primary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                                <img class="secondary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                            </a>
                                        </div>
                                        <div class="hiraola-product_content">
                                            <div class="product-desc_info">
                                                <h6><a class="product-name" href="single-product.html">Pendant, Made of
                                                    White Pl...</a></h6>
                                                <div class="rating-box">
                                                    <ul>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li class="silver-color"><i class="fa fa-star-of-david"></i></li>
                                                    </ul>
                                                </div>
                                                <div class="price-box">
                                                    <span class="new-price">£90.36</span>
                                                </div>
                                                <div class="product-short_desc">
                                                    <p>The effects of gold are subtle, but definitely apparent. ... It was considered that gold possessed an energy that brought warm, soothing vibrations to the body to aid healing, for when the body relaxes and the blood vessels in the cells aren't as constricted, blood can move through the tissue spaces more easily.</p>
                                                </div>
                                            </div>
                                            <div class="add-actions">
                                                <ul>
                                                    <li><a class="hiraola-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart">Add To Cart</a></li>
                                                    <li><a class="hiraola-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                        class="ion-ios-shuffle-strong"></i></a></li>
                                                    <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                        class="ion-eye"></i></a></li>
                                                    <li><a class="hiraola-add_compare" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                        class="ion-android-favorite-outline"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="slide-item">
                                    <div class="single_product">
                                        <div class="product-img">
                                            <a href="single-product.html">
                                                <img class="primary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                                <img class="secondary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                            </a>
                                            <span class="sticker">New</span>
                                            <div class="add-actions">
                                                <ul>
                                                    <li><a class="hiraola-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i class="ion-bag"></i></a>
                                                    </li>
                                                    <li><a class="hiraola-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                        class="ion-ios-shuffle-strong"></i></a></li>
                                                    <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                        class="ion-eye"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="hiraola-product_content">
                                            <div class="product-desc_info">
                                                <h6><a class="product-name" href="single-product.html">Light Inverted Pendant
                                                    Qu...</a></h6>
                                                <div class="price-box">
                                                    <span class="new-price">£110.00</span>
                                                    <span class="old-price">£110.00</span>
                                                </div>
                                                <div class="additional-add_action">
                                                    <ul>
                                                        <li><a class="hiraola-add_compare" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                            class="ion-android-favorite-outline"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="rating-box">
                                                    <ul>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-slide_item">
                                    <div class="single_product">
                                        <div class="product-img">
                                            <a href="single-product.html">
                                                <img class="primary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                                <img class="secondary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                            </a>
                                        </div>
                                        <div class="hiraola-product_content">
                                            <div class="product-desc_info">
                                                <h6><a class="product-name" href="single-product.html">Pendant, Made of
                                                    White Pl...</a></h6>
                                                <div class="rating-box">
                                                    <ul>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li class="silver-color"><i class="fa fa-star-of-david"></i></li>
                                                    </ul>
                                                </div>
                                                <div class="price-box">
                                                    <span class="new-price">£90.36</span>
                                                </div>
                                                <div class="product-short_desc">
                                                    <p>The effects of gold are subtle, but definitely apparent. ... It was considered that gold possessed an energy that brought warm, soothing vibrations to the body to aid healing, for when the body relaxes and the blood vessels in the cells aren't as constricted, blood can move through the tissue spaces more easily.</p>
                                                </div>
                                            </div>
                                            <div class="add-actions">
                                                <ul>
                                                    <li><a class="hiraola-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart">Add To Cart</a></li>
                                                    <li><a class="hiraola-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                        class="ion-ios-shuffle-strong"></i></a></li>
                                                    <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                        class="ion-eye"></i></a></li>
                                                    <li><a class="hiraola-add_compare" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                        class="ion-android-favorite-outline"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="slide-item">
                                    <div class="single_product">
                                        <div class="product-img">
                                            <a href="single-product.html">
                                                <img class="primary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                                <img class="secondary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                            </a>
                                            <span class="sticker-2">Sale</span>
                                            <div class="add-actions">
                                                <ul>
                                                    <li><a class="hiraola-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i class="ion-bag"></i></a>
                                                    </li>
                                                    <li><a class="hiraola-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                        class="ion-ios-shuffle-strong"></i></a></li>
                                                    <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                        class="ion-eye"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="hiraola-product_content">
                                            <div class="product-desc_info">
                                                <h6><a class="product-name" href="single-product.html">Vitra Sunburst Clock
                                                    pret...</a></h6>
                                                <div class="price-box">
                                                    <span class="new-price">£1199.60</span>
                                                </div>
                                                <div class="additional-add_action">
                                                    <ul>
                                                        <li><a class="hiraola-add_compare" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                            class="ion-android-favorite-outline"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="rating-box">
                                                    <ul>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li class="silver-color"><i class="fa fa-star-of-david"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-slide_item">
                                    <div class="single_product">
                                        <div class="product-img">
                                            <a href="single-product.html">
                                                <img class="primary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                                <img class="secondary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                            </a>
                                        </div>
                                        <div class="hiraola-product_content">
                                            <div class="product-desc_info">
                                                <h6><a class="product-name" href="single-product.html">Pendant, Made of
                                                    White Pl...</a></h6>
                                                <div class="rating-box">
                                                    <ul>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li class="silver-color"><i class="fa fa-star-of-david"></i></li>
                                                    </ul>
                                                </div>
                                                <div class="price-box">
                                                    <span class="new-price">£90.36</span>
                                                </div>
                                                <div class="product-short_desc">
                                                    <p>The effects of gold are subtle, but definitely apparent. ... It was considered that gold possessed an energy that brought warm, soothing vibrations to the body to aid healing, for when the body relaxes and the blood vessels in the cells aren't as constricted, blood can move through the tissue spaces more easily.</p>
                                                </div>
                                            </div>
                                            <div class="add-actions">
                                                <ul>
                                                    <li><a class="hiraola-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart">Add To Cart</a></li>
                                                    <li><a class="hiraola-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                        class="ion-ios-shuffle-strong"></i></a></li>
                                                    <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                        class="ion-eye"></i></a></li>
                                                    <li><a class="hiraola-add_compare" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                        class="ion-android-favorite-outline"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="slide-item">
                                    <div class="single_product">
                                        <div class="product-img">
                                            <a href="single-product.html">
                                                <img class="primary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                                <img class="secondary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                            </a>
                                            <span class="sticker">New</span>
                                            <div class="add-actions">
                                                <ul>
                                                    <li><a class="hiraola-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i class="ion-bag"></i></a>
                                                    </li>
                                                    <li><a class="hiraola-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                        class="ion-ios-shuffle-strong"></i></a></li>
                                                    <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                        class="ion-eye"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="hiraola-product_content">
                                            <div class="product-desc_info">
                                                <h6><a class="product-name" href="single-product.html">Work Lamp Silver Proin
                                                    he...</a></h6>
                                                <div class="price-box">
                                                    <span class="new-price">£135.20</span>
                                                </div>
                                                <div class="additional-add_action">
                                                    <ul>
                                                        <li><a class="hiraola-add_compare" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                            class="ion-android-favorite-outline"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="rating-box">
                                                    <ul>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-slide_item">
                                    <div class="single_product">
                                        <div class="product-img">
                                            <a href="single-product.html">
                                                <img class="primary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                                <img class="secondary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                            </a>
                                        </div>
                                        <div class="hiraola-product_content">
                                            <div class="product-desc_info">
                                                <h6><a class="product-name" href="single-product.html">Pendant, Made of
                                                    White Pl...</a></h6>
                                                <div class="rating-box">
                                                    <ul>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li class="silver-color"><i class="fa fa-star-of-david"></i></li>
                                                    </ul>
                                                </div>
                                                <div class="price-box">
                                                    <span class="new-price">£90.36</span>
                                                </div>
                                                <div class="product-short_desc">
                                                    <p>The effects of gold are subtle, but definitely apparent. ... It was considered that gold possessed an energy that brought warm, soothing vibrations to the body to aid healing, for when the body relaxes and the blood vessels in the cells aren't as constricted, blood can move through the tissue spaces more easily.</p>
                                                </div>
                                            </div>
                                            <div class="add-actions">
                                                <ul>
                                                    <li><a class="hiraola-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart">Add To Cart</a></li>
                                                    <li><a class="hiraola-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                        class="ion-ios-shuffle-strong"></i></a></li>
                                                    <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                        class="ion-eye"></i></a></li>
                                                    <li><a class="hiraola-add_compare" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                        class="ion-android-favorite-outline"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="slide-item">
                                    <div class="single_product">
                                        <div class="product-img">
                                            <a href="single-product.html">
                                                <img class="primary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                                <img class="secondary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                            </a>
                                            <span class="sticker">New</span>
                                            <div class="add-actions">
                                                <ul>
                                                    <li><a class="hiraola-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i class="ion-bag"></i></a>
                                                    </li>
                                                    <li><a class="hiraola-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                        class="ion-ios-shuffle-strong"></i></a></li>
                                                    <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                        class="ion-eye"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="hiraola-product_content">
                                            <div class="product-desc_info">
                                                <h6><a class="product-name" href="single-product.html">Suspensions Aplomb Large
                                                    ...</a></h6>
                                                <div class="price-box">
                                                    <span class="new-price">£602.00</span>
                                                </div>
                                                <div class="additional-add_action">
                                                    <ul>
                                                        <li><a class="hiraola-add_compare" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                            class="ion-android-favorite-outline"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="rating-box">
                                                    <ul>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li class="silver-color"><i class="fa fa-star-of-david"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-slide_item">
                                    <div class="single_product">
                                        <div class="product-img">
                                            <a href="single-product.html">
                                                <img class="primary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                                <img class="secondary-img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRjDb1AuoI1_v3ogrWfUkvdRQOlRoljId-w&usqp=CAU"
                                                    alt="Hiraola's Product Image" />
                                            </a>
                                        </div>
                                        <div class="hiraola-product_content">
                                            <div class="product-desc_info">
                                                <h6><a class="product-name" href="single-product.html">Flash Furniture
                                                    Alonza Se...</a></h6>
                                                <div class="rating-box">
                                                    <ul>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li><i class="fa fa-star-of-david"></i></li>
                                                        <li class="silver-color"><i class="fa fa-star-of-david"></i></li>
                                                    </ul>
                                                </div>
                                                <div class="price-box">
                                                    <span class="new-price">£90.36</span>
                                                </div>
                                                <div class="product-short_desc">
                                                    <p>The effects of gold are subtle, but definitely apparent. ...
                                                        It was considered that gold possessed an energy that brought warm,
                                                        soothing vibrations to the body to aid healing, for when the body relaxes and the
                                                        blood vessels in the cells aren't as constricted, blood can move through the tissue
                                                        spaces more easily.</p>
                                                </div>
                                            </div>
                                            <div class="add-actions">
                                                <ul>
                                                    <li><a class="hiraola-add_cart" href="cart.html" data-toggle="tooltip" data-placement="top" title="Add To Cart">Add To Cart</a></li>
                                                    <li><a class="hiraola-add_compare" href="compare.html" data-toggle="tooltip" data-placement="top" title="Compare This Product"><i
                                                        class="ion-ios-shuffle-strong"></i></a></li>
                                                    <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View"><i
                                                        class="ion-eye"></i></a></li>
                                                    <li><a class="hiraola-add_compare" href="wishlist.html" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i
                                                        class="ion-android-favorite-outline"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="hiraola-paginatoin-area">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <ul class="hiraola-pagination-box">
                                                <li class="active"><a href="#">1</a></li>
                                                <li><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a class="Next" href="#"><i
                                                    class="ion-ios-arrow-right"></i></a></li>
                                                <li><a class="Next" href="#">>|</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <div class="product-select-box">
                                                <div class="product-short">
                                                    <p>Showing 1 to 12 of 18 (2 Pages)</p>
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
        </div>
    );
};