import { notFound } from "next/navigation";
import PageContent from "./pageContent";

export async function generateMetadata({ params }) {
  const { id, locale } = params;

  return {
    title: "Maha Hot Air Balloons in Dubai",
    description: "Maha Hot Air Balloons in Dubai",
    alternates: {
      canonical: `https://newedge-realty-next.vercel.app/${locale}/passengers-details/${id}`,
    },
  };
}

const PassengersDetails = ({ params }) => {
  const { locale } = params;
  // Define allowed locales
  const allowedLocales = ["en", "ar"];

  // If the locale is not in the allowed list, return 404
  if (!allowedLocales.includes(locale)) {
    notFound();
  }
  return <PageContent />;
};

export default PassengersDetails;
