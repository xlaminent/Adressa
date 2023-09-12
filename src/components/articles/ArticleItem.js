function ArticleItem({article}) {
    return (
        <article className={`${!article.image ? "empty" : undefined}`} key={article.id} >
            {article.image && <img src={article.image} alt="foto"/>}
            <h1>{article.title}</h1>
        </article>
    );
}

export default ArticleItem;