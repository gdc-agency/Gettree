import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import About from "@/components/homes/home-1/About";
import About2 from "@/components/homes/home-1/About2";
import Blogs from "@/components/homes/home-1/Blogs";
import Contact from "@/components/homes/home-1/Contact";
import Features from "@/components/homes/home-1/Features";
import Hero from "@/components/homes/home-1/Hero";
import Portfolio from "@/components/homes/home-1/Portfolio";
import Process from "@/components/homes/home-1/Process";
import Services from "@/components/homes/home-1/Services";
import Team from "@/components/homes/home-1/Team";
import Testimonials from "@/components/homes/home-1/Testimonials";
export const metadata = {
  title: "Home || Gettree - Garden & Landscaping React Nextjs Template",
  description: "Gettree - Garden & Landscaping React Nextjs Template",
};
export default function Home() {
  return (
    <>
      <div className="boxed blog">
        <Header1 />
        <Hero />
        <Features />
        <About />
        <Services />
        <Team />
        <Portfolio />
        <Testimonials />
        <About2 />
        <Process />
        <Contact />
        <Blogs />
        <Footer1 />
      </div>
    </>
  );
}
