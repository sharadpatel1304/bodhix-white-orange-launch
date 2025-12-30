import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <About />
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
