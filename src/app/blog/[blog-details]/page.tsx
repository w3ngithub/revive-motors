import BlogDetailHome from "@/components/modules/blog/blog-detail/blog-detail-home";
import BlogDetailPost from "@/components/modules/blog/blog-detail/blog-detail-post";
import Banner from "@/components/modules/common/banner";

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
