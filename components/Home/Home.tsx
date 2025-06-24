import Hero from "./Hero/Hero";
import Services from "./Services/Services";
import About from "./About/About";
import WhyChoose from "./WhyChoose/WhyChoose";
import Projects from "./Projects/Projects";
import Review from "./Review/Review";

const Home = () => {
  return (
    <div className="overflow-hidden ">
      <Hero />
      <Services />
      <About />
      <WhyChoose />
      <Projects />
      <Review />
    </div>
  );
};

export default Home;
