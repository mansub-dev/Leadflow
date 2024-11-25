import FAQs from "../components/LandingPage/FAQs";
import Features from "../components/LandingPage/Features";
import Navigation from "../components/LandingPage/Navigationbar";
import PageCard from "../components/LandingPage/PageCard";

export function LandingPage() {

  return (
    <div className="theme" >
      <Navigation />
      <div className="flex items-center justify-center mt-10 px-4">
        <PageCard />
      </div>
      <div className="mt-20 px-4 ">
        <Features />
      </div>
      <div className="flex items-center justify-center mb-2 ">
        <FAQs />
      </div>
    </div>
  );
}
