"use client";
import CommBanner from "../../../components/Common/Banner/Index";
import Passengers from "../../../components/Passengers";

const PageContent = () => {
  return (
    <>
      <CommBanner title="Passenger Details Form" path="passengers-details" />
      <Passengers />
    </>
  );
};

export default PageContent;
