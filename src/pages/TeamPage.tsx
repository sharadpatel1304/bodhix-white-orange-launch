import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const TeamPage = () => {
  return (
    <PageTransition>
      <main>
        <Navbar />
        <div className="pt-16">
          <Team />
        </div>
        <Footer />
      </main>
    </PageTransition>
  );
};

export default TeamPage;
