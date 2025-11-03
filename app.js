import React from "react"
import ReactDOM from "react-dom/client";
import Header from "./componets/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./componets/About";
import Error from "./componets/Error";
import Body from "./componets/Body";
const Foodwebsite = () => {
    return(
        <div>
            <Header />
            <Body />

</div>
    );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Foodwebsite />,
    errorElement: <Error />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router = {appRouter} />);

