import Pagetitle from "@/components/common/Pagetitle";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Topbar from "@/components/headers/Topbar";
import Blog from "@/components/otherPages/Blog";

import React from "react";
export const metadata = {
  title: "Blog || Gettree - Garden & Landscaping React Nextjs Template",
  description: "Gettree - Garden & Landscaping React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="boxed blog">
        <Topbar />
        <Header2 />
        <Pagetitle pageName="Blog" />
        <Blog />

        <Footer1 />
      </div>
    </>
  );
}
