import Banner from "@/components/modules/common/tBanner";
import Appointment from "@/components/modules/home-page/tAppointment";
import Brands from "@/components/modules/home-page/tBrands";
import CustomerSatisfaction from "@/components/modules/home-page/CustomerSatisfaction";
import CustomerView from "@/components/modules/home-page/CustomerView";
import FrequentQuestion from "@/components/modules/home-page/FrequentQuestion";
import Hero from "@/components/modules/home-page/tHero";
import Maintenance from "@/components/modules/home-page/tMaintenance";
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
