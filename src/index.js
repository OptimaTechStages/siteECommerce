import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Main from './views/MainPages/Main.jsx';
import MainHomme from './views/MainPages/HommeMain.jsx';
import MainFemme from './views/MainPages/FemmeMain.jsx';
import Article from './views/Produits/article.jsx';
import Wishlist from './views/preferences/wishlist.jsx';
import Liste from './views/Produits/listeProduits.jsx';
import Instashop from './views/Produits/instashop.jsx';
import Carte from './views/preferences/Carte.jsx';


ReactDOM.render(

    <BrowserRouter>
        <Switch>
           <Route path='/home' component={Main} />
           <Route path='/homeHomme' component={MainHomme} />
           <Route path='/homeFemme' component={MainFemme} />
           <Route path='/article' component={Article} />
           <Route path='/wishlist' component={Wishlist} />
           <Route path='/liste' component={Liste} />
           <Route path='/instashop' component={Instashop} />
           <Route path='/carte' component={Carte} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root')); 
