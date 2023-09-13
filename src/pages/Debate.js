import { useLoaderData } from "react-router-dom";
import Articles from "../components/articles/Articles";

function DebatePage() {
    const { items } = useLoaderData();
    const sections = ["midtnorskdebatt", "politikk", "meninger", "skikk og bruk"];
    
    return (
        <div className="wrapper">
            <Articles articles={items} sections={sections}/>
        </div>
    );
}

export default DebatePage;