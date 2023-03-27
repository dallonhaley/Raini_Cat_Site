import { Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function Navigation() {
    return(
        <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to={"/"} style={linkStyle}>Raini-Cat</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link>
                        <Link to={"/"} style={linkStyle}>Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to={"/blog"} style={linkStyle}>Blog</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to={"/gallery"} style={linkStyle}>Gallery</Link>
                    </Nav.Link>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Outlet/>
        </>
    );
}

export default Navigation;

const linkStyle = {
    color: 'black',
    textDecoration: 'none'
}