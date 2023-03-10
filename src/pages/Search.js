import React, { useState } from "react";
import "./Door.css"
import { useSearchInput,useSearch} from "../store";

const Search = ()=>{
    const [value,setValue]=useState([])
    const materail= useSearchInput((state) => state.catalogCart)
    console.log(materail)

    const productDraw = useSearch((state)=>state.catalogCart)

    let draw = []


    if (materail){
        for(let i = 0; i < productDraw.length; i++){
            if (productDraw[i].product === materail){
            draw.push(productDraw[i])
            setValue(productDraw[i])
            }
        }
        
    }else{
        console.log("нету искомых значении")
    }
    console.log(value)



    return(
        <div className="container_block">
            <div className="container_block_content">
                132
            </div>
            
        </div>
    )
}

export default Search