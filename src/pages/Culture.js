import { useLoaderData } from "react-router-dom";
import Articles from "../components/articles/Articles";

function CulturePage() {
    const { items } = useLoaderData();
    const sections = ["kultur", "trd.by", "familie og oppvekst"];
    
    return (
        <div className="wrapper">
            <Articles articles={items} sections={sections}/>
        </div>
    );
}

export default CulturePage;
