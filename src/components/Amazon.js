import React from 'react'
import list from "../Data"
import "../styles/amazon.css"
import Cards from "../components/Cards"


const Amazon = ({handleClick}) => {
  return (
   <section>
    {
        list.map((item)=>(  
            <Cards item={item} key={item.id} handleClick={handleClick} />
        ))
    }
   </section>
  )
}

export default Amazon
