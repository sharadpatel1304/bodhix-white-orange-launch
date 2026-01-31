import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const FAQPage = () => {
  return (
    <PageTransition>
      <main>
        <Navbar />
        <div className="pt-20">
          <FAQ />
        </div>
        <Footer />
      </main>
    </PageTransition>
  );
};

export default FAQPage;
