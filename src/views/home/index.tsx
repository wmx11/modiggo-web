import CaseStudies from "./sections/case-studies";
import ContactUs from "./sections/contact-us";
import Hero from "./sections/hero";
import ProductsAndServices from "./sections/products-and-services";
import QuestionsAndAnswers from "./sections/questions-and-answers";
import WhoWeAre from "./sections/who-we-are";

const HomeView = () => {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <CaseStudies />
      <ProductsAndServices />
      <QuestionsAndAnswers />
      <ContactUs />
    </>
  );
};

export default HomeView;
