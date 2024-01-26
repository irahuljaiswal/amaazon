import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import CartProducts from "./CartProducts";

export default function Cart() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="cart--main">
      <div className="cart--left">
        <h2>Shopping Cart</h2>
        {basket.map(item => (
          <CartProducts
            id={item.id}
            img={item.img}
            detail={item.detail}
            rating={item.rating}
            price={item.price}
            off={item.off}
          />
        ))}
      </div>

      <div className="cart--right">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({basket?.length} items):<strong>{value}</strong>
              </p>
              <small className="checkbox-cart">
                <input type="checkbox" />
                This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType="text"
          prefix={"₹"}
          thousandSeparator={true}
        />
        <button className="checkout--btn">Proceed to checkout</button>
      </div>
    </div>
  );
}
