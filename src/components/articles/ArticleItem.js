import paywall from "../../assets/paywall-icon.svg";

function ArticleItem({article}) {
    return (
        <article className={`${!article.image ? "empty" : undefined}`} key={article.id} title={article.title}>
            {article.image && <img src={article.image} alt="foto"/>}
            <h1>
                {article.title}
                {article._polaris_extra.paywall && <span title="Pluss-artikkel"><img src={paywall} alt="pluss-artikkel icon"/></span>}
            </h1>
        </article>
    );
}

export default ArticleItem;