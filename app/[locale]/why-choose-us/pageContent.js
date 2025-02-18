"use client";
import CommBanner from "../../components/Common/Banner/Index";
import Intro from "../../components/About/Intro/Index";
import IntroV2 from "../../components/About/IntroV2/Index";
import FeaturedIn from "../../components/About/FeaturedIn/Index";
import Safety from "../../components/About/Safety/Index";
import OurCerti from "../../components/About/OurCertificate/Index";
import GiftOffer from "../../components/Common/GiftOffer/Index";
import FaqsComm from "../../components/Common/Faqs/Index";
import whyusData from "../../Db/whyus";
const banner =
  "https://d3gelo9cifr8ed.cloudfront.net/assets/New/WhyUs/banner.webp";

function PageContent() {
  return (
    <>
      <CommBanner title="Why Us" path="Home - Why Us" bg={banner} />
      <Intro content={whyusData?.intro} />
      <FeaturedIn />
      <IntroV2 content={whyusData?.intro} />
      <Safety content={whyusData?.safetyMethods} />
      <OurCerti />
      <GiftOffer
        title={"Gift an Unforgettable Hot Air Balloon Adventure!"}
        detail={
          "Customize a package for your loved one and enjoy a FREE adventure for yourself—limited time only!"
        }
      />
      <FaqsComm content={whyusData?.faqsList} />
    </>
  );
}

export default PageContent;
