"use client";
import CommBanner from "../../components/Common/Banner/Index";
import Testimonial from "../../components/Common/Testimonial/Index";
import GiftOffer from "../../components/Common/GiftOffer/Index";
import FaqsComm from "../../components/Common/Faqs/Index";
// import TimeLine from "../../components/Experiences/Timeline/Index";
import OurPackages from "../../components/Experiences/OurPackages/Index";
import AdditionalServices from "../../components/Experiences/AdditionalServices/Index";
// import BucketList from "../../components/Experiences/BucketList/Index";
import experiencesData from "../../Db/experiences";
import FlightOptions from "../../components/Home/FlightOption/Index";
const bg =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/Banner/experience_banner.webp";

function PageContent() {
  return (
    <>
      <CommBanner title="Experiences" path="Home - Experiences" bg={bg} />
      <OurPackages />
      {/* <BucketList /> */}
      {/* <TimeLine content={experiencesData?.timeLine} /> */}
      <GiftOffer title={"Contact Us for Group Bookings and Special Requests"} />
      <FlightOptions />
      <Testimonial />
      <AdditionalServices content={experiencesData?.additionalServices} />
      <FaqsComm content={experiencesData?.faqsList} />
    </>
  );
}

export default PageContent;
