import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../Pages/Category/Category";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/news-categories/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/news-categories/${params.id}`)
            }
        ]
    }
])