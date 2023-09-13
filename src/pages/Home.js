import { useLoaderData } from "react-router-dom";
import Articles from "../components/articles/Articles";

function HomePage() {
    const { items } = useLoaderData();
    const sections = [];

    return (
        <Articles articles={items} sections={sections}/>
    );
}

export default HomePage;