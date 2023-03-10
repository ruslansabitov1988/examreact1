import React from "react";
import "./CatalogParent.css"
import CatalogCart from "../CatalogCart/CatalogCart.js"

const CatalogParent = ()=>{
    return(
        <div className="container_catalogParent">
            <CatalogCart/>
        </div>
    )
}

export default CatalogParent