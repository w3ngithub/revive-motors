import BlogCard from "@/components/modules/blog/BlogCard";
import BlogHome from "@/components/modules/blog/BlogHome";
import BlogMultipleCars from "@/components/modules/blog/BlogMultipleCars";
import Banner from "@/components/modules/common/tBanner";

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
