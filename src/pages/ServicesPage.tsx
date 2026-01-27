import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const ServicesPage = () => {
  return (
    <PageTransition>
      <main>
        <Navbar />
        <div className="pt-20">
          <Services />
        </div>
        <Footer />
      </main>
    </PageTransition>
  );
};

export default ServicesPage;
