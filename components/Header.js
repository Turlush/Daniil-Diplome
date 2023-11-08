import Link from "next/link"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
const navLinks = [
   {
      href: '/',
      name: 'Main page',
      color: 'F111111'
   },
   {
      href: '/duckduck',
      name: 'another page',
      color: 'F111111'
   },
   {
      href: '#',
      name: 'another page',
      color: 'F111111'
   },
]
   const SOCIALS ={
      twitter: 'https://twitter.com/#',
       vk: 'https://vk.com/#',
       youtube: 'https://www.youtube.com/#',
       telegram: 'https://t.me/89998142525',
       whatsapp: 'https://wa.me/79998142525?text=%D0%A1%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B5%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20skalachurch',
       fbook: '',
   }

   return <> 
        {/* <h1>Header</h1>  */}
        {/* {navLinks.map((navLink, item) => 
        <button key={item} className="btn btn-outline-primary" style={{color: navLinks.color}}>
            <Link href={navLink.href}>
                     <a>{navLink.name}</a>
            </Link> 
         </button>
        )} */}

            <Navbar expand="lg" className="bg-body-tertiary">
               <Container>
                  <Navbar.Brand href="/">BigPc</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                     <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">

                        <NavDropdown title="Компьютеры" id="basic-nav-dropdown">
                           <NavDropdown.Item href="/duckduck">Большой</NavDropdown.Item>
                           <NavDropdown.Item href="/duckduck">Средний</NavDropdown.Item>
                           <NavDropdown.Item href="/duckduck">Малый</NavDropdown.Item>
                              <NavDropdown.Divider/>
                           <NavDropdown.Item href="/duckduck">О комплектующих</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Периферия" id="basic-nav-dropdown">
                           <NavDropdown.Item href="/duckduck">Клавиатуры</NavDropdown.Item>
                           <NavDropdown.Item href="/duckduck"> Игровые мышки</NavDropdown.Item>
                           <NavDropdown.Item href="/duckduck">Гарнитура</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="/chairs">Кресла</Nav.Link>

                        {/* <div>
                           <a href={SOCIALS.youtube}><i className="bi bi-youtube"/>dd</a>
                           <a href={SOCIALS.telegram}><i className="bi bi-telegram"/>dddddd</a>
                           <a href={SOCIALS.whatsapp}><i className="bi bi-whatsapp"/>dd</a>
                        </div> */}

                        </Nav>
                     </Navbar.Collapse>
                  </Container>
               </Navbar>
      </>
}
export default Header