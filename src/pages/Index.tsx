import NotificationBar from "@/components/NotificationBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <main>
        <NotificationBar />
        <Navbar />
        <Hero />
        <FeaturesSection />
        <StatsSection />
        <CTASection />
        <Footer />
      </main>
    </PageTransition>
  );
};

export default Index;
