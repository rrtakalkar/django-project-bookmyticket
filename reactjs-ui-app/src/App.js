import React from 'react';
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css"
import "./App.css"

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CountryList from "./components/country/CountryList.Component";
import StateTable from "./components/state/StateTable.Component";
import CityTable from "./components/city/CityTable.Component";
import EditCountry from "./components/country/EditCountry.Component";
import CinemaTable from "./components/cinema/CinemaTable.Component";
import MovieList from "./components/movie/MovieList.Component";
import BookMovieTicket from "./components/book/BookMovieTicket.Component";
import Welcome from "./components/Welcome.Component";
import About from "./components/About.Component";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>

              <Navbar.Brand>
                <Link to={"/"} className="nav-link">
                  BookMyTicket
                </Link>
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                  <NavDropdown title="User" id="basic-nav-dropdown">                    
                    <NavDropdown.Item href="/book/movie/ticket">
                      Book Movie Ticket
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/movies">Movie Shows</NavDropdown.Item>                  
                  </NavDropdown>
                </Nav>
                <Nav className="me-auto">
                  <NavDropdown title="Admin" id="basic-nav-dropdown">                                                            
                    <NavDropdown.Item href="/cinemas">Cinema</NavDropdown.Item>
                    <NavDropdown.Item href="#">Cinema Screen</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/movies">Movie</NavDropdown.Item>
                    <NavDropdown.Item href="#">Movie Show</NavDropdown.Item>                    
                    <NavDropdown.Divider />                    
                    <NavDropdown.Item href="/countries">Country</NavDropdown.Item>
                    <NavDropdown.Item href="/states">State</NavDropdown.Item>                    
                    <NavDropdown.Item href="/cities">City</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/book/movie/ticket">
                      Book Movie Ticket
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/about"} className="nav-link">
                    About
                  </Link>
                </Nav>
              </Nav>

            </Container>
          </Navbar>
        </header>

        <Container className="App-container">
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route path='/' element={<Welcome name="BookMyTicket" />} />
                  <Route path='/countries' element={<CountryList />} />
                  <Route path='/states' element={<StateTable />} />
                  <Route path='/cities' element={<CityTable />} />
                  <Route path='/country/edit/:id' element={<EditCountry />} />
                  <Route path='/cinemas' element={<CinemaTable />} />
                  <Route path='/movies' element={<MovieList />} />
                  <Route path='/book/movie/ticket' element={<BookMovieTicket />} />
                  <Route path='/about' element={<About />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;