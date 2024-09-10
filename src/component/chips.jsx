let Chips =({category , id , click, isChozen })=>{
    
   let {name} = category
   


    
     
     
     return(
         <div onClick={click} className={`cursor-pointer hover:bg-gray-200 hover:text-black shadow p-2 m-2 border border-blue-500 rounded-lg ${isChozen ? 'bg-blue-600 text-white' : 'bg-gray-50 text-black'  }`}>
 
             <h1 key={id}>{name}</h1>
         </div>
     )
 }
 export default Chips