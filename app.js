import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import restaurantlist from "./mockdata";
import initalrestaurantlist from "./mockdata";
import { useEffect } from "react";

// const heading = React.createElement("h1", {id : "heading1"}, "Hello from react");


// const heading2 = ( <div id ="heading2">
//     <h1>Hello from JSX 1</h1>
//     <h1>Hello from JSX 2</h1>
//   </div>);

//   const root = ReactDOM.createRoot(document.getElementById('heading1'));
//   const root2 = ReactDOM.createRoot(document.getElementById('heading2'));
//   root.render(heading);
//   root2.render(heading2);


const Header = () => {
    return(
    <div className = "header">
        <img className = "alogo" src = "data:image/png;base64,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" />
        <ul>
        <li>Home</li>
        <li>about</li>
        <li>cart</li>
    </ul>
    </div>
    );
    
};

const Restaurantcard = (props) => {
     const { name, cloudinaryImageId, costForTwo, avgRating, cuisines } = props.resdata;

    return(
        <div className="card">
        <img className ="logo" src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
        <h4> {name}</h4>
        <h4> {costForTwo}</h4>
        <h4> {avgRating}</h4>
        <h4> {cuisines.join(",")}</h4>
        </div>
    );
};

const Foodwebsite = () => {
    const [restaurantlist, setRestaurantlist] = useState(initalrestaurantlist);

    useEffect(() => {
        fetchdata();
    },[]);

    const fetchdata = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json = await data.json();
        const rawCards = json.data.cards;
        const restaurantList = rawCards .map(card => card?.card?.card?.info).filter(info => info && info.name); // Ensure valid restaurant info
        setRestaurantlist(restaurantList);

    }
    return(
        <div>
            <Header />
        {/* <button className="btn" onClick={() => {
            const selectRating = restaurantlist.filter((restaurant) => restaurant.avgRating > 4);
            setRestaurantlist(selectRating);
        }}> top rated restaurant </button>
         */}
        <div className="card-container">
  
  <div className="card-row">
    {
        restaurantlist.map((res) => <Restaurantcard key={res.id} resdata = {res} />)
    }
    
  </div>
</div>
</div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Foodwebsite />);

