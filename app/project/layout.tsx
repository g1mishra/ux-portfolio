import Footer from "@/components/Footer";

const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default ProjectLayout;
