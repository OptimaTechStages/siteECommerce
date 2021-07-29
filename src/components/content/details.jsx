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

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function Details() {

    return (
        <Card className="text-center">
            <Card.Header>Post</Card.Header>
            <Container className="col-lg-8">
                <Card.Body>
                    <div style={{ float: 'left' }}>
                        <img src='https://i.pinimg.com/236x/f8/c9/89/f8c989e0b2339fba97f58369c68addf2.jpg' alt='produit' />
                    </div>
                    <div style={{ float: 'right' }}>
                        <Card.Title>Nom Instagrameurse</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </div>
                </Card.Body>
            </Container>
        </Card>
    );
};

