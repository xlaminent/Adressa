import { useLoaderData } from "react-router-dom";
import Articles from "../components/articles/Articles";

function SportPage() {
    const { items } = useLoaderData();
    const sections = ["sport", "fotball", "rbk", "langrenn", "sprek"];
    
    return (
        <>
            <h1>Sport</h1>
            <Articles articles={items} sections={sections}/>
        </>
    );
}

export default SportPage;