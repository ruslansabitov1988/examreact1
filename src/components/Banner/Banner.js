import React from "react";
import Carusel from "../Carusel/Carusel";
import "./Banner.css"

function Banner (){
    return(
        <div className="container_banner_block">
            <div className="container_banner">
            <div className="banner_left">
                <Carusel>
                    <div className="item item-1">
                        
                    </div>
                    <div className="item item-2">
                        
                    </div>
                
                </Carusel>
            </div>
            <div className="banner_right">
                <div className="banner_right_img">

                </div>
            </div>
        </div>

        </div>
        
    )
}

export default Banner;