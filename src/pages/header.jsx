import { Link  } from "react-router-dom"


let Header =() =>{
    return(
    <header className="text-gray-100 body-font bg-blue-900 shadow-lg">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span className="text-gray-100 ml-3 text-xl">E-Com</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link to={"/"}  className="mr-5 hover:text-gray-900">Home</Link>
      <Link to={"about"} className="mr-5 hover:text-gray-900">About</Link>
      <Link className="mr-5 hover:text-gray-900">Contact</Link>
    </nav>
    
  </div>
</header>

    )
}
export default Header