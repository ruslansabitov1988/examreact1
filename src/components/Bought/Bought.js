import React, {useEffect, useRef, useState } from 'react'
import "./Bought.css"
import CaruselBought from '../CaruselBought/CaruselBought'
import tumba from "../../image/tumba.jpg"
import tumba2 from "../../image/tumba2.jpeg"
import gips1 from "../../image/gips1.jpg"
import gips2 from "../../image/gips2.jpg"
import kleigermetik from "../../image/klei-germetik.jpg"
import moika from "../../image/moika.jpg"
import zatirka from "../../image/zatirka.jpg"
import volma from "../../image/volma.png"
import wrup from "../../image/wrup.jpg"

import Basket from "../../image/basket.png"


const Bought = ()=>{
    const slider = useRef((null))
    
    const [prev, setPrev]= useState(false)
    const [next, setNext]= useState(false)
    const [items,setitems]= useState([
        {
        id:1,
        url:tumba,
        amount:8,
        title: "Тумба Mixline Вега 75 см",
        price:29500,
        basket:Basket
        },
        {
        id:2,
        url:tumba2,
        amount:10,
        title: "Тумба Mixline Вега 70 см",
        price:29000,
        basket:Basket
        },
        {
        id:3,
        url:gips1,
        amount:108,
        title: "Гипсакартон влагостойкий",
        price:2000,
        basket:Basket
        },
        {
        id:4,
        url:gips2,
        amount:86,
        title: "Гипсакартон влагостойкий Danocips",
        price:2300,
        basket:Basket
        },
        {
        id:5,
        url:kleigermetik,
        amount:53,
        title: "Клей герметик Tangit 12*50 ml",
        price:3751,
        basket:Basket
        },
        {
        id:6,
        url:moika,
        amount:18,
        title: "Мойка",
        price:1700,
        basket:Basket
        },
        {
        id:7,
        url:zatirka,
        amount:100,
        title: "Затирка Серезит Comfort для швов",
        price:1390,
        basket:Basket
        },
        {
        id:8,
        url:volma,
        amount:258,
        title: "Шпаклевка гипосвая, 20 кг",
        price:2700,
        basket:Basket
        },
        {
        id:9,
        url:wrup,
        amount:6605,
        title: "Шруп 6*40",
        price:7,
        basket:Basket
        }
    ])
    

    const itemsHadler = ()=>{
        console.log("Вставь ссылку")
    }


    let position = 250

    const prevHandler = ()=>{
        console.log(slider.current.childNodes)
        if (position === 0){
            setPrev(true)
        }else{
            position = 0
            slider.current.childNodes.forEach((element)=>{
            element.style = `transform: translateX(${position}px)`
        })
        }

        
    }
    const nextHandler = ()=>{
        if(position === -(items.length - 5) *250-250 ){
            setNext(true)
            setPrev(false)
        }else{
            setPrev(false)
            position -= 250
            slider.current.childNodes.forEach((element)=>{
                element.style = `transform: translateX(${position}px)`
            })
        }
        console.log("next")
       
    }

   return(
    <div className='container_bought_slider'>
        <span className='span_font'> Недавно купили </span>
        <div className='container_bought_slider_track' ref={slider}>
            
            {items.map(obj=>{
                return (
                    <div key={obj.id} className="container_bought_track_slider_items" onClick={itemsHadler}> 
                        <img className='container_bought_track_slider_items_img' src={obj.url} alt="img"/>
                        <div>В наличии: {obj.amount} шт.</div>
                        <div> {obj.title} </div>
                        <div> {obj.price} тг</div>
                        <img src={obj.basket} alt="img" className='container_bought_track_slider_items_basket'/>
                    </div>
                )
            })}
        </div>
        <button className="container_bought_slider_button container_bought_slider_button_prev" onClick={prevHandler}>{`<`}</button>
        <button className="container_bought_slider_button container_bought_slider_button_next" onClick={nextHandler}>{`>`}</button>
    </div>
   )
}

export default Bought