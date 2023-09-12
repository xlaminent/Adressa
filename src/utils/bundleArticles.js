export const articleTypes = [{ name: "single", limit: 1}, {name:"double", limit: 2}, {name: "triple", limit: 3}, {name: "triple-flat", limit: 3}, {name: "quadruple", limit: 4}];

const checkForAllowedTypes = (limit, currentArticleType, previousArticleType) => {
    const allowedTypes = articleTypes.filter(type => type.limit === limit); // finner alle artikkeltyper som har samme antall artikler den kan vise (limit)
    
    if (allowedTypes.length === 1) {
        // hvis vi bare finner én tillatt artikkeltype, så må vi bruke den uansett hva den forrige typen var
        return allowedTypes[0];
    } else {
        // hvis vi har flere tillatte artikkeltyper, så leter vi opp den neste som er ulik den forrige - slik unngår vi identiske rader selv om limit er lik
        let articleType = currentArticleType;

        while (articleType.name === previousArticleType && allowedTypes.length > 1) {
            articleType = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];
        }

        return articleType;
    }
}

export const bundleFilteredArticles = (array, sliceStart, sliceEnd, setGroupArticlesState, setSliceState) => {
    // henter de første 20 artiklene
    const loadedArticles = array.slice(sliceStart, sliceEnd);
    const groupedArticles = [];
    
    let counter = 1;
    let tempArticles = [];

    // velg en artikkeltype, sett en som tidligere og en som aktuell, slik at artikler ikke kan bundles i den samme typen etter hverandre
    let articleType = articleTypes[Math.floor(Math.random() * articleTypes.length)];
    let previousArticleType = articleType.name;
    let currentArticleType = articleType;

    for (let i = 0; i < loadedArticles.length; i++ ) {
        const item = loadedArticles[i]; 
        tempArticles.push(item);

        if (counter === currentArticleType.limit) {
            groupedArticles.push({
                type: currentArticleType,
                articles: tempArticles
            });

            counter = 1;
            tempArticles = [];

            articleType = articleTypes[Math.floor(Math.random() * articleTypes.length)]; // finner en ny tilfeldig artikkeltype
            previousArticleType = currentArticleType.name;
            currentArticleType = checkForAllowedTypes(articleType.limit, currentArticleType, previousArticleType);
        } else if (i === loadedArticles.length - 1) {
            // om det gjenstår én artikkel igjen 
            currentArticleType = checkForAllowedTypes(tempArticles.length, currentArticleType, previousArticleType);

            groupedArticles.push({
                type: currentArticleType,
                articles: tempArticles
            });
        } else {
            counter++;
        }
    }

    setGroupArticlesState((prevState) => prevState.concat([...groupedArticles]));
    setSliceState((prevSlice) => loadedArticles.length + prevSlice);
}
