import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import About from "./About/About";
import WhyChoose from "./WhyChoose/WhyChoose";
import Projects from "./Projects/Projects";
import Review from "./Review/Review";
import Corousel from "./Corousel/Corousel";

const Home = () => {
  return (
    <div className="overflow-hidden ">
      <Hero />
      <Corousel />
      <Services />
      <About />
      <WhyChoose />
      <Projects />
      <Review />
    </div>
  );
};

export default Home;
