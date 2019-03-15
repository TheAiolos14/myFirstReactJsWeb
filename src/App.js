import React, {Component} from 'react';
import logo from './logo.png';
import './App.css';
import {CarouselMe, AboutUs, Product, Article, Footer, Home, ModalTest} from './Home';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import { Modal, Button } from 'react-bootstrap'


class App extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <Router>

                <div className="App">

                    <div className="top">
                        <header className="App-header">

                            <div className="navBar">
                                <Navbar color="light" light expand="md">
                                    <Nav className="ml-auto" navbar>
                                        <NavItem>
                                            <Link to="/">Home</Link>
                                        </NavItem>

                                        <NavItem>
                                            <Link to="/about">About Us</Link>
                                        </NavItem>

                                        <NavItem>
                                            <Link to="/prducts">Products</Link>
                                        </NavItem>

                                        <NavItem>
                                            <Link to="/contact">Contact Us</Link>
                                        </NavItem>
                                    </Nav>
                                </Navbar>

                                <Route path="/1" component={Home}/>

                            </div>

                        </header>
                    </div>

                    <div>
                        <img src={logo} alt="Blibli" className="App-logo"/>
                    </div>

                    <CarouselMe/>
                    <div className="App-about about">
                        <AboutUs/>
                    </div>

                    <div className="App-product">
                        <Product/>
                    </div>

                    <div className="App-article">
                        <Article/>
                    </div>


                    <div className="rate">
                        <Button variant="danger" onClick={this.handleShow} className="btnTesting">
                            <h2>Rate this Website</h2>
                        </Button>

                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Are you Happy ?</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>What do you think about My Website</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleClose}>
                                    Rubbish
                                </Button>
                                <Button variant="danger" onClick={this.handleClose}>
                                    Awesome
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>

                    <div className="App-footer">
                        <Footer/>
                    </div>

                </div>

            </Router>
        );
    }
}

export default App;
