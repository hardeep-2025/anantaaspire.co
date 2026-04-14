import MetaData from "../Layout/MetaData"
import AboutUs from "./AboutUs/AboutUs"
import Amenities from "./Amenities/Amenities"
import Banner from "./banner/Banner"
import Connectivity from "./Connectivity/Connectivity"
import ContactUs from "./ContactUs/ContactUs"
import FloorPlan from "./FloorPlan/FloorPlan"
import Gallery from "./Gallery/Gallery"
import NewlyLaunched from "./NewlyLaunched/NewlyLaunched"
import PriceList from "./PriceList/PriceList"
// import UnveilingSoon from "./UnveilingSoon/UnveilingSoon"

const Home = () => {

    const localSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "anantaaspire",
  "image": "https://anantaaspire.co/assests/images/logo-new.png",
  "@id": "https://vamanaresidences.com/#realestateagent",
  "url": "https://anantaaspire.co",
  "telephone": "+91-9915841204",
  "priceRange": "Rs1.2Cr - Rs2Cr",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "NH 7, Patiala Rd, Utrathiya",
    "addressLocality": "Zirakpur, Nabha, Punjab",
    "postalCode": "140603",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 30.6481304,
    "longitude": 76.8173181
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  } 
}

    return(
        <>
            <MetaData 
                title={"Ananta Aspire | Buy 3BHK & 4BHK Luxury Apartments in Zirakpur"} 
                description={"Discover premium flats for sale in Zirakpur at Ananta Aspire. Explore luxury flats in Zirakpur with modern amenities. Visit Ananta Aspire today!"} 
                keywords={"The Ananta Aspire, 3 BHK Flats in Zirakpur,4 BHK Flats in Zirakpur, Luxury Apartments in Zirakpur,Zirakpur Real Estate, Flats for Sale in Zirakpur, Ananta Aspire, Modern Apartments Zirakpur"}
                canonicalUrl={process.env.REACT_APP_API_URL}
                localSchema={localSchema}
            />

            <Banner />
            {/* <UnveilingSoon /> */}
            <NewlyLaunched />
            <AboutUs />
            <FloorPlan />
            <PriceList />
            <Amenities />
            <Connectivity />
            <Gallery />
            <ContactUs />
        </>
    )
}

export default Home