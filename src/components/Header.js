import {React, useState} from "react"
import "./Header.css"
import Logo from "../image/logo.svg"
import Compare from "../image/compare.png"
import User from "../image/user.png"
import Basket from "../image/basket.png"
import Search from "../image/search.png"
import Menu from "../image/menu.png"
import Modal from "./Modal/Modal.js"
import { Link } from "react-router-dom";
import { useCartThree } from "../store";
import { useSearchInput} from "../store";


function Header (){
    const [modalActive, setModalActiv] = useState(false)
    const materail= useCartThree((state) => state.materailCart)
    const countMaterial = materail.length
    const [searchProduct, setSearchProduct] = useState("")
    const searchCart = useSearchInput((state)=>state.addCatalog)
    const [bugs,setBugs] = useState('')
    const handleSearch =(title)=>{
        console.log("search", searchProduct)
        searchCart(title)
        if (searchProduct === "дверь" || searchProduct === "Дверь"){
            setBugs("door")
        }
        if (searchProduct === "клей" || searchProduct === "Клей"){
            setBugs("germetik")
        }
    }
    const inputValue = (event)=>{
        setSearchProduct(event.target.value)
    }
   
     return(
        <div className="container_header">
            <div className="wrapper">
                <div className="first">
                    <div className="delivery">
                        <Link to="delivery">
                        <p>Доставка</p>
                        </Link>
                        
                       
                    </div>
                    <div className="contacts">
                        
                    <Link to="contacts">
                        <p>Контакты </p>
                    </Link>
                    </div>
                    <div className="bayer">                        
                        <Link to='aboutus'><p> О нас</p></Link>
                    </div>
                    <div className="bayer">
                        <Link to="api"><p> Api</p></Link>
                        </div>
                </div>
                <div className="second">
                    <div className="logo">
                        <Link to="/">
                            <img src={Logo} alt = "логотип"/>
                        </Link>
                        
                    </div>
                    <div className="second-contacts">
                        <span>8 777 777 55 55</span>
                        <span>Обратный звонок</span>
                        
                    </div>
                    <div className="second-icons">
                        <div className="icons-user">
                            <img src={User} alt = "Пользователь" width={"50px"}/>
                        </div>
                        <div className="icons-compare">
                            <img src={Compare} alt = "Сравнение товара" width={"50px"}/>
                        </div>
                        <div className="icons-basket"> 
                        <Link to="cart">
                        <img src={Basket} alt = "Корзина" width={"50px"}/> <span className="countMaterial">{countMaterial}</span>
                        </Link>
                            
                        </div>
                        
                        
                    </div>
                </div>
                <div className="third">
                    <div className="left"> 
                        <div className="catalog-product" >
                          
                            <Modal active = {modalActive} setActive={setModalActiv}>

                            </Modal>     
                   
                            <button className="btn" onClick = {()=>setModalActiv (true)}> 
                                <img src= {Menu} width={"20px"} color={"blue"} className="burger-menu"/>
                                <span>Каталог товаров</span>
                            </button>  
                           
                                                   
                        </div>
                        
                        <div className="stock"> Акции </div>
                    </div>
                   
                    <div className="right">
                        <input className="input" type={"text"} placeholder="Поиск (ищите Дверь или Клей - остальное не готово)" onChange={inputValue}/>
                        <div className="search">
                            <Link to={bugs}>
                            <img src={Search} alt = "Поиск" width={"32px"} onClick={()=>handleSearch(`${searchProduct}`)} className="header_search_btn"/>
                            </Link>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header