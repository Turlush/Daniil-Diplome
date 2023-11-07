import Link from "next/link"
import  Bootstrap  from "bootstrap"

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

   return <> 
        <h1>Header</h1> 
        
        {navLinks.map((navLink, item) => 
        <button key={item} className="btn btn-outline-primary" style={{color: navLinks.color}}>
            <Link href={navLink.href}>
                     <a>{navLink.name}</a>
            </Link> 
         </button>
        )}
      </>
}
export default Header