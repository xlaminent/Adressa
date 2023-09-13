import { useLoaderData } from "react-router-dom";
import Articles from "../components/articles/Articles";

function MagazinePage() {
    const { items } = useLoaderData();
    const sections = ["magasin"];

    return (
        <div className="wrapper">
            <Articles articles={items} sections={sections}/>
        </div>
    );
}

export default MagazinePage;