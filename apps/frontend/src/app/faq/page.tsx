import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { MessageSquare, Mail } from "lucide-react";
import { faqItems } from "@/constants/faq";

export default function FAQPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">

      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about QuantumCode
        </p>
      </div>

      <Card className="p-6">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-semibold">Can&apos;t find what you&apos;re looking for?</h2>
          <div className="flex gap-4">
            <Button variant="outline" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Ask in Forum
            </Button>
            <Button variant="outline" className="gap-2">
              <Mail className="h-4 w-4" />
              Contact Support
            </Button>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>

      <Card className="p-6">
        <div className="text-center space-y-4">
          <h2 className="text-xl font-semibold">Still have questions?</h2>
          <p className="text-muted-foreground">
            Our support team is here to help you with any questions you might have.
          </p>
          <Button>Contact Support</Button>
        </div>
      </Card>
    </div>
  );
} 