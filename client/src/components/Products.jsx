import React from "react";
import { useStateValue } from "./StateProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Products({id,img, detail,rating, price, off}) {
   const [{basket}, dispatch] = useStateValue();

  React.useEffect(() => {
    if (basket.length > 0) {
      toast.success("Item added to cart", {
        autoClose: 900,
      });
    }
  },[basket]);

   const addToBasket = () => {
     dispatch({
       type: "ADD_TO_BASKET",
       item: {
         id: id,
         img: img,
         detail: detail,
         rating: rating,
         price: price,
         off: off,
       },
     });
   };
  return (
    <div className="product">
      <img src={img} alt="p" />
      <div className="product-info">
        <p>{detail}</p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <p className="product-price">
          <p>Free delivery next day</p>
          <small>₹</small>
          <strong>{price} </strong>
          <small>{off}</small>
        </p>
        <button onClick={addToBasket}>Add to cart</button>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
}
