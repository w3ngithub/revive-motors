// import BlogCard from "@/components/custom-components/blog-card";
// import BlogHome from "@/components/custom-components/blog-home";
// import BlogMultipleCars from "@/components/custom-components/blog-multiple-cars";
import BlogCard from "@/components/modules/blog/blog-card";
import BlogHome from "@/components/modules/blog/blog-home";
import BlogMultipleCars from "@/components/modules/blog/blog-multiple-cars";
import Banner from "@/components/modules/common/banner";
import React from "react";

const page = () => {
  return (
    <>
      <div>  
        <BlogHome />
        <BlogCard />
        <BlogMultipleCars />
        <Banner />
      </div>
    </>
  );
};

export default page;
