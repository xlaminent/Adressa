import { useLoaderData } from "react-router-dom";
import Articles from "../components/articles/Articles";

function MagazinePage() {
    const { items } = useLoaderData();
    const sections = ["magasin"];

    return (
        <>
            <h1>Ukeadressa</h1>
            <Articles articles={items} sections={sections}/>
        </>
    );
}

export default MagazinePage;