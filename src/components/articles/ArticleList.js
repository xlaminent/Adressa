import { useState, useEffect, useRef } from "react";

function ArticleList({ articles, sections }) {
    const [itemsToLoad, setItemsToLoad] = useState(20);
    const [isLoading, setIsLoading] = useState(false);

    const timerDebounceRef = useRef();

    const filteredArticles = sections.length > 0 ? articles.filter((a) => sections.includes(a._polaris_extra.section)) : articles;

    useEffect(() => {
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
        // change loading state (and thereby "fetch" more data) if we're (almost) at the bottom of the page
        if ((window.innerHeight + document.documentElement.scrollTop + 10) >= document.body.offsetHeight) {
            console.log("ja")
            setIsLoading(true);
        } 
    }

    const handleLoadMore = () => {
        // simulate load time, 3 seconds
        setTimeout(() => {
            setItemsToLoad(itemsToLoad + 10);
            setIsLoading(false);
        }, 3000);
    };

    const debounceOnScroll = (callback, delay) => {
        // using debouncing to skip excess function execution on scroll
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
                <ul>
                    {filteredArticles.slice(0, itemsToLoad).map((article) => (
                        <li key={article.id}>
                            {article.title}
                        </li>
                    ))}
                </ul>
                {isLoading && <p>Laster ... </p>}</>         
            : "Fant ingen artikler om dette temaet."}
        </div>
    );
}

export default ArticleList;
