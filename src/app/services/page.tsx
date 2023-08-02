import { CTA } from "../../../modules/common/CTA";
import { Testimonials } from "../../../modules/common/Testimonials";
import { OurClients } from "../../../modules/common/OurClients";
import { MobileAppAdvertisement } from "../../../modules/common/MobileAppAdvertisement";
import { WhyChooseUs } from "../../../modules/services/WhyChooseUs";
import { Restro } from "../../../modules/services/Restro";

export default function ServicePage() {
  return (
    <main className="min-h-screen items-center justify-between p-24">
      <Restro />
      <WhyChooseUs />
      <CTA />
      <OurClients />
      <MobileAppAdvertisement />
    </main>
  );
}
