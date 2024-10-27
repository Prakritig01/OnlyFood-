import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [newList, setNewList] = useState([]);
  const [filteredList,setFilterList] = useState([]);
  const [searchItem,setSearchItem] = useState("");
  

  useEffect(() => {
    fetchData();
  }, []);

  console.log("body rendered");

    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.8268625&lng=78.77524760000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      

      const json = await data.json();
      const dataCVal = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;     
      setNewList(dataCVal)
      setFilterList(dataCVal);
     
    };

  const handleClick = () =>{
    let searchList = newList.filter((res) => res.info.name.toLowerCase().includes( searchItem.toLowerCase()));
    setFilterList(searchList);
  }



  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false){
    return <h1>looks like you are offline check your internet connection. </h1>
  }
  //conditional rendering
  if (newList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">

      <div className="row1">
        <div className="search-bar">
          <input type="text" value= {searchItem} className="search-bar-input" onChange={(e)=> setSearchItem(e.target.value)}/>
          <button className="search-btn" onClick={handleClick}>Search.</button>
        </div>


        <div className="filter">
          <button
            className="filter-button"
            onClick={() => {
              //filter logic
              // console.log("after clicking the button");
              let newFilteredList = newList.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilterList(newFilteredList);
              // console.log("newFilteredList" , newFilteredList);
            }}
          >
            {" "}
            Top Rated Restaurants.
          </button>
        </div>
      </div>

      <div className="container">
        {/* <RestaurantCard resData = {resList[0]} /> */}
        {filteredList.map((restaurant) => (
          <Link to = {"/restaurants/" + restaurant.info.id} key={restaurant.info.id}><RestaurantCard resData={restaurant}  /></Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
