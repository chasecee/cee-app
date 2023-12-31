import Footer from "./Footer";
import Header from "./Header";
import CTA from "./CTA";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  showCTA?: boolean;
};

export default function Container({
  children,
  className,
  showCTA,
}: ContainerProps) {
  return (
    <div
      className={`root min-h-screen w-full ${className} mt-24 px-0 md:mt-0 `}
    >
      <div className="container relative z-0">
        <Header />
        <main>{children}</main>
        {showCTA && (
          <CTA
            title="Let's get to work."
            subtitle="I build powerful and beautiful applications for businesses of all sizes. I'm available for work, let's get started!"
            primaryLink="/contact"
            secondaryLink="/about"
            outerClass=""
          />
        )}
        <Footer />
      </div>
    </div>
  );
}
