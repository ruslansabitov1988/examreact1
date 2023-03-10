import React from "react";
import { Link } from "react-router-dom";

import "./Modal.css"


function Modal ({active, setActive, children}){
  



    return( 
        <div className={active? "modal-container active" : "modal-container"} onClick={()=> setActive(false)}>
            <div className={active ? "modal-content active" : "modal-content"} onClick={e=>e.stopPropagation()}>
                {children}
                <div className='containerContent'>
                    <div className='catalogContent'>

                        <div className="catalog" >
                                <span className="catalog_text">Каталог Domostroi</span>
                                <div className="catalog-first">
                                    <div className="productModal">
                                        <Link to="germetik">
                                            <span className="catalog_product_text">Герметики, клей, пены</span>
                                            <div className="product_img1"></div>
                                        </Link>
                                        
                                    </div>
                                    <div className="productModal">
                                        <Link to="door">
                                            <span className="catalog_product_text">Двери</span>
                                            <div className="product_img2"></div>
                                        </Link>
                                        
                                    </div>
                                    <div className="productModal">
                                        <Link to="inzhenersystem">
                                            <span className="catalog_product_text">Инженерные системы</span>
                                            <div className="product_img3"></div>
                                        </Link>
                                        
                                    </div>
                                    <div className="productModal">
                                        <Link to="instrument">
                                            <span className="catalog_product_text">Инструмент</span>
                                            <div className="product_img4"></div>
                                        </Link>
                                        
                                    </div>  
                                    <div className="productModal">
                                        <Link to="krepew">
                                            <span className="catalog_product_text">Крепеж</span>
                                            <div className="product_img5"></div>
                                        </Link>
                                        
                                    </div>
                                    <div className="productModal">
                                        <Link to="lak">
                                            <span className="catalog_product_text">Лакокрасочная продукция</span>
                                            <div className="product_img6"></div>
                                        </Link>
                                        
                                    </div>
                                </div>
                                <div className="catalog-second">
                                    <div className="productModal">
                                        <Link to="pol">
                                            <span className="catalog_product_text">Напольные покрытия</span>
                                            <div className="product_img7"></div>
                                        </Link>
                                        
                                    </div>
                                    <div className="productModal">
                                        <Link to="oboi">
                                            <span className="catalog_product_text">Обои, отделка стен и потолка</span>
                                            <div className="product_img8"></div>
                                        </Link>
                                       
                                    </div>
                                    <div className="productModal">
                                        <Link to="plitka">
                                            <span className="catalog_product_text">Плитка, керамогранит</span>
                                            <div className="product_img9"></div>
                                        </Link>
                                        
                                    </div>
                                    <div className="productModal">
                                        <Link to="santexnika">
                                            <span className="catalog_product_text">Сантехника</span>
                                            <div className="product_img10"></div>
                                        </Link>
                                        
                                    </div>  
                                    <div className="productModal">
                                        <Link to="stroimaterial">
                                            <span className="catalog_product_text">Строительные материалы</span>
                                            <div className="product_img11"></div>
                                        </Link>
                                        
                                    </div>
                                    <div className="productModal">
                                        <Link to="stroitelsmes">
                                            <span className="catalog_product_text">Строительные смеси</span>
                                            <div className="product_img12"></div>
                                        </Link>
                                        
                                    </div>

                                </div>
                                <div className="catalog-third">
                                    <div className="productModal">
                                        <Link to="elektrotovari">
                                            <span className="catalog_product_text">Электротовары и освещение</span>
                                            <div className="product_img13"></div>
                                        </Link>
                                       
                                    </div>
                                </div>
                            
                        </div>
                        
                    
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Modal