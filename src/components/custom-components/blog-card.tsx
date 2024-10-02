import React from "react";

const BlogCard = () => {
  // border border-red-500
  return (
    // min-h-[100vh]
    <section className="bg-[#f5f5f5] min-h-screen max-w-[100vw] flex flex-row justify-center items-center pb-10  ">
      <div className="container  ">
        {/* max-h-[746px] */}
        <div className="grid lg:grid-cols-12 border border-red-500">
          <div className="col-span-5 border border-red-500  ">
            {/* /////////////////////// */}
            {/* min-h-[746px] */}
            <div className="max-w-[537px]  bg-white border border-gray-200 rounded-none shadow dark:border-gray-700 flex flex-col justify-start items-center ">
              <a href="#">
                {/*  */}
                <img
                  className="rounded-none     mt-4 max-2xl:p-4"
                  src="/project/blog-car-card.png"
                  alt="Auto Diagnostics"
                  width={473}
                  height={330}
                />
              </a>
              <div className="p-5  flex flex-col gap-4 2xl:pl-4">
                <span className="text-b2 text-customColor-grey font-semibold 2xl:pl-4">
                  Posted on October 6th 2021
                </span>
                <a href="#">
                  <h4 className="mb-2 text-h4 font-bold tracking-tight text-gray-900 dark:text-white     2xl:pl-4">
                    Should I Buy a New Car or Lease a New Car in 2021?
                  </h4>
                </a>
                <p className="max-w-[500px] mb-3 text-b2 font-semibold text-customColor-grey leading-relaxed 2xl:pl-4">
                  We provide a full range of front end mechanical repairs for
                  all makes and models of cars, no matter the cause. This
                  includes, We provide a full range of front end mechanical.
                </p>
                <a
                  href="#"
                  className="text-b1 font-semibold inline-flex items-center px-3 py-2 text-sm  text-left rounded-none focus:ring-4 focus:outline-none 2xl:pl-4"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* ///////////////////// */}
          </div>
          <div className="col-span-7  border border-red-500  ">
            {/* /////////// */}

            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="/docs/images/blog/image-4.jpg"
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </a>

            {/* ////////////////// */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
