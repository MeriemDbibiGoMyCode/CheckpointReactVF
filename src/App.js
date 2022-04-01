import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Form,
  Navbar,
  Container,
  NavDropdown,
  Nav,
} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#accueil">More Life Nutrition</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#produits">Produits</Nav.Link>
              <Nav.Link href="#panier">Panier</Nav.Link>
              <NavDropdown title="Se connecter" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#compte">Votre Compte</NavDropdown.Item>
                <NavDropdown.Item href="#commande">
                  Vos Commandes
                </NavDropdown.Item>
                <NavDropdown.Item href="#favoris">Vos Favoris</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#aide">Aide</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#infos">Plus d'Info</Nav.Link>
              <Nav.Link eventKey={2} href="#contact">
                Nous Contacter
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1>Veuillez Remplir Ce Formulaire</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>adresse mail</Form.Label>
          <Form.Control type="email" placeholder="Entrez votre email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control
            type="password"
            placeholder="Entrez votre mot de passe"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Cochez ici" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Valider
        </Button>
      </Form>
    </div>
  );
}

export default App;
