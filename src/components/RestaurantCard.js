import React from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData;
  console.log("resData", resData);
  let url =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <div className="res-card">
      <img className="card-img" src={url + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(' ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} for 2</h4>
    </div>
  );
};

export default RestaurantCard;