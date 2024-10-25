import { RES_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    // console.log(props);
    // const {resName,cuisine} = props;
    const {resData} = props;
    const {name,cuisines,avgRating,costForTwo} = resData?.info;
    
    return(
        <div className="res-card">
        <img className="res-logo" src={RES_URL +resData.info.cloudinaryImageId }alt="res-card-img" />
            <h3>{name}</h3>
            <p>{cuisines.join(",")}</p>
            <p>Rating: {avgRating}</p>
            <p>{costForTwo}</p>
        </div>
    );
}

export default RestaurantCard;