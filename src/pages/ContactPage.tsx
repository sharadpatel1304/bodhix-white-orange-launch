import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default ContactPage;
