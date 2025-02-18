import { notFound } from "next/navigation";
import PageContent from "./pageContent";

export async function generateMetadata({ params }) {
  const { locale } = params;
  return {
    title: "Why Choose Maha Balloon | Hot Air Balloon Adventure In Dubai",
    description:
      "Discover why Maha Balloon Adventures is the top choice for hot air balloon rides in Dubai. Experience unmatched service, breathtaking views, and memories.",
    alternates: {
      canonical: `https://mahaballoonadventures.ae/${locale}/why-choose-us`,
    },
  };
}

const WhyChooseUs = ({ params }) => {
  const { locale } = params;
  // Define allowed locales
  const allowedLocales = ["en", "ar"];

  // If the locale is not in the allowed list, return 404
  if (!allowedLocales.includes(locale)) {
    notFound();
  }
  return <PageContent />;
};

export default WhyChooseUs;
