import { useLoaderData } from "react-router-dom";
import Articles from "../components/articles/Articles";

function SportPage() {
    const { items } = useLoaderData();
    const sections = ["sport", "fotball", "rbk", "langrenn", "sprek"];
    
    return (
        <Articles articles={items} sections={sections}/>
    );
}

export default SportPage;