import Pagetitle from "@/components/common/Pagetitle";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Topbar from "@/components/headers/Topbar";
import About1 from "@/components/homes/home-1/About";
import Process from "@/components/homes/home-1/Process";
import About from "@/components/homes/home-2/About";
import Facts from "@/components/homes/home-2/Facts";
import Testimonials from "@/components/homes/home-2/Testimonials";
import React from "react";
export const metadata = {
  title: "About Us || Gettree - Garden & Landscaping React Nextjs Template",
  description: "Gettree - Garden & Landscaping React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="boxed blog">
        <Topbar />
        <Header2 />
        <Pagetitle />
        <About1 />
        <div
          className="themesflat-spacer clearfix"
          data-desktop={134}
          data-mobile={60}
          data-smobile={60}
        />

        <About />
        <Process />
        <Facts />

        <Testimonials />
        <Footer1 />
      </div>
    </>
  );
}
