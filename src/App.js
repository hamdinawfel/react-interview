import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
// import Card from "./components/Card";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <CallToAction />
      <Footer />
      {/* <Card /> */}
    </div>
  );
}

export default App;
