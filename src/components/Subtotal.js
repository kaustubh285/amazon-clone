import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { Button } from "@material-ui/core";

function Subtotal() {
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' />
              <span>This order contains a gift</span>
            </small>
          </>
        )}
        decimalScale={2}
        value={1000}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <Button variant='outlined' color='default'>
        Proceed to checkout
      </Button>
    </div>
  );
}

export default Subtotal;
