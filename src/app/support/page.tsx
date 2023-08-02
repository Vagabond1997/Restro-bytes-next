import { CTA } from "../../../modules/common/CTA";
import { Testimonials } from "../../../modules/common/Testimonials";
import { OurClients } from "../../../modules/common/OurClients";
import { MobileAppAdvertisement } from "../../../modules/common/MobileAppAdvertisement";
import { WhyChooseUs } from "../../../modules/services/WhyChooseUs";
import { Restro } from "../../../modules/services/Restro";
import { Model } from "../../../modules/support/model";
import { Waiter } from "../../../modules/support/Waiter";
import { Billing } from "../../../modules/support/Billing";
import { Screenshot } from "../../../modules/support/Screenshot";
import { Feature } from "../../../modules/landing/Feature";

export default function Support() {
  return (
    <main className="min-h-screen items-center justify-between p-24">
      <Feature />
      <Model />
      <Waiter />
      <Billing />
      <CTA />
      <Screenshot />
    </main>
  );
}
