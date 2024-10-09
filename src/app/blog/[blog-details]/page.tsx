import BlogDetailHome from "@/components/modules/blog/BlogDetailHome";
import BlogDetailPost from "@/components/modules/blog/BlogDetailPost";
import Banner from "@/components/modules/common/tBanner";

const page = () => {
  return (
    <>
      <BlogDetailHome />
      <BlogDetailPost />
      <Banner />
    </>
  );
};

export default page;
