import Image from "next/image";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Javena Melo",
      role: "Founder, Director",
      image: "/images/man-profile.png",
    },
    {
      name: "Paul Honson",
      role: "Head Technician",
      image: "/images/man-profile.png",
    },
    {
      name: "Devon Lane",
      role: "Technician",
      image: "/images/man-profile.png",
    },
    {
      name: "Jalen Davies",
      role: "Marketing Manager",
      image: "/images/man-profile.png",
    },
    {
      name: "Kylee Danford",
      role: "Sales Manager",
      image: "/images/man-profile.png",
    },
    {
      name: "Luisa Wilson",
      role: "Support Assistant",
      image: "/images/man-profile.png",
    },
  ];
  //   man-profile
  return (
    <section className="container mb-7 bg-white px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-h1 font-extrabold">
          Meet our Team
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH + member.image}`}
                alt={member.name}
                width={405}
                height={316}
                className="h-64 w-full object-cover"
              />
              <div className="h-[116px]text-center flex w-full flex-col items-center justify-center bg-black p-4 text-t2 text-customColor-white">
                <p className="font-semibold">{member.name}</p>
                <p className="text-b2 font-semibold text-customColor-grey">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
