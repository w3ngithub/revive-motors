import BlogCard from "@/components/custom-components/blog-card";
import BlogHome from "@/components/custom-components/blog-home";
import BlogMultipleCars from "@/components/custom-components/blog-multiple-cars";
import React from "react";

const page = () => {
  return (
    <>
      <BlogHome />
      <BlogCard />
      <BlogMultipleCars />
    </>
  );
};

export default page;
