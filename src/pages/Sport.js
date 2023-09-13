import { useLoaderData } from "react-router-dom";
import Articles from "../components/articles/Articles";

function SportPage() {
    const { items } = useLoaderData();
    const sections = ["sport", "fotball", "rbk", "langrenn", "sprek"];
    
    return (
        <div className="wrapper">
            <Articles articles={items} sections={sections}/>
        </div>
    );
}

export default SportPage;