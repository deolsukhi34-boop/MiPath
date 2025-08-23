import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import ProcessStepper from "@/components/process-stepper";
import LatestNews from "@/components/latest-news";
import VisaTypes from "@/components/visa-types";
import HappyClients from "@/components/happy-clients";
import AboutUs from "@/components/about-us";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-off-white">
      <Navigation />
      <Hero />
      <ProcessStepper />
      <LatestNews />
      <VisaTypes />
      <HappyClients />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}
