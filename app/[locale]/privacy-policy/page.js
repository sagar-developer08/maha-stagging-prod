import { notFound } from "next/navigation";
import PageContent from "./pageContent";

export async function generateMetadata({ params }) {
  const { locale } = params;
  return {
    title: "Customer Privacy Policy | Maha Hot Air Balloons in Dubai",
    description: "Customer Privacy Policy | Maha Hot Air Balloons in Dubai",
    alternates: {
      canonical: `https://mahaballoonadventures.ae/${locale}/privacy-policy`,
    },
  };
}

const PrivacyPolicy = ({ params }) => {
  const { locale } = params;
  // Define allowed locales
  const allowedLocales = ["en", "ar"];

  // If the locale is not in the allowed list, return 404
  if (!allowedLocales.includes(locale)) {
    notFound();
  }
  return <PageContent />;
};

export default PrivacyPolicy;
