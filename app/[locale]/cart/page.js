import { notFound } from "next/navigation";
import PageContent from "./pageContent";

export async function generateMetadata({ params }) {
  const { locale } = params;
  return {
    title: "Maha Hot Air Balloons in Dubai",
    description:
      "Reach out to Maha Balloon Adventures for inquiries or bookings.",
    alternates: {
      canonical: `https://mahaballoonadventures.ae/${locale}/cart`,
    },
  };
}

const Cart = ({ params }) => {
  const { locale } = params;
  // Define allowed locales
  const allowedLocales = ["en", "ar"];

  // If the locale is not in the allowed list, return 404
  if (!allowedLocales.includes(locale)) {
    notFound();
  }
  return <PageContent />;
};

export default Cart;
