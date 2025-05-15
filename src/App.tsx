import Footer from "./components/Footer";
import Competitive from "./components/competitive";
import Feature from "./components/feature";
import Hero from "./components/hero";
import MathologyWork from "./components/mathology_work";
import Navbar from "./components/navbar";
import Platform from "./components/plateform";
import TrustedBy from "./components/trusted_by";
import Domain from "./components/why_mathology";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <Domain />
      <Platform />
      <Competitive />
      <TrustedBy />
      <MathologyWork />
      <Footer />
    </div>
  );
};

export default App;
