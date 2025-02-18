import { notFound } from "next/navigation";
import PageContent from "./pageContent";

export async function generateMetadata({ params }) {
  const { locale } = params;
  return {
    title: "Maha Hot Air Balloons | Get Your Aerial Adventure Ride",
    description: "Maha Hot Air Balloons | Get Your Aerial Adventure Ride",
    alternates: {
      canonical: `https://mahaballoonadventures.ae/${locale}/terms-of-service`,
    },
  };
}

const TermsOfService = ({ params }) => {
  const { locale } = params;
  // Define allowed locales
  const allowedLocales = ["en", "ar"];

  // If the locale is not in the allowed list, return 404
  if (!allowedLocales.includes(locale)) {
    notFound();
  }
  return <PageContent />;
};

export default TermsOfService;
