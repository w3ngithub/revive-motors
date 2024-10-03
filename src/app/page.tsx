import Banner from "@/components/modules/common/banner";
import Appointment from "@/components/modules/home-page/appointment";
import Brands from "@/components/modules/home-page/brands";
import CustomerSatisfaction from "@/components/modules/home-page/customer-satisfaction";
import CustomerView from "@/components/modules/home-page/customer-view";
import FrequentQuestion from "@/components/modules/home-page/frequent-question";
import Hero from "@/components/modules/home-page/hero";
import Maintenance from "@/components/modules/home-page/maintenance";
import ServiceForm from "@/components/modules/home-page/service-form";


export default function Home() {
  return (
    <>
     <div>
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
     </div> 
     
    </>
  );
}