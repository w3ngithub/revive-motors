import Appointment from "@/components/custom-components/appointment";
import Banner from "@/components/custom-components/Banner";
import Brands from "@/components/custom-components/brands";
import CustomerSatisfaction from "@/components/custom-components/customer-satisfaction";
import CustomerView from "@/components/custom-components/customer-view";
import Footer from "@/components/custom-components/footer";
import FrequentQuestion from "@/components/custom-components/frequent-question";
import GetInTouch from "@/components/custom-components/get-in-touch";
import Hero from "@/components/custom-components/hero";
import Maintenance from "@/components/custom-components/maintenance";
import ServiceForm from "@/components/custom-components/service-form";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceForm />
      <Appointment />
      <Maintenance />
      {/* <GetInTouch /> */}
      <Banner />
      <CustomerSatisfaction />
      <Brands />
      <CustomerView />
      <FrequentQuestion />
      {/* <Footer /> */}
    </>
  );
}
