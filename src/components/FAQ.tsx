import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do we begin a project with BodhiX?",
        a: "It starts with a conversation. We schedule a discovery call to understand your business, challenges, and goals. From there, we provide a clear proposal with timeline and investment."
      },
      {
        q: "What information do you need from us?",
        a: "We'll need to understand your business goals, target audience, existing systems, and key pain points. The more context you share, the better we can tailor our solution."
      },
      {
        q: "How long does a typical project take?",
        a: "A simple web application might take 4-6 weeks. A comprehensive platform could be 3-6 months. We always provide realistic timelines upfront."
      }
    ]
  },
  {
    category: "Process",
    questions: [
      {
        q: "What makes BodhiX different?",
        a: "We focus on simplicity and results. No bloated solutions, no unnecessary features. We build exactly what you need—nothing more, nothing less."
      },
      {
        q: "Do you work with startups?",
        a: "Both startups and enterprises. We've helped startups launch MVPs and helped enterprises modernize legacy systems."
      },
      {
        q: "Direct communication with developers?",
        a: "Absolutely. No layers of project managers between you and the people building your product."
      }
    ]
  },
  {
    category: "Technical",
    questions: [
      {
        q: "What technologies do you use?",
        a: "We're technology-agnostic. We often work with React, Node.js, Python, and modern cloud infrastructure. We prioritize proven, maintainable technologies."
      },
      {
        q: "Ongoing support after launch?",
        a: "Yes. We offer maintenance packages for updates, security patches, and feature enhancements."
      },
      {
        q: "Can you integrate with existing systems?",
        a: "Most likely, yes. We have experience with a wide range of APIs, databases, and third-party services."
      }
    ]
  },
  {
    category: "Investment",
    questions: [
      {
        q: "How do you price projects?",
        a: "Fixed-price when scope is clear. Time-and-materials for evolving requirements. Either way, you'll know what to expect."
      },
      {
        q: "Payment structure?",
        a: "Milestone-based payments—a deposit to begin, then payments tied to deliverables."
      },
      {
        q: "What if requirements change?",
        a: "We handle it transparently. If new requirements affect timeline or budget, we'll discuss it openly."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <section className="bg-background relative">
      {/* Compact Hero */}
      <div className="py-16 lg:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl md:text-4xl font-light text-foreground mb-4">
              FAQ
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Everything you need to know about working with us.
            </p>
          </motion.div>
        </div>
      </div>

      {/* FAQ Grid - 2 columns */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.05 }}
              className="border border-border rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary/40 text-xs font-medium">
                  0{categoryIndex + 1}
                </span>
                <h2 className="text-lg font-light text-foreground">
                  {category.category}
                </h2>
              </div>

              <Accordion type="single" collapsible className="space-y-2">
                {category.questions.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`${categoryIndex}-${index}`}
                    className="border-0 border-b border-border last:border-0"
                  >
                    <AccordionTrigger className="text-left text-sm text-foreground hover:no-underline py-3">
                      <span className="pr-4">{item.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-3">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-muted-foreground text-sm mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-sm"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
