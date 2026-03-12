import { motion } from "framer-motion";

const NotificationBar = () => {
  const messages = [
    "✦ Crafting Digital Excellence",
    "✦ Simplicity Meets Innovation",
    "✦ Transform Your Vision Into Reality",
    "✦ Building Tomorrow's Solutions Today",
    "✦ Where Code Meets Creativity",
  ];

  const duplicatedMessages = [...messages, ...messages, ...messages];

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-foreground border-b border-background/10 overflow-hidden py-2.5">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ["0%", "-33.33%"],
        }}
        transition={{
          x: {
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {duplicatedMessages.map((message, index) => (
          <span
            key={index}
            className="text-primary text-xs font-medium tracking-wide mx-12 inline-block uppercase"
          >
            {message}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default NotificationBar;
