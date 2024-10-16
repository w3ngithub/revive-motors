import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = () => {
  return (
    <section className="flex min-h-screen max-w-[100vw] flex-row items-center justify-center bg-[#f5f5f5] pb-10">
      <div className="container max-2xl:my-10">
        <div className="grid space-x-10 space-y-10 lg:grid-cols-12">
          <div className="col-span-5">
            <div className="flex max-w-[537px] flex-col items-center justify-start rounded-none border border-gray-200 bg-white shadow">
              <Link href="/blog/blog-details">
                <Image
                  className="mt-4 rounded-none max-2xl:p-4"
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/blog-car-card.png`}
                  alt="Auto Diagnostics"
                  width={473}
                  height={330}
                />
              </Link>
              <div className="flex flex-col gap-4 p-5 2xl:pl-4">
                <span className="text-b2 font-semibold text-customColor-grey 2xl:pl-4">
                  Posted on October 6th 2021
                </span>
                <Link href="#">
                  <h4 className="mb-2 text-h4 font-bold tracking-tight text-gray-900 dark:text-white max-2xl:leading-tight 2xl:pl-4">
                    Should I Buy a New Car or Lease a New Car in 2021?
                  </h4>
                </Link>
                <p className="mb-3 max-w-[500px] text-b2 font-semibold leading-relaxed text-customColor-grey 2xl:pl-4">
                  We provide a full range of front end mechanical repairs for
                  all makes and models of cars, no matter the cause. This
                  includes, We provide a full range of front end mechanical.
                </p>
                <Link
                  href="/blog/blog-details"
                  className="inline-flex items-center rounded-none px-3 py-2 text-left text-b1 text-sm font-semibold focus:outline-none focus:ring-4 2xl:pl-4 gap-2"
                >
                  Read more
                  <span className="w-[52px]">
                    <MoveRight
                      className="arrow-icon w-full"
                      size={38}
                      strokeWidth={1}
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-7 space-y-10 max-sm:!m-auto max-sm:!mt-4 2xl:space-y-0">
            <Link
              href="/blog/blog-details"
              className="flex flex-col items-center bg-[#f5f5f5] hover:bg-gray-100 md:max-w-xl md:flex-row"
            >
              <Image
                className="h-96 w-full rounded-none object-cover md:h-auto md:w-48"
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/blog-car-back.png`}
                alt="Car back"
                width={500}
                height={100}
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-t1 font-bold tracking-tight text-gray-900 max-2xl:leading-tight">
                  Get an Awesome Number Plate for Your New Car
                </h5>
                <p className="mb-3 text-b2 font-semibold text-gray-700">
                  Posted on October 6th 2021
                </p>
              </div>
            </Link>
            <Link
              href="/blog/blog-details"
              className="flex flex-col items-center bg-[#f5f5f5] hover:bg-gray-100 md:max-w-xl md:flex-row"
            >
              <Image
                className="h-96 w-full rounded-none object-cover md:h-auto md:w-48"
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/blog-car-back.png`}
                alt="Car back"
                width={500}
                height={100}
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-t1 font-bold tracking-tight text-gray-900 max-2xl:leading-tight">
                  Get an Awesome Number Plate for Your New Car
                </h5>
                <p className="mb-3 text-b2 font-semibold text-gray-700">
                  Posted on October 6th 2021
                </p>
              </div>
            </Link>
            <Link
              href="/blog/blog-details"
              className="flex flex-col items-center bg-[#f5f5f5] hover:bg-gray-100 md:max-w-xl md:flex-row"
            >
              <Image
                className="h-96 w-full rounded-none object-cover md:h-auto md:w-48"
                src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/blog-car-back.png`}
                alt="Car back"
                width={500}
                height={100}
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-t1 font-bold tracking-tight text-gray-900 max-2xl:leading-tight">
                  Get an Awesome Number Plate for Your New Car
                </h5>
                <p className="mb-3 text-b2 font-semibold text-gray-700">
                  Posted on October 6th 2021
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
