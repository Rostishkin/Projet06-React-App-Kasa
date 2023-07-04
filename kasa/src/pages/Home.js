import '../sass/pages/Home.scss'; //scss
import { Link } from "react-router-dom";
import Banner from "../components/Banner"; //banner 
import homeBanner from "../assets/home-banner.png"// home banner img
import logementsData from '../data/logements.json' //datas
import Thumb from "../components/Thumb"; //thumb


//fonction Home
export default function Home() {
    return (
        <main>
            <Banner imageUrl={homeBanner}>
                <h1 className="banner-title">Chez vous, et partout ailleurs</h1>
            </Banner>
            <div className="gallery">
                {logementsData.map((logements) => (
                    <Link to={`/logements/${logements.id}`} key={logements.id}>
                        <Thumb logements={logements} />
                    </Link>
                ))}
            </div>
        </main>
    )
}