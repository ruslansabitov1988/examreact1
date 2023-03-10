import React, { useState } from "react";
import "./MailingList.css"
const MailingList = ()=>{

    const [mail,setMail] = useState('')
    const [check,setChecked]=useState('')
    const arrMail = []
    const handleChange = (event)=>{
        setMail(event.target.value)
        
    }

    const addMail = ()=>{
        if(mail===''){
            setChecked("Введите почту")
            alert("Введите почту")
            
        } else{
            arrMail.push(mail)
        }
        
        console.log(arrMail)
        console.log(check)
        setMail("")
    }

    

    return(
        <div className="container_mailinglist">
            <div className="container_mailinglist_box">
                <div className="container_mailinglist_box_title1">
                    <span className="container_mailinglist_box_title1_text1">Подпишись на рассылку!</span>
                    <span className="container_mailinglist_box_title1_text2">Узнавай первым о всех акциях</span>

                </div>
                <div className="container_mailinglist_box_title2">
                    <div className="container_mailinglist_box_input">
                        <input placeholder="Электронная почта" className="container_mailinglist_input" onChange={handleChange} value={mail}/>
                        
                        <div className="container_mailinglist_button" onClick={addMail}>Подпишись</div>
                    </div>
                    <div className="container_mailinglist_box_title3">
                        <span>Нажимая на «Подписаться», вы соглашаетесь с политикой конфиденциальности</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MailingList;