import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const generateData = () => {
  return Array.from({ length: 12 }, (_, i) => ({
    name: `${i + 1}`,
    value: Math.floor(Math.random() * 50) + 30,
    growth: Math.floor(Math.random() * 40) + 20,
  }));
};

const LiveChart = () => {
  const [data, setData] = useState(generateData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((item) => ({
          ...item,
          value: Math.max(20, Math.min(80, item.value + (Math.random() - 0.5) * 10)),
          growth: Math.max(10, Math.min(60, item.growth + (Math.random() - 0.5) * 8)),
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border border-border p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Performance Index</p>
            <p className="text-2xl font-light text-foreground mt-1">
              {data[data.length - 1].value.toFixed(1)}%
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs text-muted-foreground">Live</span>
          </div>
        </div>
        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" hide />
              <YAxis hide domain={[0, 100]} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                fill="url(#colorValue)"
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="border border-border p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">System Growth</p>
            <p className="text-2xl font-light text-foreground mt-1">
              +{data[data.length - 1].growth.toFixed(1)}%
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs text-muted-foreground">Live</span>
          </div>
        </div>
        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="name" hide />
              <YAxis hide domain={[0, 80]} />
              <Line
                type="monotone"
                dataKey="growth"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
};

export default LiveChart;
