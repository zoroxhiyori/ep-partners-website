import { getAllFAQItems } from "@/lib/content";
import ContactClient from "./ContactClient";

export default function ContactPage() {
  const faqs = getAllFAQItems();

  return (
    <main className="flex flex-col">
      <ContactClient faqs={faqs} />
    </main>
  );
}
