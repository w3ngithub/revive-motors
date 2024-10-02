import Image from "next/image";
import React from "react";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Javena Melo",
      role: "Founder, Director",
      image: "/project/man-profile.png",
    },
    {
      name: "Paul Honson",
      role: "Head Technician",
      image: "/project/man-profile.png",
    },
    {
      name: "Devon Lane",
      role: "Technician",
      image: "/project/man-profile.png",
    },
    {
      name: "Jalen Davies",
      role: "Marketing Manager",
      image: "/project/man-profile.png",
    },
    {
      name: "Kylee Danford",
      role: "Sales Manager",
      image: "/project/man-profile.png",
    },
    {
      name: "Luisa Wilson",
      role: "Support Assistant",
      image: "/project/man-profile.png",
    },
    // { name: "Luisa Wilson", role: "Support Assistant", image: "/placeholder.svg?height=400&width=300" },
  ];
  //   man-profile
  return (
    <section className="container py-12 px-4 bg-white mb-7 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-h1 font-extrabold text-center mb-8">
          Meet our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={member.image}
                alt={member.name}
                width={405}
                height={316}
                className="w-full h-64 object-cover"
              />
              <div className="bg-black text-t2 text-customColor-white p-4 w-full h-[116px]text-center flex flex-col justify-center items-center">
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
