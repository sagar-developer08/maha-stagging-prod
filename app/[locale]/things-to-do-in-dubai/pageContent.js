"use client";
import CommBanner from "../../components/Common/Banner/Index";
import GiftOffer from "../../components/Common/GiftOffer/Index";
import FaqsComm from "../../components/Common/Faqs/Index";
import BlogsComm from "../../components/Common/Blogs/Index";
import SightSeeing from "../../components/ThingsToDo/OurPackages/Index";
// import banner from "../assets/Banner/ThingsToDoInDubaibanner.webp";
// details
import content from "../../Db/thingsTodo";
const banner =
  "https://res.cloudinary.com/dpuuse7d9/image/upload/v1738578623/gdvjfcoaaxynakaajjvy.webp";

function PageContent() {
  return (
    <>
      <CommBanner
        title="Things To Do In Dubai"
        path="Home - Things To Do In Dubai"
        bg={banner}
      />

      <SightSeeing
        cardData={content?.sightSeeing1}
        title={{ en: "Discover the Best Things to Do in Dubai" }}
      />
      <SightSeeing
        cardData={content?.sightSeeing2}
        title={{
          en: "From Hot Air Balloon Rides to Desert Safaris: Dubai's Top Experiences",
        }}
      />
      <SightSeeing
        cardData={content?.sightSeeing3}
        title={{ en: "Must-Visit Attractions for Every Visitor" }}
      />
      <SightSeeing
        cardData={content?.sightSeeing4}
        title={{ en: "Tours and Safaris" }}
      />
      <GiftOffer />
      <FaqsComm content={content?.faqsList} />
      <BlogsComm />
    </>
  );
}

export default PageContent;
