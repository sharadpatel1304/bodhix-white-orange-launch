import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <Services />
      </div>
      <Footer />
    </main>
  );
};

export default ServicesPage;
