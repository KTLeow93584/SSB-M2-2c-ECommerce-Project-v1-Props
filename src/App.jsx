// ==============================================
// Bootstrap Dependencies (Core CSS).
import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
// ==============================================
// Core React Dependencies.
import { useState } from 'react';
// ==============================================
// Local File Asset Dependencies.
import './App.css'

import { valentineHotDealsCatalogue } from './valentine-catalogue.jsx';
import { livingRoomThumbnailCatalogues } from './living-room-catalogue.jsx';
import { promoBanner } from './promo-banners.jsx';
// ==============================================
// Declarations.
const maxItemPerRow = 4;
// ==============================================
// Dropdown Components.
function RenderLanguageDropdown() {
  const [selectedItem, setSelectedItem] = useState("EN");

  const handleSelect = (eventKey, event) => {
    // eventKey contains the value of the selected item
    setSelectedItem(eventKey);
  };

  return (
    <Dropdown onSelect={handleSelect} className="d-flex justify-content-center me-2">
      <Dropdown.Toggle id="dropdown-basic" className="dropdown-options-container">
        {selectedItem}
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-options-container">
        <Dropdown.Item eventKey="EN" active={selectedItem === "EN"}>
          EN
        </Dropdown.Item>
        <Dropdown.Item eventKey="Malay" active={selectedItem === "Malay"}>
          Malay
        </Dropdown.Item>
        <Dropdown.Item eventKey="CN (Simplified)" active={selectedItem === "CN (Simplified)"}>
          CN (Simplified)
        </Dropdown.Item>
        <Dropdown.Item eventKey="CN (Traditional)" active={selectedItem === "CN (Traditional)"}>
          CN (Traditional)
        </Dropdown.Item>
        <Dropdown.Item eventKey="JP" active={selectedItem === "JP"}>
          JP
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

function RenderCurrencyDropdown() {
  const [selectedItem, setSelectedItem] = useState("$ USD - U.S. Dollar");

  const handleSelect = (eventKey, event) => {
    // eventKey contains the value of the selected item
    setSelectedItem(eventKey);
  };

  return (
    <Dropdown onSelect={handleSelect} className="d-flex justify-content-center me-2">
      <Dropdown.Toggle id="dropdown-basic" className="dropdown-options-container">
        {selectedItem}
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-options-container">
        <Dropdown.Item eventKey="USD ($) - U.S. Dollar" active={selectedItem === "USD ($) - U.S. Dollar"}>
          USD ($) - U.S. Dollar
        </Dropdown.Item>
        <Dropdown.Item eventKey="MYR - Malaysian Ringgit" active={selectedItem === "MYR - Malaysian Ringgit"}>
          MYR - Malaysian Ringgit
        </Dropdown.Item>
        <Dropdown.Item eventKey="Yuan (¥) - Chinese Yuan" active={selectedItem === "Yuan (Y) - Chinese Yuan"}>
          Yuan (¥) - Chinese Yuan
        </Dropdown.Item>
        <Dropdown.Item eventKey="Yen (¥) - Japanese Yen" active={selectedItem === "Yen (¥) - Japanese Yen"}>
          Yen (¥) - Japanese Yen
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

function RenderCountryDropdown() {
  const [selectedItem, setSelectedItem] = useState("United States");

  const handleSelect = (eventKey, event) => {
    // eventKey contains the value of the selected item
    setSelectedItem(eventKey);
  };

  return (
    <Dropdown onSelect={handleSelect} className="d-flex justify-content-center me-2">
      <Dropdown.Toggle id="dropdown-basic" className="dropdown-options-container">
        {selectedItem}
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-options-container">
        <Dropdown.Item eventKey="United States" active={selectedItem === "United States"}>
          United States
        </Dropdown.Item>
        <Dropdown.Item eventKey="Malaysia" active={selectedItem === "Malaysia"}>
          Malaysia
        </Dropdown.Item>
        <Dropdown.Item eventKey="China" active={selectedItem === "China"}>
          China
        </Dropdown.Item>
        <Dropdown.Item eventKey="Japan" active={selectedItem === "Japan"}>
          Japan
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
// ==============================================
// Top Navigation Render.
function RenderNavPanel() {
  const [selectedItem, setSelectedItem] = useState("EN");

  const handleSelect = (eventKey, event) => {
    // eventKey contains the value of the selected item
    setSelectedItem(eventKey);
  };

  return (
    <Container fluid className="w-100 header-container rounded">
      <Navbar expand="lg">
        <Container fluid className="d-flex align-items-start">
          <Navbar.Brand href="#home">
            <Image src={new URL("./assets/logo.webp", import.meta.url).href} width="85px" />
          </Navbar.Brand>

          <div className="d-flex" style={{ width: "50vw" }}>
            <Form.Control type="query-item-name" id="query-item-name" className="me-2" style={{ minWidth: "30%" }}
              placeholder="Search item name here" aria-describedby="item-search"
            />
            {RenderLanguageDropdown()}
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#orders" className="text-links-button">Orders</Nav.Link>
              <Nav.Link href="#cart" className="text-links-button">Cart</Nav.Link>
              <Nav.Link href="#logout" className="text-links-button">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container >
      </Navbar >
    </Container>
  );
}
// ==============================================
// Grid-based (Row -> Column) Product Render.
function RenderProductGrid() {
  const results = [];

  for (let i = 0; i < valentineHotDealsCatalogue.length; ++i) {
    const catalogueItem = valentineHotDealsCatalogue[i];
    const itemFullImageSrcPath = "./assets/" + catalogueItem.src;

    results.push(
      <Col key={`hot-deals-catalogue-${i}`} className="col-12 col-sm-6 col-lg-4 col-xxl-3 mb-2">
        <Card className="card-container-product align-items-center text-center bg-light" data-bs-theme="light">
          <Card.Img variant="top" className="card-thumbnail-product" src={new URL(itemFullImageSrcPath, import.meta.url).href} />

          <Card.Body className="w-100">
            <Card.Title className="fs-5 mb-2">{catalogueItem.name}</Card.Title>

            <div className="d-flex flex-row justify-content-evenly">
              <Card.Text className={`fs-3 fw-bold mb-2 
                ${catalogueItem.discountedCost !== null ? "text-danger text-decoration-line-through" : "text-success"}`}>
                ${catalogueItem.cost}
              </Card.Text>

              <Card.Text className={`fs-3 fw-bold mb-2 ${catalogueItem.discountedCost !== null ? "" : "d-none"}`}>
                ➵💗
              </Card.Text>

              <Card.Text className={`fs-3 text-success fw-bold mb-2 ${catalogueItem.discountedCost !== null ? "" : "d-none"}`}>
                ${catalogueItem.discountedCost}
              </Card.Text>
            </div>

            <hr className="border-2 horizontal-line-text" />

            <div className="d-flex flex-column align-items-center">
              <Button className="card-cart-button-product">Add to Cart</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  }
  return results;
}
// ==============================================
// Grid-based (Single Row) Product Render.
function RenderPromotionBannerGrid(promoList, suffix) {
  const results = [];

  for (let i = 0; i < promoList.length; ++i) {
    const promoItem = promoList[i];
    const itemFullImageSrcPath = "./assets/" + promoItem.src;

    results.push(
      <Col key={`promo-banner-${suffix}-catalogue-${i}`} className="col-12 col-sm-6 col-lg-4 col-xxl-3 mb-2">
        <Card className="card-container-banner align-items-start justify-content-center bg-light" data-bs-theme="light">
          <Card.Body className="d-flex flex-column align-items-start justify-content-center card-body-banner w-100">
            <Card.Title variant="top" className="card-title-banner text-start w-100">{promoItem.name}</Card.Title>
            <Card.Img className="card-img-banner text-center" src={new URL(itemFullImageSrcPath, import.meta.url).href} />
          </Card.Body>

          <Card.Body className="d-flex flex-column align-items-start justify-content-center card-body-banner w-100 px-0">
            <Button variant="link" className="card-link-banner text-links-banner-button text-start">{promoItem.buttonDescription}</Button>
          </Card.Body>
        </Card>
      </Col >
    );
  }
  return results;
}
// ==============================================
// Carousel-based (1 Row, non-sliding with ["<-" "->"] buttons) Product Render.
function RenderProductCarousel() {
  let startIndex = 0;
  const itemHTMLList = [];

  while (startIndex < livingRoomThumbnailCatalogues.length) {
    itemHTMLList.push(RenderProductCarouselItem(startIndex, startIndex / maxItemPerRow));
    startIndex += maxItemPerRow;
  }

  return (
    <Container id="top-seller-carousel-container" fluid className="top-seller-container rounded">
      <p className="fs-5 mt-2 fw-bold">International Top Sellers in Living Room</p>
      <Carousel id="top-seller-carousel" className="pt-2 pb-4" interval="60000">
        {itemHTMLList}
      </Carousel>
    </Container>
  );
}

function RenderProductCarouselItem(startIndex, itemIndex) {
  const rowItems = [];

  for (let i = startIndex; i < Math.min(livingRoomThumbnailCatalogues.length, startIndex + maxItemPerRow); ++i) {
    const catalogueItem = livingRoomThumbnailCatalogues[i];
    const itemFullImageSrcPath = "./assets/" + catalogueItem.src;

    rowItems.push(
      <Col id={`carousel-item-${i}`} className="col-2 mx-0 px-0">
        <a href="#">
          <Image className="mx-0" width="100%" height="auto"
            src={new URL(itemFullImageSrcPath, import.meta.url).href} />
        </a>
      </Col>
    );
  }

  return (
    <Carousel.Item id={`carousel-item-${itemIndex}`}>
      <Row className="d-flex w-100 justify-content-evenly">
        {rowItems}
      </Row>
    </Carousel.Item>
  );
}
// ==============================================
// Footer Section.
function RenderFooter() {
  return (
    <Container fluid className="pt-5">
      {/* Footer Glossary Section */}
      <Row className="justify-content-center">
        <Col className="col-md-2 col-sm-5 col-11 mb-3">
          <p className="fs-5 fw-bold text-non-links mt-0 mb-2">Get to Know Us</p>
          {RenderGlossaryLinks("Careers")}
          {RenderGlossaryLinks("Blog")}
          {RenderGlossaryLinks("About Niagara")}
          {RenderGlossaryLinks("Investor Relations")}
          {RenderGlossaryLinks("Investor Relations")}
          {RenderGlossaryLinks("Niagara Services", false)}
        </Col>
        <Col className="col-md-3 col-sm-5 col-11 mb-3">
          <p className="fs-5 fw-bold text-non-links mt-0 mb-2">Begin your Business Ventures with Us</p>
          {RenderGlossaryLinks("Becoming an Affiliate")}
          {RenderGlossaryLinks("Becoming a Products Merchant")}
          {RenderGlossaryLinks("Publishing App Services on our Platform")}
          {RenderGlossaryLinks("How to Self-Publish")}
          {RenderGlossaryLinks("More Info on Making Money with Us, false")}
          {RenderGlossaryLinks("Niagara Services", false)}
        </Col>
        <Col className="col-md-3 col-sm-5 col-11 mb-3">
          <p className="fs-5 fw-bold text-non-links mt-0 mb-2">Niagara Services</p>
          {RenderGlossaryLinks("Niagara Business Card")}
          {RenderGlossaryLinks("Niagara E-Points Shopping")}
          {RenderGlossaryLinks("Top-up your Niagara E-Wallet")}
          {RenderGlossaryLinks("Physical Gift Cards", false)}
        </Col>
        <Col className="col-md-3 col-sm-5 col-11 mb-3">
          <p className="fs-5 fw-bold text-non-links">Let Us Help You/Q&A</p>
          {RenderGlossaryLinks("Niagara's Efforts against COVID-19")}
          {RenderGlossaryLinks("Your Accounts")}
          {RenderGlossaryLinks("Your Order History")}
          {RenderGlossaryLinks("Return and Replacement Policies")}
          {RenderGlossaryLinks("Manage Your Devices")}
          {RenderGlossaryLinks("Niagara Pocket Pal Assistant")}
          {RenderGlossaryLinks("Help", false)}
        </Col>
      </Row>

      <hr className="border border-2 mt-5" />

      {/* Footer Navigation Section */}
      <Row className="justify-content-center mt-4 mb-0">
        <Col className="d-flex flex-row align-items-center justify-content-center justify-content-lg-end col-lg-6 col-12 mx-0 mb-3">
          <a href="#">
            <Image src={new URL("./assets/logo.webp", import.meta.url).href} className="me-3" width="85px" />
          </a>
          {RenderLanguageDropdown()}
        </Col>
        <Col className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start col-lg-6 col-12 mx-0 mb-3">
          {RenderCurrencyDropdown()}
          {RenderCountryDropdown()}
        </Col>
      </Row>

      <hr className="border border-2 mt-2" />

      {/* Footer Copyright Section */}
      <Row className="justify-content-center mt-4 mb-0">
        <Col className="d-flex flex-column align-items-center justify-content-center col-12 mx-0">
          <div>
            <a href="#" className="text-links me-3" target="_blank" rel="noopener noreferrer">Terms and Condition of Use</a>
            <a href="#" className="text-links me-3" target="_blank" rel="noopener noreferrer">Privacy Notice</a>
            <a href="#" className="text-links" target="_blank" rel="noopener noreferrer">Ads Privacy Choice</a>
          </div>
          <p className="fs-6 text-non-links">© 2024-2024, Niagara.com, or its affiliates.</p>
        </Col>
      </Row>
    </Container >
  );
}

function RenderGlossaryLinks(context, addNewLine = true, link = "#") {
  return (
    <>
      <a href={link} className="text-links" target="_blank" rel="noopener noreferrer">{context}</a>
      {(addNewLine === true ? <br /> : "")}
    </>
  );
}
// ==============================================
function App() {
  return (
    <>
      <div data-bs-theme="dark" className="page-overlay">
        {/* Header Panels Section */}
        <div id="nav-panel-group" className="header-container w-100">
          {RenderNavPanel()}
        </div>
        {/* Content Body Section */}
        <Container fluid className="d-flex flex-column align-items-center w-100 content-body">
          {/* Title */}
          <Row>
            <Col className="col-12">
              <div className="mt-3" style={{ width: "55vw" }}>
                <p className="fs-3 fw-bold w-30 text-center">
                  Shower your partner with your affection! ❤️🛍️
                </p>
                <p className="fs-3 fw-bold w-30 text-center">
                  #ValentinesDay #ShopLove
                </p>
              </div>
            </Col>
          </Row>
          {/* Catalogues - Hot Sales Event */}
          <Row className="justify-content-center mb-5" style={{ width: "70%" }}>
            {RenderProductGrid()}
          </Row>
          {/* Catalogues - Banner #1 */}
          <Row className="justify-content-center mb-5" style={{ width: "70%" }}>
            {RenderPromotionBannerGrid(promoBanner.row1)}
          </Row>
          {/* Catalogues - Category Sales */}
          <Row className="justify-content-center mb-5" style={{ width: "70%" }}>
            {RenderProductCarousel()}
          </Row>
          {/* Catalogues - Banner #1 */}
          <Row className="justify-content-center mb-3" style={{ width: "70%" }}>
            {RenderPromotionBannerGrid(promoBanner.row2)}
          </Row>
        </Container>
        {/* Pre-Footer (Return to Top) Section */}
        <div className="d-flex flex-row justify-content-center pre-footer-container">
          <button onClick={() => window.scrollTo({ top: 0, left: 0, behaviour: "smooth" })}
            className="w-100 text-links-button pre-footer-button">Return to Top</button>
        </div>
        {/* Footer Section */}
        <div className="w-100 pb-3 footer-container">
          {RenderFooter()}
        </div>
      </div >
    </>
  )
}

export default App
// ==============================================
