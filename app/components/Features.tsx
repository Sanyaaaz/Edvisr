"use client";
import { motion } from "framer-motion";
import { FaLightbulb, FaChartBar, FaRobot } from "react-icons/fa";

const features = [
  { icon: <FaLightbulb size={40} />, title: "AI Insights", desc: "Smart analytics to improve teaching strategies." },
  { icon: <FaChartBar size={40} />, title: "Performance Tracking", desc: "Engagement heatmaps & student performance metrics." },
  { icon: <FaRobot size={40} />, title: "Auto-Generated Content", desc: "AI-powered quizzes, meme notes, and more." },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-4xl font-bold mb-8">Why Choose Edvisr?</h2>
      <div className="grid md:grid-cols-3 gap-8 px-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-primary rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-accent">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mt-4">{feature.title}</h3>
            <p className="mt-2 text-gray-300">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
