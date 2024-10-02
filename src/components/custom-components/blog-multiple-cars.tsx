import React from "react";

const BlogMultipleCars = () => {
  return (
    <section className="container my-10">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8    ">
          {/* h-[606px] */}
          <div className=" w-full">
            <div className="col-span-5      ">
              {/* /////////////////////// */}
              {/* min-h-[746px] */}
              <div className="max-w-[405px] bg-white  flex flex-col justify-start items-center    ">
                <a href="#">
                  {/*  */}
                  <img
                    className="rounded-none     mt-4 max-2xl:p-4"
                    src="/project/blog-speed.png"
                    alt="Auto Diagnostics"
                    width={405}
                    height={266}
                  />
                </a>
                <div className="my-5  flex flex-col gap-4  max-2xl:pl-3     ">
                  <span className="text-b2 text-customColor-grey font-semibold      ">
                    Posted on October 6th 2021
                  </span>
                  <a href="#">
                    {/* 375px */}
                    <h4 className="mb-2 text-t1 font-bold tracking-tight text-gray-900 dark:text-white        2xl:max-w-[375px]">
                      5 Genius Car Accessories You Should Never Drive Without
                    </h4>
                  </a>
                  <p className=" mb-3 text-b2 font-semibold text-customColor-grey leading-relaxed       max-w-[405px]    ">
                    We provide a full range of front end mechanical repairs for
                    all makes and models We provide a full range of front end
                    mechanical repairs for all makes and models
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogMultipleCars;
