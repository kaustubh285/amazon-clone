import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { Button } from "@material-ui/core";

function Subtotal({ subTotal, basket }) {
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' />
              <span>This order contains a gift</span>
            </small>
          </>
        )}
        decimalScale={2}
        value={subTotal}
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
