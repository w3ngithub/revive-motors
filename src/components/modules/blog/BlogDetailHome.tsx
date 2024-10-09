import Image from "next/image";

const BlogDetailHome = () => {
  return (
    <section className="container">
      <article className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-4 text-b2 font-semibold text-customColor-grey">
          Posted on October 6th 2021
        </div>
        <h3 className="mb-4 text-h3 font-bold max-2xl:max-w-[750px] max-2xl:leading-tight">
          Should I Buy a New Car or Lease a New Car in 2021?
        </h3>
        <p className="mb-8 text-b2 font-semibold text-customColor-grey max-2xl:max-w-[750px]">
          We provide a full range of front end mechanical repairs for all makes
          and models of cars, no matter the cause. This includes: We provide a
          full range of front end mechanical
        </p>
      </article>
      <div>
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/blog-car-cover.png`}
          alt="White sports car driving on a winding road"
          width={1280}
          height={628}
          className="-lg mb-8 h-auto w-full"
          priority
        />
      </div>
    </section>
  );
};

export default BlogDetailHome;
