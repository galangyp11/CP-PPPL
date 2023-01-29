import {
  Container, 
  Nav, 
  Navbar, 
  NavDropdown, 
  Button
} from 'react-bootstrap';
import logo from "./../img/haierd-logo.png"
import "./Homepage.css"
import { HashLink } from 'react-router-hash-link';

const NavigationBar = ({ handleOpen }) => {

    return ( 
     
        <Navbar bg="white" expand="lg" fixed="top" className="border-bottom border-opacity-10 ">
          <Container>
            <Navbar.Brand href="/"><img id="logo" src={logo} alt="logo-haierd"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="float-end ms-auto">
              <HashLink to="/#home" className='text-decoration-none'>
                 <Navbar.Text className='mx-2 '>Beranda </Navbar.Text>
                </HashLink>
                <HashLink to="/#about" className='text-decoration-none'>
                  <Navbar.Text className='mx-2 '>Tentang </Navbar.Text>
                </HashLink>
                <HashLink to="/#map" className='text-decoration-none'>
                 <Navbar.Text className='mx-2 '>Lokasi </Navbar.Text>
                </HashLink>
                <HashLink to="/#galeri" className='text-decoration-none'>
                 <Navbar.Text className='mx-2 '>Galeri </Navbar.Text>
                </HashLink>
              </Nav>
                <Button className="mx-2 d-flex justify-content-center rounded-pill" onClick={handleOpen} style={{ backgroundColor:"#456b97" }}>Hubungi Kami</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  
     );    
}
 
export default NavigationBar;
