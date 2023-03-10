import React, { useEffect, useState } from "react";


const ScrollBtn = ()=>{

    const [scrollTop,setScrollTop]=useState(false)

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 150){
                setScrollTop(true)
            }else{
                setScrollTop(false)
            }
        })

        
    },[])

    const scrollUp =()=>{
        window.scrollTo({
            top:10,
            behavior:"smooth"
        })
        console.log("SCROLL")
    }

    return(
        <div className="scrollcontent">
        {scrollTop &&(
            <button style={{
                position:"fixed",
                bottom:"50px",
                right:"50px",
                height:"50px",
                width:"50px",
                fontSize:"50px"
            }} onClick={scrollUp}>
                ^
            </button>
        )}
        </div>
    )
}

export default ScrollBtn