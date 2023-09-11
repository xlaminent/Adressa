import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { articlesLoader } from "./components/articles/Articles";
import Layout from "./components/common/layout/Layout";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import CulturePage from "./pages/Culture";
import DebatePage from "./pages/Debate";
import MagazinePage from "./pages/Magazine";
import NewsPage from "./pages/News";
import SportPage from "./pages/Sport";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
                loader: articlesLoader,
            },
            {
                path: "nyheter",
                element: <NewsPage/>,
                loader: articlesLoader,
            },
            {
                path: "kultur",
                element: <CulturePage/>,
                loader: articlesLoader,
            },
            {
                path: "sport",
                element: <SportPage/>,
                loader: articlesLoader,
            },
            {
                path: "magasin",
                element: <MagazinePage/>,
                loader: articlesLoader,
            },
            {
                path: "midtnorskdebatt",
                element: <DebatePage/>,
                loader: articlesLoader,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
