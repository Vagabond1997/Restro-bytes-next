import { Welcome } from "../../modules/landing/Welcome";
import { Features } from "../../modules/landing/Features";
import { About } from "../../modules/landing/About";
import { CTA } from "../../modules/common/CTA";
import { Testimonials } from "../../modules/common/Testimonials";
import { OurClients } from "../../modules/common/OurClients";
import { MobileAppAdvertisement } from "../../modules/common/MobileAppAdvertisement";
import { Services } from "../../modules/landing/Services";

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-between p-24">
      <Welcome />
      <About />
      <Features />
      <CTA />
      <Testimonials />
      <OurClients />
      <MobileAppAdvertisement />
    </main>
  );
}
