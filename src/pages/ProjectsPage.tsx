import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const ProjectsPage = () => {
  return (
    <PageTransition>
      <main>
        <Navbar />
        <div className="pt-16">
          <Projects />
        </div>
        <Footer />
      </main>
    </PageTransition>
  );
};

export default ProjectsPage;
