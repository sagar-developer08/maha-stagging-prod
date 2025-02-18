"use client";
import CommBanner from "../../components/Common/Banner/Index";
import WishlistBody from "../../components/Wishlist/index";

function PageContent() {
  return (
    <>
      <CommBanner title="Wishlist" path="Home - Wishlist" />
      <WishlistBody />
    </>
  );
}

export default PageContent;
