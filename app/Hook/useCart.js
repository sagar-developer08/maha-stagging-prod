import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtoCart, clearCart, updateItem } from "../store/cart";
import { toast } from "react-toastify";
function useCart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.products);

  function addItemstoCart(product) {
    let UpdatedProduct = { ...product };

    UpdatedProduct.qty = product?.qty ? product?.qty : 1;

    const CheckProdcut = cartItems?.filter(
      (item) => item?.id == UpdatedProduct?.id
    );

    if (CheckProdcut?.length) {
      toast.info("Product Already in Cart", {
        toastId: `AddtoCard${product?.id}`,
      });
      console.log("Item Is Includes");
      return;
    }

    dispatch(addtoCart(product));
    console.log("Added ");
  }

  async function updateItemsCart(id, qty) {
    let UpdatedItems = await cartItems?.map((item) => {
      if (item?.id == id) {
        return {
          ...item,
          qty: qty,
        };
      } else {
        return { ...item };
      }
    });
    dispatch(updateItem(UpdatedItems));

    toast.success("Product Updated", {
      toastId: `UpdateCart${id}`,
    });
  }

  async function removeItemsCart(id) {
    let RemoveItemFromCart = await cartItems?.filter((item) => item?.id !== id);

    dispatch(updateItem(RemoveItemFromCart));

    toast.success("Product Removed", {
      toastId: `removeItemCart${id}`,
    });
  }

  function clearItemsCart() {
    dispatch(clearCart());
    toast.success("Cart Updated", {
      toastId: `CartClear${id}`,
    });
  }

  return {
    addItemstoCart,
    updateItemsCart,
    removeItemsCart,
    clearItemsCart,
  };
}

export default useCart;
