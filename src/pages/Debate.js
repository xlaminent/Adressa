import { useLoaderData } from "react-router-dom";
import Articles from "../components/articles/Articles";

function DebatePage() {
    const { items } = useLoaderData();
    const sections = ["midtnorskdebatt", "politikk", "meninger", "skikk og bruk"];
    
    return (
        <>
            <h1>Debatt</h1>
            <Articles articles={items} sections={sections}/>
        </>
    );
}

export default DebatePage;