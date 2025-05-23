import Image from "next/image";

const BlogDetailPost = () => {
  return (
    <section className="container mb-11">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-10">
          <div className="flex flex-col gap-7">
            <h4 className="text-h4 font-bold">This is a blog post headline</h4>
            <p className="text-b2 font-semibold leading-relaxed text-customColor-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet
              dui auctor dictum eget a elit. Pellentesque varius diam risus, ut
              condimentum lorem volutpat vel. Nam vel orci pharetra eros
              pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus,
              pretium interdum justo tincidunt a. Donec at congue lectus. Nulla
              facilisi. Phasellus consectetur sapien accumsan lectus tincidunt
              placerat. Etiam ornare nibh vel dui egestas, eu posuere metus
              convallis.
            </p>
            <p className="text-b2 font-semibold leading-relaxed text-customColor-grey">
              Ut non urna a odio condimentum dictum. Proin egestas erat a orci
              ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
              justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
              nisi velit, ultricies eget enim vel, venenatis mollis ante.
              Maecenas sodales tristique quam. Suspendisse fringilla massa vel
              dolor ornare rhoncus. Nullam ut orci mattis leo varius laoreet sed
              mollis dui. Aenean placerat nec enim ut finibus. Maecenas suscipit
              nibh eu neque egestas, non condimentum mi bibendum. Sed est eros,
              molestie consectetur auctor non, lobortis quis tortor. Nam cursus
              imperdiet massa volutpat hendrerit. Sed suscipit ligula iaculis
              lorem sagittis tincidunt. Etiam pellentesque metus vel enim
              iaculis aliquam. Mauris at nisi sed elit gravida malesuada.
            </p>
          </div>
          <div className="relative h-[598px] w-[full]">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/blog-detail-road.png`}
              alt="Car Pic"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 33.33vw"
            />
          </div>
          <div className="flex flex-col gap-7">
            <p className="text-t1 font-bold">
              This is a small blog post headline
            </p>
            <p className="text-b2 font-semibold leading-relaxed text-customColor-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet
              dui auctor dictum eget a elit. Pellentesque varius diam risus, ut
              condimentum lorem volutpat vel. Nam vel orci pharetra eros
              pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus,
              pretium interdum justo tincidunt a. Donec at congue lectus. Nulla
              facilisi. Phasellus consectetur sapien accumsan lectus tincidunt
              placerat. Etiam ornare nibh vel dui egestas, eu posuere metus
              convallis.
            </p>
          </div>

          <div className="flex min-h-[112px] flex-row items-center justify-center gap-6">
            <p className="border-l-4 border-customColor-black pl-4 text-b1 font-semibold leading-relaxed text-customColor-grey">
              Ut non urna a odio condimentum dictum. Proin egestas erat a orci
              ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
              justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
              nisi velit, ultricies eget enim vel, venenatis mollis ante.
            </p>
          </div>

          <div className="flex flex-col gap-7">
            <p className="text-b2 font-semibold leading-relaxed text-customColor-grey">
              Ut non urna a odio condimentum dictum. Proin egestas erat a orci
              ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
              justo. Vestibulum congue dictum libero finibus vehicula. Aliquam
              nisi velit, ultricies eget enim vel, venenatis mollis ante.
              Maecenas sodales tristique quam. Suspendisse fringilla massa vel
              dolor ornare rhoncus. Nullam ut orci mattis leo varius laoreet sed
              mollis dui. Aenean placerat nec enim ut finibus. Maecenas suscipit
              nibh eu neque egestas, non condimentum mi bibendum. Sed est eros,
              molestie consectetur auctor non, lobortis quis tortor. Nam cursus
              imperdiet massa volutpat hendrerit. Sed suscipit ligula iaculis
              lorem sagittis tincidunt. Etiam pellentesque metus vel enim
              iaculis aliquam. Mauris at nisi sed elit gravida malesuada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailPost;
