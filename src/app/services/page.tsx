import AboutDiagnostics from "@/components/modules/about-us/AboutDiagnostics";
import AboutProcess from "@/components/modules/about-us/AboutProcess";
import AboutService from "@/components/modules/about-us/AboutService";
import Banner from "@/components/modules/common/Banner";

const page = () => {
  return (
    <div>
      <AboutService />
      <AboutDiagnostics />
      <AboutProcess />
      <Banner />
    </div>
  );
};

export default page;
