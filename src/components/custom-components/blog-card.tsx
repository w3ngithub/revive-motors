import React from "react";

const BlogCard = () => {
  return (
    <section className="bg-[#f5f5f5]  min-h-[100vh] max-w-[100vw] flex flex-row justify-center items-center ">
      <div className="container ">
        <div className="grid lg:grid-cols-12 border border-red-500 h-[746px]">
          <div className="col-span-5 border border-red-500">
            {/* /////////////////////// */}
            <div className="max-w-[624px] min-h-[710px] bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 flex flex-col justify-center items-center">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="/project/about-diagnostics.png"
                  alt="Auto Diagnostics"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-h3 font-bold tracking-tight text-gray-900 dark:text-white">
                    Auto Diagnostics
                  </h5>
                </a>
                <p className="max-w-[500px] mb-3 text-t2 font-normal text-customColor-grey ">
                  Through True Rich Attended does no end it his mother since
                  favourable real had half every him case in packages enquire we
                  up ecstatic. Through True Rich Attended does no end it his
                  mother.
                </p>
                <a
                  href="#"
                  className="text-b1 font-semibold inline-flex items-center px-3 py-2 text-sm  text-center rounded-lg focus:ring-4 focus:outline-none"
                >
                  See service details
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
          <div className="col-span-7 border border-red-500">2</div>
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
