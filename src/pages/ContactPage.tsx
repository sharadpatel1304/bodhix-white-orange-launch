import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const ContactPage = () => {
  return (
    <PageTransition>
      <main>
        <Navbar />
        <div className="pt-16">
          <Contact />
        </div>
        <Footer />
      </main>
    </PageTransition>
  );
};

export default ContactPage;
