import { notFound } from "next/navigation";
import PageContent from "./pageContent";

export async function generateMetadata({ params }) {
  const { locale } = params;
  return {
    title: "Contact Maha Balloon | Book Your Aerial Adventure Ride in Dubai",
    description:
      "Reach out to Maha Balloon Adventures for inquiries or bookings. Contact us today to plan your unforgettable hot air balloon experience in Dubai.",
    alternates: {
      canonical: `https://mahaballoonadventures.ae/${locale}/contact-us`,
    },
  };
}

const ContactUs = ({ params }) => {
  const { locale } = params;
  // Define allowed locales
  const allowedLocales = ["en", "ar"];

  // If the locale is not in the allowed list, return 404
  if (!allowedLocales.includes(locale)) {
    notFound();
  }
  return <PageContent />;
};

export default ContactUs;
