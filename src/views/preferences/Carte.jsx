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
import Conteneur from '../../components/content/Cart.jsx';
import SearchHeader from "../../components/headers/articles/searchHeader.jsx";
import Footer from '../../components/footers/footer.jsx';


export default function Details() {

    return (
        <div>
            <SearchHeader />
            <Conteneur />
            <Footer />
        </div>
    );
};

