import { useLoaderData } from "react-router-dom";
import Articles from "../components/articles/Articles";

function CulturePage() {
    const { items } = useLoaderData();
    const sections = ["kultur", "trd.by", "familie og oppvekst"];
    
    return (
        <Articles articles={items} sections={sections}/>
    );
}

export default CulturePage;
