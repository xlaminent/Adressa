import { useState, useEffect, useRef } from "react";
import { articleTypes, bundleFilteredArticles } from "../../utils/bundleArticles";
import ArticleSection from "./ArticleSection";

function ArticleList({ articles, sections }) {
    const [groupedArticlesList, setGroupedArticlesList] = useState([]);
    const [itemsToLoad, setItemsToLoad] = useState(20);
    const [startSlice, setStartSlice] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const timerDebounceRef = useRef();

    const filteredArticles = sections.length > 0 ? articles.filter((a) => sections.includes(a._polaris_extra.section)) : articles;

    useEffect(() => {
        bundleFilteredArticles(filteredArticles, startSlice, itemsToLoad, setGroupedArticlesList, setStartSlice);
        window.addEventListener('scroll', () => debounceOnScroll(handleListScroll, 500));
        return () => window.removeEventListener('scroll', () => debounceOnScroll(handleListScroll, 500));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (isLoading) {
            if (itemsToLoad > filteredArticles.length) {
                setIsLoading(false);
            } else {
                handleLoadMore();
            }
        }  
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading]);

    const handleListScroll = () => {
        // endre state for loading hvis vi er på bunnen av siden (nesten); triggrer ny "fetch" i useEffect 
        if ((window.innerHeight + document.documentElement.scrollTop + 10) >= document.body.offsetHeight) {
            setIsLoading(true);
        } 
    }

    const handleLoadMore = () => {
        // simulater innlastning (3 sekunder), øker mengden av artikler som skal lastes inn med 20

        setTimeout(() => {
            const newItemsToLoad = itemsToLoad + 20;
            setItemsToLoad(newItemsToLoad);
            bundleFilteredArticles(filteredArticles, startSlice, newItemsToLoad, setGroupedArticlesList , setStartSlice);
            setIsLoading(false);
        }, 1000);
    };

    const debounceOnScroll = (callback, delay) => {
        // bruk debouncing for å hoppe over overflødig funksjonskall ved scrolling
        if (timerDebounceRef.current){
            clearTimeout(timerDebounceRef.current);
        }

        timerDebounceRef.current = setTimeout(() => {
            callback();
        }, delay);
    }
    
    return (
        <div>
            {filteredArticles?.length > 0 ? <>
                <div className="bundles">
                    {groupedArticlesList.map((articleGroup) => {
                            if (articleGroup.type.name === articleTypes[0].name) {
                                return <ArticleSection articles={articleGroup.articles} sectionClass={articleTypes[0].name}/>
                            } else if (articleGroup.type.name === articleTypes[1].name) {
                                return <ArticleSection articles={articleGroup.articles} sectionClass={articleTypes[1].name}/>
                            } else if (articleGroup.type.name === articleTypes[2].name) {
                                return <ArticleSection articles={articleGroup.articles} sectionClass={articleTypes[2].name}/>
                            } else if (articleGroup.type.name === articleTypes[3].name) {
                                return <ArticleSection articles={articleGroup.articles} sectionClass={articleTypes[3].name}/>
                            } else if (articleGroup.type.name === articleTypes[4].name) {
                                return <ArticleSection articles={articleGroup.articles} sectionClass={articleTypes[4].name}/>
                            } else {
                                return <div>{articleGroup.articles.map(article => <p>{article.title}</p>)}</div>;
                            }
                        }
                    )}
                </div>
                {isLoading && <p>Laster ... </p>}</>         
            : "Fant ingen artikler om dette temaet."}
        </div>
    );
}

export default ArticleList;

