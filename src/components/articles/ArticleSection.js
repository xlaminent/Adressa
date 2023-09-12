import ArticleItem from "./ArticleItem";

function ArticleSection({articles, sectionClass}) {
    return (
        <>
            <section className={`bundles__bundle ${"bundles__bundle--" + sectionClass}`}>
                {articles.map((article) => 
                    <ArticleItem article={article}/>
                )}
            </section>
        </>
    );
}

export default ArticleSection;