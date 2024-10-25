import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [newList, setNewList] = useState([]);
  const [filteredList,setFilterList] = useState([]);
  const [searchItem,setSearchItem] = useState("");
  // console.log("newList :" , newList);

  useEffect(() => {
    fetchData();
  }, []);

  console.log("body rendered");

    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.86567087793404&lng=78.75919438013031&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      // console.log("type of data",typeof data);
      // console.log("data",data);

      const json = await data.json();
      // console.log("type of json ",typeof json);
      // console.log("json", json);
      // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      const dataCVal = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      // console.log("dataCVal", dataCVal)
      setNewList(dataCVal)
      setFilterList(dataCVal);
      // console.log("newList", newList);
    };

  const handleClick = () =>{
    // console.log("inside this function");
    let searchList = newList.filter((res) => res.info.name.toLowerCase().includes( searchItem.toLowerCase()));
    setFilterList(searchList);
    // console.log("new list after search" ,searchList);
    
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
