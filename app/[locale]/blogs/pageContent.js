"use client";
import CommBanner from "../../components/Common/Banner/Index";
import GiftOffer from "../../components/Common/GiftOffer/Index";
import FaqsComm from "../../components/Common/Faqs/Index";
import BlogsList from "../../components/Blogs/BlogsList/Index";
const banner =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/Banner/Blogs%20banner.webp";

// details

function PageContent() {
  return (
    <>
      <CommBanner title="Blogs" path="Home - Blogs" bg={banner} />
      <BlogsList />
      <GiftOffer />
      <FaqsComm />
    </>
  );
}

export default PageContent;
