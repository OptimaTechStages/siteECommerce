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
import ReactCircleModal from 'react-circle-modal';

import "../../assets/css/style.css";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import Divider from '@material-ui/core/Divider';

import { IconButton } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import Details from '../content/details.jsx';

const useStyles = makeStyles(() =>
    createStyles({
        imageList: {
            width: '90%',
            height: 450,
            marginLeft: '5%',
            marginRight: '5%'
        }
    }),
);


export default function Article() {

    const classes = useStyles();
    const itemData2 = [
        {
            img: "https://cdn.shopify.com/s/files/1/0293/9277/products/10-29-18_Studio_2_11-30-53_BLACK_JEAN_TEMP0423_DM_468x.jpg?v=1568666111",
            title: 'Image',
            author: 'author',
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0293/9277/products/10-29-18_Studio_2_11-30-53_BLACK_JEAN_TEMP0423_DM_468x.jpg?v=1568666111",
            title: 'Image',
            author: 'author',
        },
        {
            img: "https://i.pinimg.com/236x/f8/c9/89/f8c989e0b2339fba97f58369c68addf2.jpg",
            title: 'Image',
            author: 'author',
        },
        {
            img: "https://i.pinimg.com/236x/f8/c9/89/f8c989e0b2339fba97f58369c68addf2.jpg",
            title: 'Image',
            author: 'author',
        },
        {
            img: "https://i.pinimg.com/236x/f8/c9/89/f8c989e0b2339fba97f58369c68addf2.jpg",
            title: 'Image',
            author: 'author',
        },
        {
            img: "https://i.pinimg.com/236x/f8/c9/89/f8c989e0b2339fba97f58369c68addf2.jpg",
            title: 'Image',
            author: 'author',
        },
        {
            img: "https://i.pinimg.com/236x/f8/c9/89/f8c989e0b2339fba97f58369c68addf2.jpg",
            title: 'Image',
            author: 'author',
        },
        {
            img: "https://i.pinimg.com/236x/f8/c9/89/f8c989e0b2339fba97f58369c68addf2.jpg",
            title: 'Image',
            author: 'author',
        },
    ];

    return (
        <div>
            <div className="sp-area">

                <div className="sp-nav ">
                    <div className="row">
                        <div className="col-lg-4 col-md-4">
                            <div className="sp-img_area">
                                <div className="zoompro-border">
                                    <img className="zoompro"
                                        src="https://contents.mediadecathlon.com/p1770651/k$9be23d9d9945cc661e3c62e08a16d8e2/chemise-de-trek-voyage-travel100-manches-courtes-bleu-homme.jpg?&f=452x452" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <div className="sp-content">
                                <div className="sp-heading">
                                    <h5><a href="#">JWDA Penant Lamp Brshed Steel</a></h5>
                                </div>
                                <span className="reference">Reference: demo_1</span>
                                <div className="rating-box">
                                    <ul>
                                        <li><i className="fa fa-star-of-david"></i></li>
                                        <li><i className="fa fa-star-of-david"></i></li>
                                        <li><i className="fa fa-star-of-david"></i></li>
                                        <li><i className="fa fa-star-of-david"></i></li>
                                        <li className="silver-color"><i className="fa fa-star-of-david"></i></li>
                                    </ul>
                                </div>
                                <div className="sp-essential_stuff">
                                    <ul>
                                        <li>EX Tax: <a href="#"><span>£453.35</span></a></li>
                                        <li>Brands: <a href="#">Buxton</a></li>
                                        <li>Product Code: <a href="#">Product 16</a></li>
                                        <li>Reward Points: <a href="#">600</a></li>
                                        <li>Availability: <a href="#">In Stock</a></li>
                                    </ul>
                                </div>
                                <div className="quantity">
                                    <label>Quantity</label>
                                    <div className="cart-plus-minus">
                                        <input className="cart-plus-minus-box" value="1" type="text" />
                                        <div className="dec qtybutton"><i className="fa fa-angle-down"></i></div>
                                        <div className="inc qtybutton"><i className="fa fa-angle-up"></i></div>
                                    </div>
                                </div>
                                <div className="qty-btn_area">
                                    <ul>
                                        <li><a className="qty-cart_btn" href="cart.html">Add To Cart</a></li>
                                        <li><a className="qty-wishlist_btn" href="wishlist.html" data-toggle="tooltip" title="Add To Wishlist"><i className="ion-android-favorite-outline"></i></a></li>
                                        <li><a className="qty-compare_btn" href="compare.html" data-toggle="tooltip" title="Compare This Product"><i className="ion-ios-shuffle-strong"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <Divider orientation="vertical" flexItem />
                            <Tab.Container id="left-tabs-example" defaultActiveKey="XS">
                                <Row >
                                    <div style={{ marginLeft: '25%' }} >
                                        <ul variant="pills" className="qty-btn_area flexbox-container ">

                                            <Nav.Link eventKey="XS" className="qty-cart_btn">
                                                <li className="qty-cart_btn">XS</li></Nav.Link>


                                            <Nav.Link eventKey="S" className="qty-cart_btn">
                                                <li className="qty-cart_btn">S</li></Nav.Link>


                                            <Nav.Link eventKey="M" className="qty-cart_btn">
                                                <li className="qty-cart_btn">M</li></Nav.Link>


                                            <Nav.Link eventKey="L" className="qty-cart_btn">
                                                <li className="qty-cart_btn">L</li></Nav.Link>


                                            <Nav.Link eventKey="XL" className="qty-cart_btn">
                                                <li className="qty-cart_btn">XL</li></Nav.Link>


                                            <Nav.Link eventKey="XXL" className="qty-cart_btn">
                                                <li className="qty-cart_btn">XXL</li></Nav.Link>


                                            <Nav.Link eventKey="XXXL" className="qty-cart_btn">
                                                <li className="qty-cart_btn">XXXL</li></Nav.Link>
                                        </ul>
                                    </div>
                                    <Col sm={12}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="XS">
                                                <div className={classes.root}>
                                                    <ImageList rowHeight={180} className={classes.imageList}>
                                                        {itemData2.map((item) => (
                                                            <ImageListItem key={item.img}>
                                                                <img src={item.img} alt={item.title} />

                                                                );
                                                                <ImageListItemBar
                                                                    title={item.title}
                                                                    subtitle={<span>by: {item.author}</span>}
                                                                    actionIcon={
                                                                        <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>

                                                                            <ReactCircleModal
                                                                                backgroundColor="#cda557"
                                                                                toogleComponent={onClick => (
                                                                                    <button onClick={onClick}>
                                                                                        <InfoIcon />
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
                                                                        </IconButton>
                                                                    }
                                                                />
                                                            </ImageListItem>
                                                        ))}
                                                    </ImageList>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="S">
                                                <div className={classes.root}>
                                                    <ImageList rowHeight={180} className={classes.imageList}>
                                                        {itemData2.map((item) => (
                                                            <ImageListItem key={item.img}>
                                                                <img src={item.img} alt={item.title} />

                                                                );
                                                                <ImageListItemBar
                                                                    title={item.title}
                                                                    subtitle={<span>by: {item.author}</span>}
                                                                    actionIcon={
                                                                        <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>

                                                                            <ReactCircleModal
                                                                                backgroundColor="#cda557"
                                                                                toogleComponent={onClick => (
                                                                                    <button onClick={onClick}>
                                                                                        <InfoIcon />
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
                                                                        </IconButton>
                                                                    }
                                                                />
                                                            </ImageListItem>
                                                        ))}
                                                    </ImageList>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="M">
                                                <div className={classes.root}>
                                                    <ImageList rowHeight={180} className={classes.imageList}>
                                                        {itemData2.map((item) => (
                                                            <ImageListItem key={item.img}>
                                                                <img src={item.img} alt={item.title} />

                                                                );
                                                                <ImageListItemBar
                                                                    title={item.title}
                                                                    subtitle={<span>by: {item.author}</span>}
                                                                    actionIcon={
                                                                        <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>

                                                                            <ReactCircleModal
                                                                                backgroundColor="#cda557"
                                                                                toogleComponent={onClick => (
                                                                                    <button onClick={onClick}>
                                                                                        <InfoIcon />
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
                                                                        </IconButton>
                                                                    }
                                                                />
                                                            </ImageListItem>
                                                        ))}
                                                    </ImageList>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="L">
                                                <div className={classes.root}>
                                                    <ImageList rowHeight={180} className={classes.imageList}>
                                                        {itemData2.map((item) => (
                                                            <ImageListItem key={item.img}>
                                                                <img src={item.img} alt={item.title} />

                                                                );
                                                                <ImageListItemBar
                                                                    title={item.title}
                                                                    subtitle={<span>by: {item.author}</span>}
                                                                    actionIcon={
                                                                        <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>

                                                                            <ReactCircleModal
                                                                                backgroundColor="#cda557"
                                                                                toogleComponent={onClick => (
                                                                                    <button onClick={onClick}>
                                                                                        <InfoIcon />
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
                                                                        </IconButton>
                                                                    }
                                                                />
                                                            </ImageListItem>
                                                        ))}
                                                    </ImageList>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="XL">
                                                <div className={classes.root}>
                                                    <ImageList rowHeight={180} className={classes.imageList}>
                                                        {itemData2.map((item) => (
                                                            <ImageListItem key={item.img}>
                                                                <img src={item.img} alt={item.title} />

                                                                );
                                                                <ImageListItemBar
                                                                    title={item.title}
                                                                    subtitle={<span>by: {item.author}</span>}
                                                                    actionIcon={
                                                                        <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>

                                                                            <ReactCircleModal
                                                                                backgroundColor="#cda557"
                                                                                toogleComponent={onClick => (
                                                                                    <button onClick={onClick}>
                                                                                        <InfoIcon />
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
                                                                        </IconButton>
                                                                    }
                                                                />
                                                            </ImageListItem>
                                                        ))}
                                                    </ImageList>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="XXL">
                                                <div className={classes.root}>
                                                    <ImageList rowHeight={180} className={classes.imageList}>
                                                        {itemData2.map((item) => (
                                                            <ImageListItem key={item.img}>
                                                                <img src={item.img} alt={item.title} />

                                                                );
                                                                <ImageListItemBar
                                                                    title={item.title}
                                                                    subtitle={<span>by: {item.author}</span>}
                                                                    actionIcon={
                                                                        <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>

                                                                            <ReactCircleModal
                                                                                backgroundColor="#cda557"
                                                                                toogleComponent={onClick => (
                                                                                    <button onClick={onClick}>
                                                                                        <InfoIcon />
                                                                                    </button>
                                                                                )}
                                                                                offsetX={0}
                                                                                offsetY={0}
                                                                            >
                                                                                {(onClick) => (
                                                                                    <div style={{ backgroundColor: '#fff', padding: '1em', margin: '2%'}}  className="text-center">
                                                                                        <Details />
                                                                                        <Button variant="primary" onClick={onClick}>Click here to close modal</Button>
                                                                                    </div>
                                                                                )}
                                                                            </ReactCircleModal>
                                                                        </IconButton>
                                                                    }
                                                                />
                                                            </ImageListItem>
                                                        ))}
                                                    </ImageList>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="XXXL">
                                                <div className={classes.root}>
                                                    <ImageList rowHeight={180} className={classes.imageList}>
                                                        {itemData2.map((item) => (
                                                            <ImageListItem key={item.img}>
                                                                <img src={item.img} alt={item.title} />

                                                                );
                                                                <ImageListItemBar
                                                                    title={item.title}
                                                                    subtitle={<span>by: {item.author}</span>}
                                                                    actionIcon={
                                                                        <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>

                                                                            <ReactCircleModal
                                                                                backgroundColor="#cda557"
                                                                                toogleComponent={onClick => (
                                                                                    <button onClick={onClick}>
                                                                                        <InfoIcon />
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
                                                                        </IconButton>
                                                                    }
                                                                />
                                                            </ImageListItem>
                                                        ))}
                                                    </ImageList>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};