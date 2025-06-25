
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQs = () => {
  const faqs = [
    {
      question: 'Is TekFlow suitable for small businesses?',
      answer: 'Absolutely! TekFlow is designed to scale with your business. Whether you\'re a startup or an enterprise, our platform adapts to your needs and grows with you.'
    },
    {
      question: 'How secure is my data?',
      answer: 'We take security seriously. TekFlow uses enterprise-grade encryption, is SOC 2 certified, and complies with GDPR and other international data protection standards.'
    },
    {
      question: 'Can I integrate TekFlow with existing systems?',
      answer: 'Yes! TekFlow offers extensive integration capabilities with over 500 APIs and popular business tools. Our team can also help with custom integrations.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a free demo and trial period so you can explore all features before making a commitment. No credit card required for the trial.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide 24/7 customer support, comprehensive documentation, video tutorials, and dedicated account managers for enterprise clients.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about TekFlow
          </p>
        </div>

        <div className="animate-fade-in">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 rounded-2xl px-8 border-none"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
