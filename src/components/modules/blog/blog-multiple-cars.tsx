import Image from "next/image";
import Link from "next/link";

const BlogMultipleCars = () => {
  return (
    <section className="container my-10">
      <div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-full">
            <div className="col-span-5">
              <div className="flex max-w-[405px] flex-col items-center justify-start bg-white">
                <Link href="/blog/blog-details">
                  <Image
                    className="mt-4 rounded-none max-2xl:p-4"
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/blog-speed.png`}
                    alt="Auto Diagnostics"
                    width={405}
                    height={266}
                  />
                </Link>
                <div className="my-5 flex flex-col gap-4 max-2xl:pl-3">
                  <span className="text-b2 font-semibold text-customColor-grey">
                    Posted on October 6th 2021
                  </span>
                  <Link href="/blog/blog-details">
                    <h4 className="mb-2 text-t1 font-bold tracking-tight text-gray-900 dark:text-white 2xl:max-w-[375px]">
                      5 Genius Car Accessories You Should Never Drive Without
                    </h4>
                  </Link>
                  <p className="mb-3 max-w-[405px] text-b2 font-semibold leading-relaxed text-customColor-grey">
                    We provide a full range of front end mechanical repairs for
                    all makes and models We provide a full range of front end
                    mechanical repairs for all makes and models
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="col-span-5">
              <div className="flex max-w-[405px] flex-col items-center justify-start bg-white">
                <Link href="/blog/blog-details">
                  <Image
                    className="mt-4 rounded-none max-2xl:p-4"
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/blog-speed.png`}
                    alt="Auto Diagnostics"
                    width={405}
                    height={266}
                  />
                </Link>
                <div className="my-5 flex flex-col gap-4 max-2xl:pl-3">
                  <span className="text-b2 font-semibold text-customColor-grey">
                    Posted on October 6th 2021
                  </span>
                  <Link href="/blog/blog-details">
                    <h4 className="mb-2 text-t1 font-bold tracking-tight text-gray-900 dark:text-white 2xl:max-w-[375px]">
                      5 Genius Car Accessories You Should Never Drive Without
                    </h4>
                  </Link>
                  <p className="mb-3 max-w-[405px] text-b2 font-semibold leading-relaxed text-customColor-grey">
                    We provide a full range of front end mechanical repairs for
                    all makes and models We provide a full range of front end
                    mechanical repairs for all makes and models
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="col-span-5">
              <div className="flex max-w-[405px] flex-col items-center justify-start bg-white">
                <Link href="#">
                  <Image
                    className="mt-4 rounded-none max-2xl:p-4"
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/blog-speed.png`}
                    alt="Auto Diagnostics"
                    width={405}
                    height={266}
                  />
                </Link>
                <div className="my-5 flex flex-col gap-4 max-2xl:pl-3">
                  <span className="text-b2 font-semibold text-customColor-grey">
                    Posted on October 6th 2021
                  </span>
                  <Link href="/blog/blog-details">
                    {/* 375px */}
                    <h4 className="mb-2 text-t1 font-bold tracking-tight text-gray-900 dark:text-white 2xl:max-w-[375px]">
                      5 Genius Car Accessories You Should Never Drive Without
                    </h4>
                  </Link>
                  <p className="mb-3 max-w-[405px] text-b2 font-semibold leading-relaxed text-customColor-grey">
                    We provide a full range of front end mechanical repairs for
                    all makes and models We provide a full range of front end
                    mechanical repairs for all makes and models
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="col-span-5">
              <div className="flex max-w-[405px] flex-col items-center justify-start bg-white">
                <Link href="/blog/blog-details">
                  <Image
                    className="mt-4 rounded-none max-2xl:p-4"
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/blog-speed.png`}
                    alt="Auto Diagnostics"
                    width={405}
                    height={266}
                  />
                </Link>
                <div className="my-5 flex flex-col gap-4 max-2xl:pl-3">
                  <span className="text-b2 font-semibold text-customColor-grey">
                    Posted on October 6th 2021
                  </span>
                  <Link href="/blog/blog-details">
                    <h4 className="mb-2 text-t1 font-bold tracking-tight text-gray-900 dark:text-white 2xl:max-w-[375px]">
                      5 Genius Car Accessories You Should Never Drive Without
                    </h4>
                  </Link>
                  <p className="mb-3 max-w-[405px] text-b2 font-semibold leading-relaxed text-customColor-grey">
                    We provide a full range of front end mechanical repairs for
                    all makes and models We provide a full range of front end
                    mechanical repairs for all makes and models
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="col-span-5">
              <div className="flex max-w-[405px] flex-col items-center justify-start bg-white">
                <Link href="/blog/blog-details">
                  <Image
                    className="mt-4 rounded-none max-2xl:p-4"
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/blog-speed.png`}
                    alt="Auto Diagnostics"
                    width={405}
                    height={266}
                  />
                </Link>
                <div className="my-5 flex flex-col gap-4 max-2xl:pl-3">
                  <span className="text-b2 font-semibold text-customColor-grey">
                    Posted on October 6th 2021
                  </span>
                  <Link href="/blog/blog-details">
                    <h4 className="mb-2 text-t1 font-bold tracking-tight text-gray-900 dark:text-white 2xl:max-w-[375px]">
                      5 Genius Car Accessories You Should Never Drive Without
                    </h4>
                  </Link>
                  <p className="mb-3 max-w-[405px] text-b2 font-semibold leading-relaxed text-customColor-grey">
                    We provide a full range of front end mechanical repairs for
                    all makes and models We provide a full range of front end
                    mechanical repairs for all makes and models
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="col-span-5">
              <div className="flex max-w-[405px] flex-col items-center justify-start bg-white">
                <Link href="/blog/blog-details">
                  <Image
                    className="mt-4 rounded-none max-2xl:p-4"
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/blog-speed.png`}
                    alt="Auto Diagnostics"
                    width={405}
                    height={266}
                  />
                </Link>
                <div className="my-5 flex flex-col gap-4 max-2xl:pl-3">
                  <span className="text-b2 font-semibold text-customColor-grey">
                    Posted on October 6th 2021
                  </span>
                  <Link href="/blog/blog-details">
                    <h4 className="mb-2 text-t1 font-bold tracking-tight text-gray-900 dark:text-white 2xl:max-w-[375px]">
                      5 Genius Car Accessories You Should Never Drive Without
                    </h4>
                  </Link>
                  <p className="mb-3 max-w-[405px] text-b2 font-semibold leading-relaxed text-customColor-grey">
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
