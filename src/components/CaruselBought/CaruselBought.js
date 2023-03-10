// import React, { useEffect, useState,Children, cloneElement } from 'react'
// import "./CaruselBought.css"
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// // import CaruselImg1 from "../../image/carusel1.png"
// // import CaruselImg2 from "../../image/carusel2.png"
// const PAGE_WITH = 1000

// const CaruselBought = ({children}) => {

//   const [pages,setPages] = useState([])
//   const [offset,setOffset]=useState(0)
//   const handlClickLeftArrow =()=>{
//     console.log("Left")
//     setOffset((currentOffset)=>{
//       const newOffset = currentOffset- PAGE_WITH

//       console.log(newOffset)
//       return Math.max(newOffset,0)
//     })
//   }
//   const handlClickRightArrow =()=>{
//     console.log("Right")
//     setOffset((currentOffset)=>{
//       const newOffset = currentOffset+ PAGE_WITH

//       const maxOffset = -(PAGE_WITH * (pages.length-1))

//       console.log(newOffset)
//       return Math.min(newOffset, maxOffset)
//     })
//   }

//   useEffect(()=>{
//     setPages(
//       Children.map(children, child =>{
//         return cloneElement(child, 
//           {
//             style:{
//               height:"100%",
//               minWidth: `${PAGE_WITH}px`,
//               maxWidth: `${PAGE_WITH}px`
//             }
//           })
//       })

//     )
    
//   }, [])

//   return (
//     <div className='caruselBought_conrainer'>
//       <FaChevronLeft className="arrow_caruselBought" onClick={handlClickLeftArrow}/>
//       <div className='carusel_gallery_caruselBought'>
//         <div className='all-pages-container_caruselBought' 
//         style={{
//           transform:`translateX(${offset}px)`
//         }}>
//           {pages}
//         </div>
           
//       </div>
//       <FaChevronRight className="arrow_caruselBought" onClick={handlClickRightArrow}/>

//     </div>
//   )
// }


// export default CaruselBought;