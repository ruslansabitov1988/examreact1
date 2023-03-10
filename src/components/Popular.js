import "./Popular.css"
import {React, useEffect, useState} from "react"



import { useCartOne } from "../store";
import { useCartTwo } from "../store";
import { useCartThree } from "../store";

const Popular = ()=>{

    const [content1, setContent1]=useState('')
    const [content2, setContent2]=useState("")
       
    const arrContent1=  useCartOne(state=>state.materail)
    const arrContent2= useCartTwo(state=>state.materail)

    

    useEffect(()=>{     
        setContent1(firstContent)
    },[])
    useEffect(()=>{     
        if(!setContent1){
            setContent2(secondContent)
        }
        
    },[])

    const handleClick1 = ()=>{
        setContent2("")
        setContent1(firstContent)
        

    }
    const handleClikc2 = ()=>{
        
        setContent1('')
        setContent2(secondContent)
       
        
    }
    const forCart = useCartThree((state)=>state.addMaterail)
    const addMaterialFunc =(id,title,price,url)=>{
        forCart(id,title,price,url)       
    }
    

    const firstContent = arrContent1.map(obj=>
        
        <div className="arrContent1_box" key={obj.id}>
            <div className="arrContent1_div">
                <img className="arrContent1_img" src={obj.url} alt="img"/>
            </div>
                <span className="arrContent1_title">{obj.title}</span>
             
                <span className="arrContent1_count">В наличии {obj.count} шт.</span>

            <span className="arrContent1_price">{obj.price} тг.</span>
            <img src={obj.basket} alt="img" className="arrContent1_basket" onClick={()=>addMaterialFunc(obj.id,obj.title,obj.price,obj.url)}/>
        </div>
        
    )
    
    const secondContent = arrContent2.map(obj=>
        <div className="arrContent1_box" key={obj.id}>
            <div className="arrContent1_div">
                <img className="arrContent1_img" src={obj.url} alt="img"/>
            </div>
                <span className="arrContent1_title">{obj.title}</span>
            
                <span className="arrContent1_count">В наличии {obj.count} шт.</span>

            <span className="arrContent1_price">{obj.price} тг.</span>
            <img src={obj.basket} alt="img" className="arrContent1_basket" onClick={()=>addMaterialFunc( obj.id,obj.title,obj.price,obj.url)}/>
        </div>
    )

   


    return(
        <div className="container_popular">
            <div className="container_popular_content">
                <span className="container_popular_content_text">Новинки</span>
            <div className="container_popular_box">
                <div onClick={handleClick1} className="slider_price1">Популярные товары</div>
                <div onClick={handleClikc2} className="slider_price2">Цена снижена</div>
            </div>

            <div className="popular_content" >

                <div className="content_1"  id="content_1_id"  >
                   
                    <div className=" content_1_first">
                        {content1}
                        {content2}  
                    </div>
                </div>

            </div>

            </div>
            
            
            
            
        </div>
    )

    
}

export default Popular