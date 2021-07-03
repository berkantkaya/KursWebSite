import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import Details from "../components/Details";
import Navbar from "../components/Navbar";
import data from "../data";

export default function Detail(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  const productId = props.match.params.id;


  return (
    <div className="detail">
      <Navbar />
      <Details product={product} productId={productId} />
    </div>
  );
}
