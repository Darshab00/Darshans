import React,{useState} from 'react';
import {Navbar,Container,Nav,NavDropdown,Form,Button} from 'react-bootstrap';
import { Routes,Route,Link } from 'react-router-dom';
import About from './About';
import Error from './Error';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Result from './Result';


const Botnavbar = () => {
  const [Search, setSearch] = useState('Ocean');
  const inputEv=(event)=>{
      setSearch(event.target.value)
  }
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to={'/'}>Drashan</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Nav.Link as={Link} to={'/contact'}>Contact</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={inputEv}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
<Result Search={Search}/>
<Routes>
<Route exact path='/' element={<About/>}/>
<Route element={<Error/>}/>
<Route exact path='/contact' element={<Contact/>}/>
</Routes>
    </>
  )
}

export default Botnavbar