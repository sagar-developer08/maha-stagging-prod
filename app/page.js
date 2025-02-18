import PageContent from "./pageContent";

export async function generateMetadata() {
  return {
    title: "Maha Hot Air Balloons | Certified Hot Air Balloon Ride in UAE",
    description:
      "Experience stunning views of the desert and create unforgettable memories with our expert-guided aerial adventures. Book your hot air balloon Dubai today!",
    alternates: {
      canonical: `https://mahaballoonadventures.ae`,
    },
  };
}

const Home = () => {
  return <PageContent />;
};

export default Home;

// // app/page.js (default page)
// import LocaleRedirector from "./LocaleRedirector";
// import Loader from "./components/Common/Loader/Loader"; // Import your client-side redirect component

// export default function Page({ params }) {
//   return (
//     <div>
//       <LocaleRedirector locale={params.locale} /> <Loader />
//     </div>
//   );
// }
