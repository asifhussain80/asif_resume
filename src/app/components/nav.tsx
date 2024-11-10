export default function Navbar(){
    return (
        <nav>
        <ul className="flex space-x-4">
         <li>
         <a className="hover:underline" href="#about">
           About
          </a>
         </li>
         <li>
          <a className="hover:underline" href="#education">
           Education
          </a>
         </li>
         <li>
          <a className="hover:underline" href="#skills">
           Skills
          </a>
         </li>
         <li>
          <a className="hover:underline" href="#contact">
           Contact
          </a>
         </li>
        </ul>
       </nav>
    )
}