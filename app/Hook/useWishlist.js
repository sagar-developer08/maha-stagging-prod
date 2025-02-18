import React from "react";
import { useSelector, useDispatch } from "react-redux";

function useWishlist() {
  const dispatch = useDispatch();
  const wishListItems = useSelector((state) => state.wishlist.products);
  return {};
}

export default useWishlist;
