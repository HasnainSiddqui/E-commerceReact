
import { Link } from "react-router-dom"



let Cards = ({title , description , price , img , id , category , learnMore}) =>{



  
    return(
<Link to={`productsCard/${id}`} className="p-4 md:w-1/3 " >
      <div key={id}>
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={img}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs text-center title-font font-medium text-gray-400 mb-1">
              {category}
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {title}
            </h1>
            <p className="leading-relaxed mb-3">
              {description}
            </p>
            <div className="flex items-center flex-wrap mx-5 font-bold">
            ${price}
             
              <span className="text-gray-900 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                
               
                <a onClick={learnMore} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
                </a>
              </span>
             
            </div>
          </div>
        </div>
      </div>
      
 
      </Link>

    )
}

export default Cards