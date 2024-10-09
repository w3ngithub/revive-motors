import Banner from "@/components/modules/common/Banner";
import Appointment from "@/components/modules/home-page/Appointment";
import Brands from "@/components/modules/home-page/Brands";
import CustomerSatisfaction from "@/components/modules/home-page/CustomerSatisfaction";
import CustomerView from "@/components/modules/home-page/CustomerView";
import FrequentQuestion from "@/components/modules/home-page/FrequentQuestion";
import Hero from "@/components/modules/home-page/tHero";
import Maintenance from "@/components/modules/home-page/Maintenance";
import ServiceForm from "@/components/modules/home-page/ServiceForm";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceForm />
      <Appointment />
      <Maintenance />
      <Banner />
      <CustomerSatisfaction />
      <Brands />
      <CustomerView />
      <FrequentQuestion />
    </>
  );
}
