import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What makes Tallybee different from other bookkeeping services?",
    answer:
      "We specialize exclusively in QuickBooks Online for small businesses. This focused expertise means we know the platform inside and out, can set up your books properly from day one, and provide insights specific to your QBO data.",
  },
  {
    question: "How quickly can you get my books up to date?",
    answer:
      "Most catch-up work is completed within 2-3 weeks, depending on the volume of transactions and the current state of your records. We'll provide a timeline after reviewing your specific situation during our consultation.",
  },
  {
    question: "Do I need to have QuickBooks Online already?",
    answer:
      "No worries if you don't have QBO yet! We can help you set up the right subscription level for your business needs and get everything configured properly from the start.",
  },
  {
    question: "What information do you need from me each month?",
    answer:
      "We'll need access to your bank statements, credit card statements, receipts, and any other financial documents. We can work with digital files, photos, or even help you organize a system that works for your business.",
  },
  {
    question: "How do you ensure my financial data stays secure?",
    answer:
      "We use bank-level security protocols, encrypted connections, and follow strict data privacy practices. Your QuickBooks access is read-only when possible, and we never store sensitive information on unsecured devices.",
  },
  {
    question: "Can you help with tax preparation?",
    answer:
      "While we don't prepare tax returns, we ensure your books are organized and accurate so your tax preparer has everything they need. We can provide clean P&L statements, balance sheets, and detailed transaction reports.",
  },
  {
    question: "What if I have questions about my financial reports?",
    answer:
      "That's what we're here for! Each month includes time for questions and explanations. We want you to understand your numbers and feel confident making business decisions based on your financial data.",
  },
  {
    question: "Do you work with businesses in my industry?",
    answer:
      "We work with a wide variety of small businesses including consultants, contractors, retail stores, restaurants, service providers, and e-commerce businesses. Our QuickBooks expertise translates across industries.",
  },
]

export function ExpandedFAQ() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-brand-navy mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600">Everything you need to know about working with Tallybee</p>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold text-brand-navy hover:text-brand-blue">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 leading-relaxed">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
