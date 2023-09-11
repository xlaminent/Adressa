import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
            },
            {
                path: "nyheter",
                element: <NewsPage/>,
            },
            {
                path: "kultur",
                element: <CulturePage/>,
            },
            {
                path: "sport",
                element: <SportPage/>,
            },
            {
                path: "magasin",
                element: <MagazinePage/>,
            },
            {
                path: "midtnorskdebatt",
                element: <DebatePage/>,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
