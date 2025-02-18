"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Banner from "../components/Home/Banner/Banner";
import FeaturedIn from "../components/Home/FeaturedIn/Index";
import WhyUs from "../components/Home/WhyUs/Index";
import OurPackages from "../components/Home/OurPackages/Index";
import GiftOffer from "../components/Common/GiftOffer/Index";
import FlightOptions from "../components/Home/FlightOption/Index";
import Testimonial from "../components/Common/Testimonial/Index";
// import Merchandise from "../components/Home/Merchandise/Index";
import FaqsComm from "../components/Common/Faqs/Index";
import BlogsComm from "../components/Common/Blogs/Index";
//
import BlogListData from "../Db/blogs";
import HomeContent from "../Db/Home";
function PageContent() {
  const [BlogsData, setBlogsData] = useState([]);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
    delay: 3000,
  });

  useEffect(() => {
    let UpdatedBlog = BlogListData?.filter((item) => item?.page == "home");
    setBlogsData(UpdatedBlog);
  }, []);

  return (
    <>
      <Banner />
      <FeaturedIn />
      <div ref={ref} style={{ minHeight: "2px" }}></div>
      <>
        <WhyUs />
        <OurPackages />
        <GiftOffer
          title={"Gift an Unforgettable Hot Air Balloon Adventure Today !!"}
        />
        <FlightOptions />
        <Testimonial />
        {/* <Merchandise /> */}
        <FaqsComm
          content={HomeContent?.faqsList}
          title={"Frequently Asked Questions about Hot Air Balloons in UAE"}
        />
        <BlogsComm
          blogData={BlogsData}
          subTitle={"Tourist Guides on Things To Do In Dubai UAE"}
          title={"Blogs about things to do in Dubai"}
        />
      </>
    </>
  );
}

export default PageContent;
