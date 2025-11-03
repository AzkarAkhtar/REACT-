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

export default Restaurantcard;