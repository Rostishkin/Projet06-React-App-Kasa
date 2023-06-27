import { Link } from "react-router-dom";
import '../style/Home.css';
import Banner from "../components/Banner";
import homeBanner from "../assets/home-banner.png"
import logementsData from '../data/logements.json'
import Thumb from "../components/Thumb";



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