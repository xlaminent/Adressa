import { useLoaderData } from "react-router-dom";
import Articles from "../components/articles/Articles";

function NewsPage() {
    const { items } = useLoaderData();
    const sections = ["nyheter", "trondheim", "trøndelag", "politikk", "mn24", "nyhetsstudio", "utenriks", "innenriks"];
    
    return (
        <Articles articles={items} sections={sections}/>
    );
}

export default NewsPage;