// import Header from "./components/Header";
// import Banner from "./components/Banner/Banner"
// import CatalogParent from "./components/CatalogParents/CatalogParent"
// import Popular from "./components/Popular";
// import Brand from "./components/Brand";
// import Bought from "./components/Bought/Bought";
// import WhyDomostroi from "./components/WhyDomostroiFolder/WhyDomostroi";
// import MapBox from "./components/MapBox/MapBox";
// import Footer from "./components/Footer";
// import MailingList from "./components/MailingList/MailingList";
// import FooterBanner from "./components/FooterBanner/FooterBanner";
import "./App.css"
import { BrowserRouter,Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Deleviry";
import Search from "./pages/Search";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Api from "./pages/Api";
import Cart from "./pages/Cart";
import Door from "./pages/Door";
import FooterBanner from "./components/FooterBanner/FooterBanner";
import ElektroTovari from "./pages/ElektroTovari";
import Germetik from "./pages/Germetik"
import Instrument from "./pages/Instrument"
import InzhenerSystem from './pages/InzhenerSystem'
import Krepew from "./pages/Krepew"
import Lak from './pages/Lak'
import Oboi from './pages/Oboi'
import Plitka from "./pages/Plitka"
import Pol from './pages/Pol'
import Santexnika from "./pages/Santexnika"
import StroiMaterial from './pages/StroitelMaterial'
import StroitelSmes from "./pages/StroitelSmes"
import ScrollBtn from "./components/ScrollBtn";

   

function App() {
  return (
    
    <BrowserRouter>
      
      <Header/>
      
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/api" element={<Api/>} />
          
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/delivery" element={<Delivery/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/search" element={<Search/>}/>
          <Route path="/cart" element={<Cart/>} />
          <Route path="/door" element={<Door/>} />
          <Route path="/elektrotovari" element={<ElektroTovari/>} />
          <Route path="/germetik" element={<Germetik/>} />
          <Route path="/instrument" element={<Instrument/>} />
          <Route path="/inzhenersystem" element={<InzhenerSystem/>} />
          <Route path="/krepew" element={<Krepew/>} />
          <Route path="/lak" element={<Lak/>} />
          <Route path="/plitka" element={<Plitka/>} />
          <Route path="/pol" element={<Pol/>} />
          <Route path="/oboi" element={<Oboi/>} />
          <Route path="/santexnika" element={<Santexnika/>} />
          <Route path="/stroimaterial" element={<StroiMaterial/>} />
          <Route path="/stroitelsmes" element={<StroitelSmes/>} />
          



          <Route path="*" element={<NotFound/>} />
      </Routes>
      
      <FooterBanner/>
      <ScrollBtn/>
    </BrowserRouter>
    
  )
}

export default App;

