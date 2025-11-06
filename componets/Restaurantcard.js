const Restaurantcard = (props) => {
     const { name, cloudinaryImageId, costForTwo, avgRating, cuisines, promoted } = props.resdata;

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

export const promotedlabel = (Restaurantcard) => {
    return (props) => {
        return(
        <div>
            Promoted
            <Restaurantcard {...props} />
        </div>
        );
    };
}

export default Restaurantcard;