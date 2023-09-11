function ArticleList({ articles, sections }) {
    const filteredArticles = sections.length > 0 ? articles.filter((a) => sections.includes(a._polaris_extra.section)) : articles;
    
    return (
        <div>
            {filteredArticles?.length > 0 ? 
                <ul>
                    {filteredArticles.map((article) => (
                        <li key={article.id}>{article.title}</li>
                    ))}
                </ul>            
            : "Fant ingen artikler om dette temaet."}

        </div>
    );
}

export default ArticleList;
