import {
    Image,
    Navbar,
    Container,
    Nav,
    Offcanvas,
} from "react-bootstrap";
import Logo from './images/clapperboard.png';

function NavPerm() {
    return (
        <div>
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#" style={{fontSize:"2em", color:"darkred"}}><Image width="30px" src={Logo}></Image> What's Next?</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header style={{backgroundColor:"lightcyan"}} closeButton>
                            <Offcanvas.Title style={{color:"darkcyan"}}  id="offcanvasNavbarLabel">MENU</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body style={{backgroundColor:"lightcyan"}}>
                            <Nav className="justify-content-end flex-grow-1 pe-3"  bg="dark" >
                                <Nav.Link href="/">Anasayfa</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link> 
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}


export default NavPerm;
