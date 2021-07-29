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
import Nav from "../headers/Navigation.jsx";

export default function MainHeader() {

    return (
        <div className="header-bottom_area">
            <div>
                <div className="container-fliud">
                    <div className="row ">
                        <div className="col-lg-2 col-md-4 col-sm-4">
                            <div className="header-logo">
                                <a href="/home">
                                    <h1>Logo</h1>
                                </a>
                            </div>
                        </div>
                        
                        <div className="col-lg-10 d-none d-lg-block position-static ">
                            <div className="main-menu_area ">
                                <div className="col-lg-8 col-md-8 col-sm-8">
                                    <div className="header-right_area" >
                                        <ul className="flexbox-container">
                                            <li>
                                                <a href="/homeHomme">Homme </a>
                                            </li>
                                            <li>
                                                <a href="/homeFemme">Femme</a>
                                            </li>
                                        </ul>

                                        <ul className="flexbox-container">
                                            <li>
                                                <a href="/wishlist" className="wishlist-btn">
                                                    <i className="ion-android-favorite-outline"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#searchBar" className="search-btn toolbar-btn">
                                                    <i className="ion-ios-search-strong"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#mobileMenu" className="mobile-menu_btn toolbar-btn color--white d-lg-none d-block">
                                                    <i className="ion-navicon"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#miniCart" className="minicart-btn toolbar-btn">
                                                    <i className="ion-bag"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <Nav />
            </div>
        </div>

    );
};