import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ROUTE from '../../routes/routes';

const Header = ({
    shoes
}) => {
    const navigate = useNavigate();
    const id = shoes[0].id;
    
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand onClick={() => navigate(ROUTE.HOME)}>Shop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate(ROUTE.HOME)}>Home</Nav.Link>
                        <Nav.Link onClick={() => navigate(ROUTE.ABOUT)}>About</Nav.Link>
                        <Nav.Link onClick={() => navigate(`/detail/${id}`)}>Detail</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;