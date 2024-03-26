import "./Cart.css";
import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";

export function Cart() {
  const cartCheckboxId = useId();
 
  return (
    <>
        <label className="cart-button" htmlFor={ cartCheckboxId }>
            <CartIcon />
        </label>
        <input id={ cartCheckboxId } type="checkbox" hidden />
 
        <aside>
            <ul>
                <li>
                    <img src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg" alt="iPhone" />
                    <div>
                        <strong>iPhone 9</strong> - $9999.99
                    </div>
 
                    <footer>
                        <small>Qty: 1</small>
                        <button>+</button>
                    </footer>
                </li>
            </ul>
 
            <button>
                <ClearCartIcon />
            </button>
        </aside>
    </>
  );
}
 