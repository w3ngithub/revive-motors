import React from "react";

const AboutBanner = () => {
  return (
    <div className="w-full max-w-[1920px] h-[629px] flex flex-col md:flex-row">
      <div className="flex-1 bg-[#F85B29] p-6 flex flex-col justify-center">
        <h2 className="text-h4 font-bold md:text-3xl lg:text-4xl  text-white mb-4">
          Serve our customers and always deliver the customer service
        </h2>
        <p className="text-t2 font-semibold md:text-base text-white">
          We provide a full range of front and mechanical repairs for all makes
          and models of cars, no matter the cause. This includes
        </p>
      </div>
      <div className="flex-1 bg-black p-6 flex flex-col justify-center">
        <h2 className="text-h4 font-bold md:text-3xl lg:text-4xl  text-white mb-4">
          To be the world's most leader in automotive business solutions.
        </h2>
        <p className="text-t2 font-semibold md:text-base text-white">
          We provide a full range of front and mechanical repairs for all makes
          and models of cars, no matter the cause. This includes
        </p>
      </div>
      <div className="flex-1 bg-[#7443CA] p-6 flex flex-col justify-center">
        <h2 className="text-h4 font-bold md:text-3xl lg:text-4xl  text-white mb-4">
          We value the service we provide and our loyal returning customers
        </h2>
        <p className="text-t2 font-semibold md:text-base text-white">
          We provide a full range of front and mechanical repairs for all makes
          and models of cars, no matter the cause. This includes
        </p>
      </div>
    </div>
  );
};

export default AboutBanner;
