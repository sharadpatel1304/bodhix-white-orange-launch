import { motion } from "framer-motion";

const NotificationBar = () => {
  const messages = [
    "✦ Crafting Digital Excellence",
    "✦ Simplicity Meets Innovation",
    "✦ Transform Your Vision Into Reality",
    "✦ Building Tomorrow's Solutions Today",
    "✦ Where Code Meets Creativity",
  ];

  // Duplicate messages for seamless loop
  const duplicatedMessages = [...messages, ...messages];

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-primary overflow-hidden py-2">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -50 * messages.length + "%"],
        }}
        transition={{
          x: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {duplicatedMessages.map((message, index) => (
          <span
            key={index}
            className="text-primary-foreground text-sm font-medium mx-8 inline-block"
          >
            {message}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default NotificationBar;
