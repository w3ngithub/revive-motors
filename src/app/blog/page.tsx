import BlogCard from "@/components/modules/blog/blog-card";
import BlogHome from "@/components/modules/blog/blog-home";
import BlogMultipleCars from "@/components/modules/blog/blog-multiple-cars";
import Banner from "@/components/modules/common/banner";

const page = () => {
  return (
    <>
      <BlogHome />
      <BlogCard />
      <BlogMultipleCars />
      <Banner />
    </>
  );
};

export default page;
