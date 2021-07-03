import React, { useEffect, useState } from "react";
import "./Details.css";
import data from "../data";
import { Rating } from "@material-ui/lab";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailProducts } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";
import Cart from "./Cart";

export default function Details(props) {
  const dispatch = useDispatch();
  const { product, productId } = props;
  const history = useHistory();
  const [cartItems, setCartItems] = useState(null);

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (cart?.cartItems.length > 0) {
      setCartItems(cart.cartItems);
    }
  }, [cart]);

  const addToCartHandler = () => {
    dispatch(addToCart(productId));
    console.log(productId)
  };

  return (
    <div className="row">
      <div className="productsag col-lg-9">
        <span>
          <img src={product.image} />
          <p className="mt-3">
            <button onClick={() => addToCartHandler()}>
              <i className="fas fa-shopping-basket"></i>{" "}
            </button>
            <Link to="/">
              <button>
                <i className="fas fa-home"></i>
              </button>
            </Link>
            <Link to="/product">
              <button>
                <i className="fas fa-arrow-left"></i>{" "}
              </button>
            </Link>
          </p>
        </span>
        <span className="spaniki">
          <strong>{product.brand}</strong>
          <p>
            NodeJs ile GSM Tabanlı Konum Takip Proje Tasarımı NodeJs ile GSM
            Tabanlı Konum Takip Proje Tasarımı
          </p>
          <p>Berkant Kaya</p>
          <p className="ringg">
            <Rating
              className="mt-1"
              name="size-small"
              defaultValue={5}
              size="small"
            />
          </p>
          <p className="ringgg mb-2">Toplam 10 saat - {product.yorum} ders</p>
          <p>
            <i className="fas fa-check"></i> {product.icerikbir}
          </p>
          <p>
            <i className="fas fa-check"></i> {product.icerikiki}
          </p>
          <p>
            <i className="fas fa-check"></i> {product.icerikuc}
          </p>
          <p>
            <i className="fas fa-check"></i> {product.icerikdort}
          </p>
          <p>
            <i className="fas fa-check"></i> {product.icerikbes}
          </p>
          <p>
            <i className="fas fa-check"></i> {product.icerikalti}
          </p>
        </span>

        <span className=" ml-4 buyutmek">
          <strong>{product.price}TL</strong>
          <strong>
            <i className="far fa-heart"></i>
          </strong>
        </span>
      </div>
      <div className="col-lg-2 addcard">
        <h6 className="text-center mt-3">Sepetiniz :</h6>
        {cartItems &&
          cartItems.map((item) => <Cart key={item.id} item={item}/>)}
      </div>
    </div>
  );
}
