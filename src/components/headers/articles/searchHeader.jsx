import React from 'react';

import "../../../assets/css/vendor/bootstrap.min.css";
import "../../../assets/css/vendor/font-awesome.css";
import "../../../assets/css/vendor/fontawesome-stars.css";
import "../../../assets/css/vendor/ion-fonts.css";
import "../../../assets/css/plugins/slick.css";
import "../../../assets/css/plugins/animate.css";
import "../../../assets/css/plugins/jquery-ui.min.css";
import "../../../assets/css/plugins/lightgallery.min.css";
import "../../../assets/css/plugins/nice-select.css";

import "../../../assets/css/style.css";
import Nav from "../Navigation.jsx";

import "../../../assets/js/navbar";

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

export default function SearchHeader() {


      
    return (
        <div className="header-middle_area ">
            <div className="searching">
                <div className="row " sty>
                    <div className="col-lg-4">
                        <div className="header-logo">
                            <a href="index.html">
                                <img src="assets/images/menu/logo/1.png" alt="Hiraola's Header Logo" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="hm-form_area">
                            <form action="#" className="hm-searchbox col-lg-6">
                                <select className="nice-select select-search-category">
                                    <option value="0">All</option>
                                    <option value="10">- - - - Laptops</option>
                                    <option value="17">- - - - Prime Video</option>
                                    <option value="20">- - - - All Videos</option>
                                    <option value="21">- - - - Blouses</option>
                                    <option value="22">- - - - Evening Dresses</option>
                                    <option value="23">- - - - Summer Dresses</option>
                                    <option value="24">- - - - T-shirts</option>
                                    <option value="25">- - - - Rent or Buy</option>
                                    <option value="26">- - - - Your Watchlist</option>
                                    <option value="27">- - - - Watch Anywhere</option>
                                    <option value="28">- - - - Getting Started</option>
                                    <option value="18">- - - - Computers</option>
                                    <option value="29">- - - - More to Explore</option>
                                    <option value="30">- - - - TV &amp; Video</option>
                                    <option value="31">- - - - Audio &amp; Theater</option>
                                    <option value="32">- - - - Camera, Photo </option>
                                    <option value="33">- - - - Cell Phones</option>
                                    <option value="34">- - - - Headphones</option>
                                    <option value="35">- - - - Video Games</option>
                                    <option value="36">- - - - Wireless Speakers</option>
                                    <option value="19">- - - - Electronics</option>
                                    <option value="37">- - - - Amazon Home</option>
                                    <option value="38">- - - - Kitchen &amp; Dining</option>
                                    <option value="39">- - - - Furniture</option>
                                    <option value="40">- - - - Bed &amp; Bath</option>
                                    <option value="41">- - - - Appliances</option>
                                    <option value="11">- - - - TV &amp; Audio</option>
                                    <option value="42">- - - - Chamcham</option>
                                    <option value="45">- - - - Office</option>
                                    <option value="47">- - - - Gaming</option>
                                    <option value="48">- - - - Chromebook</option>
                                    <option value="49">- - - - Refurbished</option>
                                    <option value="50">- - - - Touchscreen</option>
                                    <option value="51">- - - - Ultrabooks</option>
                                    <option value="52">- - - - Blouses</option>
                                    <option value="43">- - - - Sanai</option>
                                    <option value="53">- - - - Hard Drives</option>
                                    <option value="54">- - - - Graphic Cards</option>
                                    <option value="55">- - - - Processors (CPU)</option>
                                    <option value="56">- - - - Memory</option>
                                    <option value="57">- - - - Motherboards</option>
                                    <option value="58">- - - - Fans &amp; Cooling</option>
                                    <option value="59">- - - - CD/DVD Drives</option>
                                    <option value="44">- - - - Meito</option>
                                    <option value="60">- - - - Sound Cards</option>
                                    <option value="61">- - - - Cases &amp; Towers</option>
                                    <option value="62">- - - - Casual Dresses</option>
                                    <option value="63">- - - - Evening Dresses</option>
                                    <option value="64">- - - - T-shirts</option>
                                    <option value="65">- - - - Tops</option>
                                    <option value="12">- - - - Smartphone</option>
                                    <option value="66">- - - - Camera Accessories</option>
                                    <option value="68">- - - - Octa Core</option>
                                    <option value="69">- - - - Quad Core</option>
                                    <option value="70">- - - - Dual Core</option>
                                    <option value="71">- - - - 7.0 Screen</option>
                                    <option value="72">- - - - 9.0 Screen</option>
                                    <option value="73">- - - - Bags &amp; Cases</option>
                                    <option value="67">- - - - XailStation</option>
                                    <option value="74">- - - - Batteries</option>
                                    <option value="75">- - - - Microphones</option>
                                    <option value="76">- - - - Stabilizers</option>
                                    <option value="77">- - - - Video Tapes</option>
                                    <option value="78">- - - - Memory Card Readers</option>
                                    <option value="79">- - - - Tripods</option>
                                    <option value="13">- - - - Cameras</option>
                                    <option value="14">- - - - headphone</option>
                                    <option value="15">- - - - Smartwatch</option>
                                    <option value="16">- - - - Accessories</option>
                                </select>
                                <input type="text" placeholder="Enter your search key ..." />
                                <button className="li-btn" type="submit"><i className="fa fa-search"></i></button>
                            </form>
                            <div className="col-lg-2 d-none d-lg-block position-static ">
                                <div className="main-menu_area ">
                                    <div className="header-right_area" >

                                        <ul className="flexbox-container" id="myTopnav">
                                            <li>
                                                <a href="/wishlist" className="wishlist-btn">
                                                    <i className="ion-android-favorite-outline"></i>
                                                </a>
                                            </li>
                                            {/* <li>
                                                <a href="#mobileMenu" className="mobile-menu_btn toolbar-btn color--white d-lg-none d-block">
                                                    <i className="ion-navicon"></i>
                                                </a>
                                            </li> */}
                                            <li>
                                                <a href="/carte" className="minicart-btn toolbar-btn">
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
            <div className="header-bottom_area">
                <div className="container">
                    <Nav />
                </div>
            </div>
        </div>
    );
};