import React, { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo,setResInfo] = useState(null);
  useEffect(() => {
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

  return resInfo;
};

export default useRestaurantMenu;
