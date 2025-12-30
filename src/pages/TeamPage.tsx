import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const TeamPage = () => {
  return (
    <main>
      <Navbar />
      <div className="pt-16">
        <Team />
      </div>
      <Footer />
    </main>
  );
};

export default TeamPage;
