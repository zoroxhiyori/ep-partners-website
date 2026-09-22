import Footer from "@/components/Footer";
import { getServices } from "@/lib/content";
import ServicesClient from "./ServicesClient";

export default function ServicesPage() {
  const raw = getServices();
  const services = raw.map((s) => ({
    number: s.number,
    title: s.title,
    description: s.tagline,
    subServices: s.sub_services,
    icon_bg: s.icon_bg,
    icon_color: s.icon_color,
  }));

  return (
    <main className="flex flex-col">
      <ServicesClient services={services} />
      <Footer />
    </main>
  );
}
