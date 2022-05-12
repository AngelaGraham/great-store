import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
// Created component named Products
const Products = () => {
  // Setting up state for data to an empty array
  const [data, setData] = React.useState([]);
  // Setting up state for filter and setting it to data
  const [filter, setFilter] = React.useState(data);
  // Setting up state for loading and setting it to false for default
  const [loading, setLoading] = React.useState(false);
  // Setting componentMount to true for default using let variable
  let componentMount = true;

  // Setting useEffect that runs getProducts async function that calls the API and if componentMount is true, it will setData to server response
  // and setFilter to response data and setLoading to false
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMount) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMount = false;
      };
    };

    getProducts();
    
  }, []);
  // Created function for loading skeleton
  const Loading = () => {
    return (
    <>
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="col-md-12 fs-1">
          Loading.....
        </div>
        </div>
      </div>
    </>
    );
  };
  // Created a function for displaying the products by mapping through the data and filter and returning a div with the product name and price and image
  const filterProducts = (cat) => {
      const updatedList = data.filter((x, id) =>x.category === cat);
        setFilter(updatedList);
  }