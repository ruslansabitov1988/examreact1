import React, { useEffect, useState,Children, cloneElement } from 'react'
import "./Carusel.css"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// import CaruselImg1 from "../../image/carusel1.png"
// import CaruselImg2 from "../../image/carusel2.png"
const PAGE_WITH = 909

const Carusel = ({children}) => {

  const [pages,setPages] = useState([])
  const [offset,setOffset]=useState(0)
  const handlClickLeftArrow =()=>{
    console.log("Left")
    setOffset((currentOffset)=>{
      const newOffset = currentOffset- PAGE_WITH

      console.log(newOffset)
      return Math.max(newOffset,0)
    })
  }
  const handlClickRightArrow =()=>{
    console.log("Right")
    setOffset((currentOffset)=>{
      const newOffset = currentOffset+ PAGE_WITH

      const maxOffset = -(PAGE_WITH * (pages.length-1))

      console.log(newOffset)
      return Math.min(newOffset, maxOffset)
    })
  }

  useEffect(()=>{
    setPages(
      Children.map(children, child =>{
        return cloneElement(child, 
          {
            style:{
              height:"100%",
              minWidth: `${PAGE_WITH}px`,
              maxWidth: `${PAGE_WITH}px`
            }
          })
      })

    )
    
  }, [])

  return (
    <div className='carusel_conrainer'>
      <FaChevronLeft className="arrow" onClick={handlClickLeftArrow}/>
      <div className='carusel_gallery'>
        <div className='all-pages-container' 
        style={{
          transform:`translateX(${offset}px)`
        }}>
          {pages}
        </div>
           
      </div>
      <FaChevronRight className="arrow" onClick={handlClickRightArrow}/>

    </div>
  )
}

export default Carusel