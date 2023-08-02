import { CTA } from "../../../modules/common/CTA";
import { Testimonials } from "../../../modules/common/Testimonials";
import { OurClients } from "../../../modules/common/OurClients";
import { MobileAppAdvertisement } from "../../../modules/common/MobileAppAdvertisement";
import { WhyChooseUs } from "../../../modules/services/WhyChooseUs";
import { Restro } from "../../../modules/services/Restro";
import { Touch } from "../../../modules/contact/Touch";
import { Message } from "../../../modules/contact/Message";

export default function ContactPage() {
  return (
    <main className="min-h-screen items-center justify-between p-24">
      <Touch />
      <Message />
    </main>
  );
}
