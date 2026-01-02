import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Metric {
  label: string;
  value: number;
  suffix: string;
  color: string;
}

const LiveMetrics = () => {
  const [metrics, setMetrics] = useState<Metric[]>([
    { label: "Active Users", value: 12847, suffix: "", color: "primary" },
    { label: "Uptime", value: 99.97, suffix: "%", color: "primary" },
    { label: "Response Time", value: 42, suffix: "ms", color: "primary" },
    { label: "Requests/sec", value: 8234, suffix: "", color: "primary" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((metric) => ({
          ...metric,
          value:
            metric.label === "Uptime"
              ? Math.max(99.9, Math.min(100, metric.value + (Math.random() - 0.5) * 0.02))
              : metric.label === "Response Time"
              ? Math.max(35, Math.min(60, metric.value + (Math.random() - 0.5) * 5))
              : Math.floor(metric.value + (Math.random() - 0.5) * 100),
        }))
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="border border-border p-6 relative overflow-hidden group hover:border-primary/30 transition-colors"
        >
          <div className="absolute top-3 right-3 flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          </div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
            {metric.label}
          </p>
          <p className="text-3xl font-light text-foreground">
            {metric.label === "Uptime"
              ? metric.value.toFixed(2)
              : metric.value.toLocaleString()}
            <span className="text-lg text-muted-foreground ml-1">{metric.suffix}</span>
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default LiveMetrics;
