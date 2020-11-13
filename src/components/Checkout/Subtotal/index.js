import React from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
import { getBasketTotal } from "../../../reducer";
import { useStateValue } from "../../../StateProvider";

import "./Subtotal.css";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <React.Fragment>
            <p>
              Subtotal ({basket?.length} items) : <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains gift
            </small>
          </React.Fragment>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button onClick={() => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
