import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button,  Collapse,
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
import { Carousel } from 'react-responsive-carousel';
import gambar from './2.jpeg';
import data from './data.png';
import information from './information.png';
import car from './car.png';
import article1 from './2.jpg';
import article2 from './3.jpg';
import article3 from './4.jpg';
import gif from './6.jpeg';
import productImage from './5.jpg';
import Col from "reactstrap/es/Col";
import { Row, Modal } from 'react-bootstrap'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function BasicExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/udin">Udin</Link>
                    </li>
                </ul>

                <hr />

                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />

            </div>
        </Router>
    );
}

export function ButtonDanger(){
    return(
        <div>
          <Button color="danger">Danger!</Button>
        </div>
    );
}

export function Navbar2() {
    return (

            <Router>
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

                </div>
            </Router>

    );

}

export function Home() {
    return (
        <div>

        </div>
    );
}

export function About() {
    return (
        <div>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
        </div>
    );
}

export function AboutUs() {
    return(

      <div className="aboutUs">
          <Row>
              <Col className="txtTitleAbout">
                  <h1>About Us</h1>
              </Col>
          </Row>

          <Row>
              <Col>
                  <img src={gambar} alt="Building" width="600px" className="imgAboutUs"/>
              </Col>

              <Col>

                  <h2 className="txtAbout">
                      Blibli.com adalah salah satu situs web <br/>
                      perdagangan elektronik di Indonesia. <br/>
                      Blibli adalah produk pertama <br/>
                      PT Global Digital Niaga yang merupakan <br/>
                      anak perusahaan Djarum di bidang digital<br/>
                      yang didirikan pada tahun 2010
                  </h2>

                  <div className="btnSeeMore">
                      <Router>
                          <div>
                              <Link to="/detailAbout"><Button color="danger">See More</Button></Link>
                                <Route path="/detailAbout" component={DetailAbout}/>
                          </div>
                      </Router>
                  </div>

              </Col>

          </Row>
      </div>
    );
}

export function Product(){
    return(

        <div className="Product">

            <Row>
                <Col className="titleProduct">
                    <h1>Our Product</h1>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div className="imgProduct">
                        <img src={data} alt=""  width="220"/>
                        <h2 className="txtProductItem">IT Program</h2>
                        <Router>
                            <div>
                                <Link to="/detailProduct"><Button color="danger" className="btnProduct1">See More</Button></Link>
                                <Route path="/detailProduct" component={DetailProduct}/>
                            </div>
                        </Router>
                    </div>
                </Col>

                <Col>
                    <div className="imgProduct">
                        <img src={information} alt="" width="220"/>
                        <h2 className="txtProductItem2">Information</h2>
                        <Router>
                            <div>
                                <Link to="/detailProduct"><Button color="danger" className="btnProduct1">See More</Button></Link>
                                <Route path="/detailProduct" component={DetailProduct}/>
                            </div>
                        </Router>
                    </div>
                </Col>

                <Col>
                    <div className="imgProduct">
                        <img src={car} alt="" width="220"/>
                        <h2 className="txtProductItem3">Car</h2>
                        <Router>
                            <div>
                                <Link to="/detailProduct"><Button color="danger" className="btnProduct1">See More</Button></Link>
                                <Route path="/detailProduct" component={DetailProduct}/>
                            </div>
                        </Router>
                    </div>
                </Col>
            </Row>


        </div>

    );
}


export function Article() {
    return(
        <div className="article">
            <Row>
                <Col className="txtArticle">
                    <h1>Our Articles</h1>
                </Col>
            </Row>

            <Row>
                <Col>
                    <img src={article1} alt="Building" width="450px" className="imgArticle"/>
                </Col>

                <Col>
                    <h5 className="txtArticleItem">
                        Lorem Ipsum is simply dummy text of the printing and <br />
                        typesetting industry. Lorem Ipsum has been the industry's <br />
                        standard dummy text ever since the 1500s, when an unknown <br />
                        printer took a galley of type and scrambled it to make a type <br />
                        specimen book.
                    </h5>

                    <Router>
                        <div>
                            <Link to="/detaiLArticle"><Button color="danger" className="btnArticle">See More</Button></Link>
                            <Route path="/detailArticle" component={DetailArticle}/>
                        </div>
                    </Router>

                </Col>
            </Row>

            <Row>
                <Col className="separator"/>
            </Row>

            <Row>
                <Col>
                    <img src={article3} alt="Building" width="450px" className="imgArticle"/>
                </Col>

                <Col>
                    <h5 className="txtArticleItem">
                        Lorem Ipsum is simply dummy text of the printing and <br />
                        typesetting industry. Lorem Ipsum has been the industry's <br />
                        standard dummy text ever since the 1500s, when an unknown <br />
                        printer took a galley of type and scrambled it to make a type <br />
                        specimen book.
                    </h5>
                    <Router>
                        <div>
                            <Link to="/detaiLArticle"><Button color="danger" className="btnArticle">See More</Button></Link>
                            <Route path="/detailArticle" component={DetailArticle}/>
                        </div>
                    </Router>
                </Col>
            </Row>

            <Row>
                <Col className="separator"/>
            </Row>

            <Row>
                <Col>
                    <img src={article2} alt="Building" width="450px" className="imgArticle"/>
                </Col>

                <Col>
                    <h5 className="txtArticleItem">
                        Lorem Ipsum is simply dummy text of the printing and <br />
                        typesetting industry. Lorem Ipsum has been the industry's <br />
                        standard dummy text ever since the 1500s, when an unknown <br />
                        printer took a galley of type and scrambled it to make a type <br />
                        specimen book.
                    </h5>
                    <Router>
                        <div>
                            <Link to="/detaiLArticle"><Button color="danger" className="btnArticle" >See More</Button></Link>
                            <Route path="/detailArticle" component={DetailArticle}/>
                        </div>
                    </Router>
                </Col>
            </Row>
        </div>
    );
    
}

export function DetailAbout() {
    return(
        <h3 className="dtlTxtAbout">
            Anda juga bisa menemukan berbagai produk yang dapat memenuhi berbagai kebutuhan hobi
            jika Anda belanja online di Blibli.com. Anda gemar fotografi? Jangan khawatir, Anda bisa
            mendapatkan berbagai kamera beserta aksesorisnya dalam kategori kamera. Anda gemar menyukai
            gadget? Berbagai jenis produk smartphone bisa Anda dapatkan dalam kategori handphone & tablet.
            Untuk yang gemar melakukan aktivitas fisik seperti olahraga badminton, basketballs, bela diri,
            futsal, golf, lari hingga olahraga air dan aktivitas luar ruangan seperti hiking & camping,
            Anda bisa mendapatkan berbagai kebutuhan yang mendukung hobi Anda tersebut dalam kategori
            belanja  olahraga & aktivitas luar ruangan.
        </h3>
    );

}

export  function DetailProduct() {

    return(
        <Row>
            <Col>
                <img src={productImage} alt="" width="400"  className="imgProductItem"/>
            </Col>
        </Row>
    );
}

export function DetailArticle(){
    return (

        <h6 className="dtlTxtArticle">
            Anda juga bisa menemukan berbagai produk yang dapat memenuhi berbagai kebutuhan hobi
            jika Anda belanja online di Blibli.com. Anda gemar fotografi? Jangan khawatir, Anda bisa
            mendapatkan berbagai kamera beserta aksesorisnya dalam kategori kamera. Anda gemar menyukai
            gadget? Berbagai jenis produk smartphone bisa Anda dapatkan dalam kategori handphone & tablet.
            Untuk yang gemar melakukan aktivitas fisik seperti olahraga badminton, basketballs, bela diri,
            futsal, golf, lari hingga olahraga air dan aktivitas luar ruangan seperti hiking & camping,
            Anda bisa mendapatkan berbagai kebutuhan yang mendukung hobi Anda tersebut dalam kategori
            belanja  olahraga & aktivitas luar ruangan.
        </h6>
    );
}


export function Footer() {
    return(
        <div className="footer">
            <h3>www.heyblibli.com</h3>
        </div>
    );

}

export function CarouselMe() {
    return(

        <div className="carouselMe">
            <h1 className="txtPromo">Our Promo </h1>
            <Carousel>
                <div>
                    <img src={gif} width="900" />
                    <p className="legend">Our Promo 1</p>
                </div>
                <div>
                    <img src={article2} width="200" />
                    <p className="legend">Our Promo 1</p>
                </div>
                <div>
                    <img src={article3} width=""/>
                    <p className="legend">Our Promo 1</p>
                </div>
            </Carousel>
        </div>
    );
}
