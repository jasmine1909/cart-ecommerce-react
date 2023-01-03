import React from "react";
import "./Cart.scss";
import { RiDeleteBinLine } from "react-icons/ri";
import { cartActions } from "../../redux/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.totalAmount);
  const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const deleteItem = () => {
      dispatch(cartActions.deleteItem(item.id));
    };
    return (
      <tr>
        <td>
          <img src={item.imgUrl} width={100} />
        </td>
        <td>{item.productName}</td>
        <td>{item.price}</td>
        <td>{item.quantity}</td>
        <td>
          <RiDeleteBinLine onClick={deleteItem} />
        </td>
      </tr>
    );
  };
  return (
    <div>
      <div>
        {cartItems.length === 0 ? (
          <h2 className="title"> No items added to the cart</h2>
        ) : (
          <div className="cart-container container">
            <div>
              {" "}
              <table className="table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <CartItem item={item} key={index} />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="total-cart">
              <h4>Subtotal: $ {total}</h4>

              <p> Taxes and shipping will caculate in checkout</p>
              <div className="flex">
                <button className="--btn">
                  <Link to="/shop" style={{ color: "white" }}>
                    Continue Shopping
                  </Link>
                </button>
                <button className="--btn">
                  <Link to="/checkout" style={{ color: "white" }}>
                    {" "}
                    Checkout
                  </Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
