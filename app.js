import React, { useState } from "react"
import ReactDOM from "react-dom/client";
import restaurantlist from "./mockdata";
import initalrestaurantlist from "./mockdata";
import { useEffect } from "react";
import Header from "./componets/Header";
import Restaurantcard from "./componets/Restaurantcard";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import About from "./componets/About";

const Foodwebsite = () => {
    const [restaurantlist, setRestaurantlist] = useState([]);
    const [searchrestaurantlist, setSearchRestaurantlist] = useState([]);
    const [searchfilter, setSearchfilter] = useState("");

    useEffect(() => {
        fetchdata();
    },[]);

    const fetchdata = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json = await data.json();
        const rawCards = json.data.cards;
        const allrestaurantList = rawCards .map(card => card?.card?.card?.info).filter(info => info && info.name); // Ensure valid restaurant info
        setRestaurantlist(allrestaurantList);
        setSearchRestaurantlist(allrestaurantList);
    };
    return(
        <div>
            <Header />
        <button className="btn" onClick={() => {
            const selectRating = searchrestaurantlist.filter((restaurant) => restaurant.avgRating > 4);
            setSearchRestaurantlist(selectRating);
        }}> top rated restaurant </button>

        <div className="search-container">
            <input type="text" className="search-box" placeholder="Search..." value = {searchfilter} onChange={(event) => {
                setSearchfilter(event.target.value);
            }} />
            <button className="search-button" onClick={() =>{
                const filteredrestaurant = restaurantlist.filter((restaurant) => restaurant.name.toLowerCase().includes(searchfilter.toLowerCase()));
                setSearchRestaurantlist(filteredrestaurant);
            }
            }>🔍</button>
            </div>

        
        <div className="card-container">
            <div className="card-row">
    {
        searchrestaurantlist.map((res) => <Restaurantcard key={res.id} resdata = {res} />)
    }
    
  </div>
</div>
</div>
    );
};

const appRouter = createBrowserRouter ([
    {
        path: "/",
        element: <Foodwebsite />,
    },
    {
        path: "/about",
        element: <About />,
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router = {appRouter} />);

