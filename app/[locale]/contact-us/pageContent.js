"use client";
import CommBanner from "../../components/Common/Banner/Index";
import GiftOffer from "../../components/Common/GiftOffer/Index";
import FaqsComm from "../../components/Common/Faqs/Index";
import Details from "../../components/Contact/Detail/Index";
import ContactForm from "../../components/Contact/Form/index";
import contactData from "../../Db/contact";
const banner =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/Banner/contact%20us%20banner.webp";

function PageContent() {
  return (
    <>
      <CommBanner title="Contact Us" path="Home - Contact Us" bg={banner} />
      <Details />
      <ContactForm />
      <GiftOffer />
      <FaqsComm content={contactData?.faqsList} />
    </>
  );
}

export default PageContent;
