import { Link } from "react-router-dom";
import HomeBanner from "../components/HomeBanner";


export default function Home() {
    return (
        <main>
            <HomeBanner>
                <h1 className="banner-title">Chez nous, et partout ailleurs</h1>
            </HomeBanner>
        </main>
    )
}