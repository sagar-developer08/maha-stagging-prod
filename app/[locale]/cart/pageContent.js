"use client";
import CommBanner from "../../components/Common/Banner/Index";
import CartBody from "../../components/Cart/index";

function PageContent() {
  return (
    <>
      <CommBanner title="Cart" path="Home - Cart" />
      <CartBody />
    </>
  );
}

export default PageContent;
