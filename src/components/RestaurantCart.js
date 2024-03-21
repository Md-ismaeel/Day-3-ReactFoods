import { useState } from "react";
import "../Style/restaurantCart.css";
import data from "../resData.json";
import { IoLocationSharp } from "react-icons/io5";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

export const RestaurantCard = () => {
    // console.log(data.results);

    const [restaurantData, setRestaurantData] = useState(data.results);
    // console.log(restaurantData);


    const onChangeHandler = (name) => {
        let filterResData = data.results.filter((items, index) => {
            if (items.name.toLowerCase().includes(name)) {
                return true;
            }
        });
        setRestaurantData(filterResData);
    };

    const ratingUpdate = (num) => {

        // setRating(num)

        let filteredRating = data.results.filter((items, index) => {
            if (items.rating <= num) {
                return items;
            }
            return false;
        });
        console.log(filteredRating);
        setRestaurantData(filteredRating);
    };

    return (
        <>
            <div className="input-box">
                <input
                    type="text"
                    placeholder="Search Restaurants"
                    onChange={(e) => {
                        onChangeHandler(e.target.value);
                    }}
                />
                <label className="labels">
                    <span id="rating">Minimum Rating:</span>
                    <input
                        type="number"
                        placeholder="0"
                        min={0}
                        max={5}
                        onChange={(e) => {
                            ratingUpdate(e.target.value);
                        }}
                    />
                </label>
            </div>
            <div className="container-cart">

                {restaurantData.map((items, index) => {
                    return (
                        <div className="container-items" key={index}>
                            <div className="details">
                                <div className="name-start">
                                    <h4 className="font-bold">{items.name}</h4>
                                    <span>
                                        <Rating
                                            style={{ maxWidth: 120 }}
                                            value={parseInt(items.rating)}
                                        />
                                    </span>
                                </div>

                                <p className="paraTag">
                                    <span>
                                        <IoLocationSharp />
                                    </span>
                                    <span>{items.address}</span>
                                </p>

                                <p className="paraTag">
                                    <span>{items.outcode}</span>
                                    <span>{items.postcode}</span>
                                </p>
                            </div>

                            <div className="menu-card">
                                <p className="svg-icon">
                                    <span>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 416 512"
                                            className="inline mr-1"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"></path>
                                        </svg>
                                    </span>
                                    <span>{items.type_of_food}</span>
                                </p>

                                <p className="menu-link">
                                    <a href="https://www.just-eat.co.uk/restaurants-atthai-ss9/menu">
                                        Visit Menu
                                    </a>
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
