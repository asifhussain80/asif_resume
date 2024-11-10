export default function Header(){
    return(

 <div className="bg-gray-100 text-gray-800">
        <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
         <h1 className="text-3xl font-bold">
          Asif Hussain
         </h1>
         <nav>
          <ul className="flex space-x-4">
           <li>
            <a className="hover:underline" href="/about">
             About
            </a>
           </li>
           <li>
            <a className="hover:underline" href="/education">
             Education
            </a>
           </li>
           <li>
            <a className="hover:underline" href="/skills">
             Skills
            </a>
           </li>
           <li>
            <a className="hover:underline" href="/contact">
             Contact
            </a>
           </li>
          </ul>
         </nav>
        </div>
       </header>
       </div>
       
    )
}