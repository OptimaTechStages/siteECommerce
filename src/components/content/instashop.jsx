import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import "../../assets/css/vendor/bootstrap.min.css";
import "../../assets/css/vendor/font-awesome.css";
import "../../assets/css/vendor/fontawesome-stars.css";
import "../../assets/css/vendor/ion-fonts.css";
import "../../assets/css/plugins/slick.css";
import "../../assets/css/plugins/animate.css";
import "../../assets/css/plugins/jquery-ui.min.css";
import "../../assets/css/plugins/lightgallery.min.css";
import "../../assets/css/plugins/nice-select.css";
import ReactCircleModal from 'react-circle-modal';
import Button from 'react-bootstrap/Button';
import Details from '../content/details.jsx';

import "../../assets/css/style.css";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {

    width: 500,
    height: 450,
    // Promote the list into its own layer in Chrome. This cost memory, but helps keep FPS high.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
  img: {
    display: 'flex',
    maxWidth: '230px',
    maxHeight: '95px',
    width: 'auto',
    height: 'auto',
  }
}));

export default function AdvancedImageList() {
  const classes = useStyles();

  return (
    <div class="shop-product-wrap grid gridview-3 row">
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
                            <li class="quick-view-btn" data-toggle="modal" data-target="#exampleModalCenter"><a href="#" data-toggle="tooltip" data-placement="top" title="Quick View">
                            <ReactCircleModal
                                                                                backgroundColor="#cda557"
                                                                                toogleComponent={onClick => (
                                                                                    <button onClick={onClick}>
                                                                                        <i class="ion-eye"></i>
                                                                                    </button>
                                                                                )}
                                                                                offsetX={0}
                                                                                offsetY={0}
                                                                            >
                                                                                {(onClick) => (
                                                                                    <div style={{ backgroundColor: '#fff', padding: '1em', margin: '2%' }} className="text-center">
                                                                                        <Details />
                                                                                        <Button variant="primary" onClick={onClick}>Click here to close modal</Button>
                                                                                    </div>
                                                                                )}
                                                                            </ReactCircleModal>
                              </a></li>
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
  );
}
