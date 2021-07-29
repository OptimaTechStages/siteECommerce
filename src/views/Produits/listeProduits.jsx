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

import MainHeader from "../../components/headers/articles/searchHeader.jsx";
import Footer from "../../components/footers/footer.jsx";
import Produit from "../../components/content/listeArticles.jsx";


export default function Main() {

    return (
        <div>
            <MainHeader />
            <Produit />
            <Footer />
        </div>

    );
};