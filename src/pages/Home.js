import React from "react";
import Banner from "../components/Banner/Banner.js"
import CatalogParent from "../components/CatalogParents/CatalogParent";
import Popular from "../components/Popular";
import Brand from "../components/Brand";
import Bought from "../components/Bought/Bought";
import WhyDomostroi from "../components/WhyDomostroiFolder/WhyDomostroi";
import MapBox from "../components/MapBox/MapBox";
import Footer from "../components/Footer";
import MailingList from "../components/MailingList/MailingList";







const Home = ()=>{
    return(
        <div className="container_home">
            <Banner/>
            <CatalogParent/>
            <Popular/>
            <Brand/>
            <Bought/>
            <WhyDomostroi/>
            <MapBox/>
            <Footer/>
            <MailingList/>
        </div>
    )
}

export default Home