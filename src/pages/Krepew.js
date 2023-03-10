import React from "react";
import "./Door.css"
import { useVoid,useCartThree } from "../store";

const Krepew = ()=>{
    const prosto= useVoid((state) => state.catalogCart)
    const forCart = useCartThree((state)=>state.addMaterail)
    const addMaterialFunc =(id,title,price,url)=>{
        forCart(id,title,price,url)       
    }

    const cart = prosto.map(obj=>
        <div key={obj.id} className="product_for_content">  
  
            <span className="product_for_title">{obj.title}</span>
            <img className="product_for_img" src={obj.url} alt="img"/>
            <span className="product_for_price">Цена {obj.price} тг.</span>
            <span className="product_for_description">{obj.description} </span>
            <img className="product_for_basket" onClick={()=>addMaterialFunc(obj.id,obj.title,obj.price,obj.url)} src={obj.basket}/>
 
        </div>
    )

    return(
        <div className="container_block">
            <div className="container_block_content">
                {cart}
            </div>
            
        </div>
        )
}
export default Krepew;