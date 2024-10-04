import Image from "next/image";
import React from "react";

const BlogDetailHome = () => {
  return (
    <section className="container border  border-red-500">
      <article className=" max-w-4xl mx-auto px-4 py-8 border border-red-500">
        <div className="mb-4 text-b2 text-customColor-grey font-semibold">
          Posted on October 6th 2021
        </div>
        <h3 className="text-h3 font-bold mb-4">
          Should I Buy a New Car or Lease a New Car in 2021?
        </h3>
        <p className="text-b2 font-semibold text-customColor-grey mb-8">
          We provide a full range of front end mechanical repairs for all makes
          and models of cars, no matter the cause. This includes: We provide a
          full range of front end mechanical
        </p>
      </article>
      <div>
        <Image
          src="/images/blog-car-cover.png"
          // src="/placeholder.svg?height=628&width=1280"
          alt="White sports car driving on a winding road"
          width={1280}
          height={628}
          className="w-full h-auto -lg mb-8"
        />
      </div>
    </section>
  );
};

export default BlogDetailHome;
