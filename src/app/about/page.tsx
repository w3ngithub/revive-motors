import AboutDiagnostics from "@/components/custom-components/about-diagnostics";
import AboutProcess from "@/components/custom-components/about-process";
import AboutService from "@/components/custom-components/about-service";
import React from "react";

const page = () => {
  return (
    <div>
      <AboutService />
      <AboutDiagnostics />
      <AboutProcess />
    </div>
  );
};

export default page;
