import React, { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  
  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();
  window.scrollTo({
    top : 0,
    behavior : "smooth"
  })
  console.log(resId);

  useEffect(() => {
    console.log("inside useEffect");
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const dataObj = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.86567087793404&lng=78.75919438013031&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );

    const jsonObj = await dataObj.json();
    console.log(jsonObj);
    setResInfo(jsonObj.data);

    
  };

  if(resInfo === null){
    return <Shimmer/>;
  }
  console.log("resInfo" ,resInfo);
  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards?.[2]?.card?.card?.info ;


  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(itemCards);

  return  (
    <div className="menu">
    <h1 className="restaurant-name">{name}</h1>
    <p className="restaurant-info">
      {cuisines.join(", ")} - {costForTwoMessage}
    </p>
    <p className="avg-rating">Average Rating: {avgRating}</p>
  
    <h2 className="menu-title">Menu</h2>
    <ul className="menu-list">
      {itemCards &&
        itemCards.map(item => (
          <li key={item.card.info.id} className="menu-item">
            <img
              className="dish-image"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                item.card.info.imageId
              }
              alt="dish-photo"
            />
            <div className="item-details">
              <span className="item-name">{item.card.info.name}</span>
              <span className="item-price">Rs. {(item.card.info.price) / 100}</span>
            </div>
          </li>
        ))}
    </ul>
  </div>
  
  );
};

export default RestaurantMenu;
