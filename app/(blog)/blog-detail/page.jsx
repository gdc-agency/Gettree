import Pagetitle from "@/components/common/Pagetitle";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Topbar from "@/components/headers/Topbar";

import BlogDetails from "@/components/otherPages/BlogDetails";

import React from "react";
export const metadata = {
  title: "Blog Details || Gettree - Garden & Landscaping React Nextjs Template",
  description: "Gettree - Garden & Landscaping React Nextjs Template",
};
export default function page() {
  return (
    <>
      <div className="boxed blog">
        <Topbar />
        <Header2 />
        <Pagetitle pageName="Blog Details" />
        <BlogDetails />

        <Footer1 />
      </div>
    </>
  );
}
