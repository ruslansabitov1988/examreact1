import React from "react";
import MapYandex from "../MapYandex/MapYandex";
import "./MapBox.css"


const MapBox = ()=>{

    // const arrAdress = [
    //     {
    //         id:1,
    //         title:"Домострой на Батыс - 2",
    //     }
    // ]

    return(
        <div className="only_map">
             <div className="container_mapbox">
            <MapYandex/>
            <div className="container_mapbox_contact">
                
                <span>Домострой на Батыс - 2</span>
                <span>г. Астана</span>
                <span>телефон: +7 (7172) 1245678</span>
                <span>Режим работы: 09.00 - 18.00</span>
                <span>Смотреть Магазин ...</span>
                
            </div>
            <div className="container_mapbox_img">
                <div className="container_mapbox_img_img1"></div>
                <div className="container_mapbox_img_img2"></div>
            </div>
        </div>
        </div>
       
    )
}

export default MapBox