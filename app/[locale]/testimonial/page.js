import { notFound } from "next/navigation";
import PageContent from "./pageContent";

export async function generateMetadata({ params }) {
  const { locale } = params;
  return {
    title: "Testimonials | Hot Air Balloons in Dubai | Maha Balloons",
    description:
      "Read reviews and testimonials from our satisfied customers. See why Maha Balloon Adventures is the top choice for hot air balloon rides in Dubai.",
    alternates: {
      canonical: `https://mahaballoonadventures.ae/${locale}/testimonial`,
    },
  };
}

const Testimonial = ({ params }) => {
  const { locale } = params;
  // Define allowed locales
  const allowedLocales = ["en", "ar"];

  // If the locale is not in the allowed list, return 404
  if (!allowedLocales.includes(locale)) {
    notFound();
  }
  return <PageContent />;
};

export default Testimonial;
