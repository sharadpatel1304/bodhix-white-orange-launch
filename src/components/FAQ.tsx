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
        a: "It starts with a conversation. We schedule a discovery call to understand your business, challenges, and goals. From there, we provide a clear proposal with timeline and investment. No obligation, just clarity."
      },
      {
        q: "What information do you need from us?",
        a: "We'll need to understand your business goals, target audience, existing systems (if any), and key pain points. The more context you share, the better we can tailor our solution."
      },
      {
        q: "How long does a typical project take?",
        a: "It depends on complexity. A simple web application might take 4-6 weeks. A comprehensive platform could be 3-6 months. We always provide realistic timelines upfront."
      }
    ]
  },
  {
    category: "Process & Approach",
    questions: [
      {
        q: "What makes BodhiX different from other agencies?",
        a: "We focus on simplicity and results. No bloated solutions, no unnecessary features. We build exactly what you need—nothing more, nothing less. And we're honest about what's possible."
      },
      {
        q: "Do you work with startups or only established businesses?",
        a: "Both. We've helped startups launch their first MVP and helped enterprises modernize legacy systems. The common thread is a genuine need for software that solves real problems."
      },
      {
        q: "Will we have direct communication with developers?",
        a: "Absolutely. No layers of project managers between you and the people building your product. Direct access means faster decisions and better outcomes."
      }
    ]
  },
  {
    category: "Technical",
    questions: [
      {
        q: "What technologies do you work with?",
        a: "We're technology-agnostic and choose the best tools for each project. That said, we often work with React, Node.js, Python, and modern cloud infrastructure. We prioritize technologies that are proven, maintainable, and scalable."
      },
      {
        q: "Do you provide ongoing support after launch?",
        a: "Yes. We offer maintenance and support packages to keep your software running smoothly. We also handle updates, security patches, and feature enhancements as needed."
      },
      {
        q: "Can you integrate with our existing systems?",
        a: "Most likely, yes. We have experience integrating with a wide range of APIs, databases, and third-party services. We'll assess compatibility during our discovery process."
      }
    ]
  },
  {
    category: "Investment",
    questions: [
      {
        q: "How do you price your projects?",
        a: "We prefer fixed-price projects when scope is clear. For ongoing work or evolving requirements, we offer time-and-materials arrangements. Either way, you'll always know what to expect."
      },
      {
        q: "Do you require payment upfront?",
        a: "We typically work with milestone-based payments—a deposit to begin, then payments tied to deliverables. This keeps everyone aligned and reduces risk for both sides."
      },
      {
        q: "What if our requirements change mid-project?",
        a: "Change happens. We handle it transparently. If new requirements affect timeline or budget, we'll discuss it openly and adjust the plan together. No surprises."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <section className="bg-background relative">
      {/* Hero Section */}
      <div className="min-h-[50vh] flex flex-col items-center justify-center px-6 border-b border-border relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl relative z-20"
        >
          <p className="text-primary text-xs font-medium tracking-[0.3em] uppercase mb-6">
            FAQ
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground leading-[1.1] mb-4">
            Questions? Answers.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Everything you need to know about working with us
          </p>
        </motion.div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        {faqs.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="mb-16 last:mb-0"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-primary/40 text-sm font-medium">
                0{categoryIndex + 1}
              </span>
              <h2 className="text-xl md:text-2xl font-light text-foreground">
                {category.category}
              </h2>
              <div className="flex-1 h-px bg-border" />
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {category.questions.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`${categoryIndex}-${index}`}
                  className="border border-border rounded-lg px-6 data-[state=open]:bg-secondary/30 transition-colors"
                >
                  <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                    <span className="pr-4">{item.q}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        ))}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center border-t border-border pt-16"
        >
          <p className="text-muted-foreground mb-6">
            Still have questions? We're here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
