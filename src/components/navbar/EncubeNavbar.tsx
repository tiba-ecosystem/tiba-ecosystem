import React, { useContext } from 'react';
import { Container, Nav, NavDropdown, Form, Button, Navbar } from 'react-bootstrap';
import { globalContext } from '../../GlobalContext';

const EncubeNavbar = () => {
  const { setShowSignInModal, setCurrentScreen } = useContext(globalContext);

  return (
    <Navbar bg='light' expand='lg'>
      <Container fluid>
        {/* <Navbar.Brand href='#'>Encube</Navbar.Brand> */}
        {/* <Navbar.Toggle aria-controls='navbarScroll' /> */}
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: '100px' }} navbarScroll>
            <NavDropdown title={<span className='h5 text-dark'>Encube</span>}>
              <NavDropdown.Item onClick={() => setCurrentScreen('homePage')} /* href='#action3' */>
                Home page
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setCurrentScreen('insumos')} /* href='#action3' */>
                Insumos
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => setCurrentScreen('categorias')} /* href='#action4' */
              >
                Categorías
              </NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href='#action5'>Something else here</NavDropdown.Item> */}
            </NavDropdown>
            {/* <Nav.Link href='#action1'>Home</Nav.Link>
            <Nav.Link href='#action2'>Link</Nav.Link>
            <Nav.Link href='#' disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className='d-flex'>
            {/* <Form.Control type='search' placeholder='Search' className='me-2' aria-label='Search' /> */}
            <Button variant='outline-primary' onClick={() => setShowSignInModal(true)}>
              Sign in
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default EncubeNavbar;
