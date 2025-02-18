import { notFound } from "next/navigation";
import PageContent from "./pageContent";

export async function generateMetadata({ params }) {
  const { locale } = params;
  return {
    title: "Best Things to Do in Dubai | Outdoor Activities | Maha Balloon",
    description:
      "Explore the Best Things To Do in Dubai! From the Burj Khalifa and Dubai Mall to Desert Safaris and Nightlife, Discover unforgettable Outdoor Activities.",
    alternates: {
      canonical: `https://mahaballoonadventures.ae/${locale}/things-to-do-in-dubai`,
    },
  };
}

const ThingsToDo = ({ params }) => {
  const { locale } = params;
  // Define allowed locales
  const allowedLocales = ["en", "ar"];

  // If the locale is not in the allowed list, return 404
  if (!allowedLocales.includes(locale)) {
    notFound();
  }
  return <PageContent />;
};

export default ThingsToDo;
