import { Suspense } from "react";
import { json, defer, Await } from "react-router-dom";
import Loader from "../common/Loader";
import ArticleList from "./ArticleList";

function Articles({articles, sections}) {
    return (
        <Suspense fallback={<Loader message="Laster inn artikler ..."/>}>
            <Await resolve={articles}>
                {(loadedArticles) => <ArticleList articles={loadedArticles} sections={sections} />}
            </Await>
        </Suspense>
    )
}

export default Articles;

async function loadArticles() {
    const response = await fetch("https://www.adressa.no/json");

    if (!response.ok) {
        throw json({statusText: "Kunne ikke hente artikler, last inn siden på nytt."});
    } else {
        const result = await response.json();
        return result.items;
    }
}

export function articlesLoader() {
    return defer({
        items: loadArticles()
    }); 
}