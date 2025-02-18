"use client";
import CommBanner from "../../components/Common/Banner/Index";
import GiftOffer from "../../components/Common/GiftOffer/Index";
import FaqsComm from "../../components/Common/Faqs/Index";
import GalleryList from "../../components/Testimonials/GalleryList/Index";
import testimonial from "../../Db/testimonial";
const banner =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/Banner/contact%20us%20banner.webp";
// details

function PageContent() {
  return (
    <>
      <CommBanner title="Testimonials" path="Home - Testimonials" bg={banner} />
      <GalleryList />
      <GiftOffer />
      <FaqsComm content={testimonial?.faqsList} />
    </>
  );
}

export default PageContent;
