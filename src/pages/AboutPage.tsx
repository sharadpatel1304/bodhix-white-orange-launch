import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const AboutPage = () => {
  return (
    <PageTransition>
      <main>
        <Navbar />
        <div className="pt-20">
          <About />
        </div>
        <Footer />
      </main>
    </PageTransition>
  );
};

export default AboutPage;
