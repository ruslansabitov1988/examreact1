import React, { useEffect, useState } from "react";
import "./Cart.css"
import { useCartThree } from "../store";

const Cart =()=>{
    const [value,setValue] = useState([])
    const materail= useCartThree((state) => state.materailCart)
    
    console.log(materail)
    let total = 0
    const count = materail.length
    for(let i = 0; i < materail.length; i++){
        total += materail[i].price
    }

    const cart = materail.map(obj=>
        <div key={obj.id} className="cart_content">  
  
            <span className="cart_title">{obj.title}</span>
            <img className="cart_img" src={obj.url} alt="img"/>
            <span className="cart_price">Цена {obj.price} тг.</span>
 
        </div>
    )
    
    useEffect(()=>{
        if(materail){
            setValue(`Оформить заказ, кол-во: ${count}. Итого: ${total} тг.`)
        }else{
            setValue('Корзина пустая')
        }
    },[])

    return(
        <div className="cart_container">
            <div className="cart_box1">
                {cart}
            </div>
            <div className="cart_box2">
               <b> {value}</b>
            </div>
        </div>
    )
}

export default Cart