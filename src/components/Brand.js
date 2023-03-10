import "./Brand.css"


import brandBosch from "../image/brandBosch.png"
import brandCersanit from "../image/brandCersanit.png"
import brandDanogips from "../image/brandDanogips.png"
import brandIdeal from "../image/brandIdeal.png"
import brandKrono from "../image/brandKrono.png"
import brandMakita from "../image/brandMakita.png"
import brandMarkoflex from "../image/brandMarkoflex.png"
import brandMor from "../image/brandMor.png"
import brandPecahta from "../image/brandPecahta.png"
import brandSanita from "../image/brandSanita.png"
import brandTarket from "../image/brandTarket.png"
import brandVolma from "../image/brandVolma.png"

const Brand = ()=>{
    return(
        <div className="brand_container">
            <span className="brand_container_text"> Популярные бренды</span>
            <div className="brand_container_box1">
                <img src={brandBosch} alt="img" className="brand_container_img"/>
                <img src={brandCersanit} alt="img" className="brand_container_img"/>
                <img src={brandDanogips} alt="img" className="brand_container_img"/>
                <img src={brandIdeal} alt="img" className="brand_container_img"/>
                <img src={brandKrono} alt="img" className="brand_container_img"/>
                <img src={brandMakita} alt="img" className="brand_container_img"/>
            </div>
            <div className="brand_container_box1">
                <img src={brandMarkoflex} alt="img" className="brand_container_img"/>
                <img src={brandMor} alt="img" className="brand_container_img"/>
                <img src={brandPecahta} alt="img" className="brand_container_img"/>
                <img src={brandSanita} alt="img" className="brand_container_img"/>
                <img src={brandTarket} alt="img" className="brand_container_img"/>
                <img src={brandVolma} alt="img" className="brand_container_img"/>

            </div>
        </div>
    )
}

export default Brand