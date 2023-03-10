import React, { useEffect, useState } from "react";
import "./Api.css"

const Api = ()=>{
    const [inputSearch,setInputSearch] = useState('')
    const [result, setResult] = useState('')


    const handleSearch = (e)=>{
        setInputSearch(e.target.value)

    }
    
    const getInfo = async()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f1d641037bmsh805777c136ad783p142fecjsn73217d65f347',
                'X-RapidAPI-Host': 'genius.p.rapidapi.com'
            }
        };
        
        const response = await fetch(`https://genius.p.rapidapi.com/search?q=${inputSearch}`, options)
            const data = await response.json()
            console.log(data)
            const artistSong = data.response.hits.map(song=>
            
            <div key={song.result.header_image_thumbnail_url} className="box-img">
                <img src={song.result.header_image_thumbnail_url} alt="foto" className="img"/>

                <p className="title">{song.result.full_title}</p>
                
                
            </div>
            
            )  
      

                setResult(artistSong)

    }

    useEffect(()=>{
        getInfo(inputSearch)
    },[])


    return(
       <div className="container_api">
            <div className="container_api_content">
                <div className="api_box1">
                    <input placeholder="Введи имя Артиста" value={inputSearch} onChange = {handleSearch} className="api_box1_input"/>
                    <button onClick={getInfo} className="api_box1_input_btn">Search</button>
                </div>
                <div className="api_box2">
                        {result}
                </div>
            </div>

       </div>
    )
}

export default Api