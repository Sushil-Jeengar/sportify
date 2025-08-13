import { SEO } from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

const faqs = [
  { q: "How do I book a professional?", a: "Visit Services, choose a pro, and click Book." },
  { q: "What payment methods are supported?", a: "Stripe Checkout will be supported (credit/debit)." },
  { q: "Can I sell my gear?", a: "Yes, list items from the Marketplace page." },
];

const FAQ = () => (
  <main className="container mx-auto px-4 py-10">
    <SEO title="FAQs | Sportify" description="Frequently asked questions about Sportify." path="/faq" />
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        })}
      </script>
    </Helmet>
    <h1 className="mb-6 text-3xl font-bold">FAQs</h1>
    <Accordion type="single" collapsible className="max-w-2xl">
      {faqs.map((f, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger>{f.q}</AccordionTrigger>
          <AccordionContent>{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </main>
);

export default FAQ;
