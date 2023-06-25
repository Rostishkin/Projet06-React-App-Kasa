//Mise en place de router 
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFoundEror from "../pages/ErrorPage";
import Logements from "../pages/Logements";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos-de-nous" element={<About/>} />
            <Route path="/offres-logement" element={<Logements/>} />
            <Route path="/*" element={<NotFoundEror/>} />
        </Routes>
    )
}