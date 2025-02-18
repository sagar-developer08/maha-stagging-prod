"use client";
import { useState, useEffect } from "react";
import CommBanner from "../../../components/Common/Banner/Index";
import GiftOffer from "../../../components/Common/GiftOffer/Index";
import FaqsComm from "../../../components/Common/Faqs/Index";
import BlogDetails from "../../../components/BlogDetails/Details/Index";
import BlogsRelated from "../../../components/BlogDetails/BlogsRelated/Index";
import { useInView } from "react-intersection-observer";
import ReisterFormModal from "../../../components/BlogDetails/DiscountPop/Index";
const banner =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/Banner/Blog%20Inner%20banner.webp";

const PageContent = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: false,
    delay: 300,
  });

  const [FormModalShow, setFormModalShow] = useState(false);

  useEffect(() => {
    if (inView) {
      setFormModalShow(true);
    }
  }, [inView]);

  return (
    <>
      <CommBanner title="Blogs" path="Home - Blogs" bg={banner} />
      <BlogDetails />
      <BlogsRelated />
      <GiftOffer />
      <FaqsComm />
      {/*  */}
      <ReisterFormModal show={FormModalShow} setShow={setFormModalShow} />
      <div ref={ref} style={{ minHeight: "20px" }}></div>
    </>
  );
};

export default PageContent;
