import Footer2 from "@/components/footers/Footer2";
import Header2 from "@/components/headers/Header2";
import Topbar from "@/components/headers/Topbar";
import About from "@/components/homes/home-2/About";
import Blogs from "@/components/homes/home-2/Blogs";
import Facts from "@/components/homes/home-2/Facts";
import Hero from "@/components/homes/home-2/Hero";
import Portfolio from "@/components/homes/home-2/Portfolio";
import Services from "@/components/homes/home-2/Services";
import Services2 from "@/components/homes/home-2/Services2";
import Shop from "@/components/homes/home-2/Shop";
import Testimonials from "@/components/homes/home-2/Testimonials";
import React from "react";
export const metadata = {
  title: "Home 02 || Gettree - Garden & Landscaping React Nextjs Template",
  description: "Gettree - Garden & Landscaping React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="boxed blog">
        <Topbar />
        <Header2 />
        <Hero />
        <Services />
        <About />
        <Services2 />
        <Shop />
        <Facts />
        <Portfolio />
        <Testimonials />
        <Blogs />
        <Footer2 />
      </div>
    </>
  );
}
